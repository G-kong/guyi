const config = {
  store: null,
  contact: {
    sendMessageTitle: "美团、饿了么，单单帮您省",
    sendMessageImg: "https://sswmapi.gykj007.com/wmxgimg/share-img.png",
    sendMessagePath: "/pages/index"
  },
  share: {
    title: '美团、饿了么，单单帮您省',
    path: '/page/index/index',
    imageUrl: "https://sswmapi.gykj007.com/wmxgimg/share-img.png"
  },
  timeline: {
    title: '美团、饿了么，单单帮您省',
    query: '/page/index/index',
    imageUrl: "https://sswmapi.gykj007.com/wmxgimg/share-img.png"
  },
  mainApp:{
    appid:'',
    path:''
  },
  webAuthUrl:'',
  init() {
    let store = config.store
    // 获取通用全局配置
    config.getMiniAppConfig("review").then((data) => {
      store.Control().init(data)
      // 获取特别全局配置
      config.getMiniAppConfig("review_" + store.appid).then((data) => {
        store.Control().init(data)
      })
    })
    // 获取客服配置
    config.getMiniAppConfig("contact").then((data) => {
      store.Config().contact = data
      config.runWatch("contact")
    })
    // 获取分享好友配置
    config.getMiniAppConfig("share").then((data) => {
      store.Config().share = data
      config.runWatch("share")
    })
    // 获取分享朋友圈配置
    config.getMiniAppConfig("timeline").then((data) => {
      store.Config().timeline = data
      config.runWatch("timeline")
    })
    //获取主小程序配置
    config.getMiniAppConfig("main_app").then((data) => {
      store.Config().mainApp = data
      config.runWatch("mainApp")
    })
    //获取跳转授权网页地址
    config.getMiniAppConfig("web_auth_url").then((data) => {
      store.Config().webAuthUrl = data.auth_url
      config.runWatch("webAuthUrl")
    })
  },
  
  getMiniAppConfig(configName) {
    return new Promise((resolve, reject) => {
      config.store.ApiServe().open.getMiniAppConfig({
        configName
      }).then((res) => {
        if (res.data) {
          try {
            const data = JSON.parse(res.data)
            // console.info("config", configName, data)
            resolve(data)
          } catch (e) {
            console.error("getMiniAppConfig_e", configName, e)
            reject(e)
          }
        }
      }, (err) => {
        console.error("getMiniAppConfig_err", configName, err)
        reject(err)
      })
    })
  },  
  watchFuns: {},
  addWatch(keys,watchFun) {
    if(typeof(keys) == 'string'){
      keys = [keys]
    }
    for(const i in keys){
      const key = keys[i]
      if(!config.watchFuns[key]){
        config.watchFuns[key] = []
      }
      if (watchFun) {
        config.watchFuns[key].push(watchFun)
        setTimeout(()=>{
          watchFun(key, config[key])
        },500)
      }
    }
  },
  runWatch(key){
    const watchFuns = config.watchFuns[key]
    if(watchFuns){
      for (const i in watchFuns) {
        const watchFun = watchFuns[i]
        if (watchFun) {
          watchFun(key, config[key])
        }
      }
    }
  }
}

export default config;