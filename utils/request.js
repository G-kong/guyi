import { hexMD5 } from "./md5.js"
import storage from "./storage.js"

// const rootDocment = "https://sswmapi.gykj007.com/wmxg";
// const rootDocment = "http://wmxg.cn.utools.club";
// const rootDocment = "http://127.0.0.1:10029";
// const rootDocment = "http://192.168.1.146:18091/wmxg";
// const rootDocment = "http://192.168.1.13:10029";
const rootDocment = "http://wmxg-mini.cn1.utools.club";
const dataKey = "";

const getUrl = (options) =>{
  let url = options.url
  if(url.indexOf("http")==-1){
    url = rootDocment+url
  }
  if(options.t == true){
    if(url.indexOf("?")==-1){
      url += "?"
    }else{
      url += "&"
    }
    url += "t=" + (new Date()).getTime()
  }
  return url
}
const setHeader = (options)=>{

  return new Promise((resolve, reject) => {
    let header = {
      'content-type':'application/x-www-form-urlencoded',
      ...(options.header || {})
    }
    if(options.ticket == true){
      getTicket(options).then((ticket) =>{
        header['ticket']= ticket
        resolve(header)
      }, (errMsg)=>{
        console.error('获取ticket失败了',errMsg)
        reject()
      })
    }else{
      resolve(header)
    }
  })
}

const getCache = (options,resolve)=>{
  options.cache = options.cache || 0
  options.rakey = hexMD5(JSON.stringify(options))
  if(storage.getSync(options.rakey) && options.cache > 0){
    // console.log("调用缓存")
    const response = storage.getSync(options.rakey)
    setResult(options,response, resolve)
    return true
  }
  return false
}

const setCache = (options,response)=>{
  if(options.cache > 0){
    storage.setSync(options.rakey,response,options.cache)
  }
}

const getCode2Session = (appid,params) => request({
  url: '/applet/code2Session/'+appid,
  method: 'get',
  params,
  cache:10
})

const getTicket = (options) =>{
  return new Promise((resolve, reject) => {
    (async () => {
      let store = options.store || getApp().globalData;
      while(store.wxLogining){
        console.log('等待获取ticket')
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      let ticket = storage.getSync('ticket')
      if(ticket){
        console.log('缓存获取到ticket')
        resolve(ticket)
      }else{
        store.wxLogining = true
        wx.login({
          success(res) {
            if (res.code) {
              //发起网络请求
              console.log('code',res.code)
              // console.log('getApp().globalData',getApp().globalData.appid)
              getCode2Session(store.appid, {code:res.code}).then((res) => {
                store.wxLogining = false
                console.info("res",res)
                if(res.code == 0){
                  // console.log('缓存ticket', res.data)
                  storage.setSync('ticket', res.data, 47 * 60 * 60) //服务器有效期 48小时
                  resolve(res.data)
                }else{
                  console.error('获取ticket失败')
                  reject(res.msg)
                }
              }, (err) => {
                store.wxLogining = false
                console.error('code转ticket失败！' + err.msg)
                reject(err.msg)
              })
            } else {
              store.wxLogining = false
              console.error('wx.login失败！' + res.errMsg)
              reject(res.errMsg)
            }
          }
        })
      }
    })()
  })
}

const setResult = (options,resp, fun)=>{
  // console.info('setResult',resp)
  if (resp.code != 0) {
    // reject(resp)
    if(fun){
      fun(resp)
    }
  } else {
    setCache(options,resp)
    if(fun){
      fun(resp)
    }
  }
}

const request = (options) => {
  // console.info("request",options)
  return new Promise((resolve, reject) => {
    if(getCache(options,resolve)){ return }
    setHeader(options).then((header)=>{
      let url = getUrl(options)
      wx.request({
        url: url,
        method: options.method,
        data: (options.method == "post" ? options.data : options.params) || {},
        header: header,
        success: (response) => {
          let resp = {}
          if(response.statusCode == 200){
            resp = response.data
            // console.info('resp',resp,options)
            if(resp.code == 300){
              if(!options.isRetry){
                console.error('ticket过期了请求失败,重新获取ticket在请求一次')
                storage.clearSync('ticket')
                getTicket(options).then((ticket) =>{
                  // 获取ticket后在请求一次
                  options.isRetry = true
                  request(options).then((resp)=>{
                    setResult(options, resp, resolve)
                  }, (err)=>{
                    setResult(options, err, reject)
                  })
                }, (errMsg)=>{
                  // console.error('获取ticket失败了',errMsg)
                  const err = { code: -405, msg: "获取ticket失败了!" }
                  setResult(options, err, reject)
                })
              }else{
                const err = { code: -406, msg: "获取ticket后,重试还是失败!" }
                setResult(options, err, reject)
              }
            } else {
              setResult(options, resp, resolve)
            }
          }else{
            // console.error("网络请求失败",options)
            const err = { code: -406, msg: "网络请求失败!" }
            setResult(options, err, reject)
          }
        },
        fail: (error) => {
          const err = { code: -404, msg: "请检测网络!" }
          setResult(options, err, reject)
        }
      })
    },()=>{
      // console.error('接口需要ticket,但是获取失败!')
      const err = { code: -406, msg: "接口需要ticket,但是获取失败!" }
      setResult(options, err, reject)
    })
  })
}

export default request;
