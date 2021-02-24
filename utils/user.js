const user = {
  store: null,
  data: {
    guserId: 0,
    avatar: "",
    nickname: "",
    pointUncredited: 0,
    pointCredited: 0,
    pointOut: 0,
    point: 0
  },
  check(){
    if(user.data.guserId > 0 ){
      return true
    } else {
      const ticket = user.store.Storage().getSync('ticket')
      //判断是否主小程序
      console.log(user.store.appid, user.store.Config().mainApp);
      if (user.store.appid == user.store.Config().mainApp.appid) {// //跳转web授权
        // let authUrl = user.store.Config().webAuthUrl
        // // authUrl = "http://wmxg.gykj007.com/take-out/user/mini_auth"
        // // authUrl += "?miniTicket=" + ticket
        // authUrl += "?miniTicket=" + ticket
        // authUrl += "&miniAppId=" + user.store.appid
        // authUrl += "&miniPath=" + "/pages/own/index"
        // wx.navigateTo({ 
        //   url: '/pages/browser/index?url=' + encodeURIComponent(authUrl)
        // })
        //获取unionid
        wx.login({
          success(res) {
            let code = res.code; //登录凭证
            if (code) {
              //2、调用获取用户信息接口
              wx.getUserInfo({
                success: function (res) {
                  console.log({
                    encryptedData: res.encryptedData,
                    iv: res.iv,
                    code: code
                  })
                  //3.解密用户信息 获取unionid
                  user.store.ApiServe().auth.decodeMiniUserInfo({
                    appId: user.store.appid,
                    code: code,
                    encryptedData: res.encryptedData,
                    iv: res.iv
                  }).then((resp) => {
                    if (resp.code==0) {
                      let unionid = resp.data;
                      //4.根据unionid绑定相关信息
                      user.store.ApiServe().auth.bindUnionid({
                        unionid: unionid
                      }).then((resp) => {
                        //5.刷新
                        if (resp.code == 0) {
                          user.refresh();
                        } else {
                          console.log('根据unionid绑定相关信息失败', resp.msg);
                        }
                      }, (error) => {
                        console.log('根据unionid绑定相关信息失败')
                      });
                    } else {
                      console.log('解密用户信息失败', resp.msg);
                    }
                  }, (error) => {
                    console.log('解密用户信息失败')
                  });
                },
                fail: function () {
                  console.log('获取用户信息失败')
                }
              });

            } else {
              store.wxLogining = false
              console.error('wx.login失败！' + res.errMsg)
            }
          }
        });} else {
        //跳转主小程序
        user.store.Tools().Dialog({
          content: "请先进入主小程序授权登陆",
          showCancel: true
        }).then(()=>{
          wx.navigateToMiniProgram({
            "appId": user.store.Config().mainApp.appid,
            "path": user.store.Config().mainApp.path + "?viceTicket=" + ticket,
            "envVersion": "release"
          })
        })
      }
      return false
    }
  },
  refresh(){
    user.store.ApiServe().auth.getMiniUser().then((resp) => {
      console.log("user refresh",resp)
      //判断是否在pmc授权
      let guserId = resp.data.guserId;
      if (guserId != null) {
        //获取个人用户数据
        user.store.ApiServe().auth.getPmcUser({
          guserId: guserId
        }).then((resp) => {
          resp.data.guserId = guserId
          user.init(resp.data)
        }, (error) => { });
      }
    });
    return user
  },
  init(data) {
    for (const key in data) {
      user.data[key] = data[key]
      // if(typeof(control.data[key]) != "undefined"){

      // }
    }
    // setTimeout(() => {
      // console.log("user.init", user.watchFuns.length, user.data)
      for (const i in user.watchFuns) {
        const watchFun = user.watchFuns[i]
        if (watchFun) {
          watchFun(user.data)
        }
      }
    // }, 500)
  },
  watchFuns: [],
  addWatch(watchFun) {
    // 注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
    if (watchFun) {
      user.watchFuns.push(watchFun)
      setTimeout(()=>{
        watchFun(user.data)
      },500)
    }
  },
  get(key) {
    // console.log("control.get", key, control.data, control.data[key])
    if (!user.data[key]) {
      return {}
    }
    return user.data[key]
  }
}
export default user;