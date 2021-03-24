import api from "./api/index";
import control from "./utils/control";
import storage from "./utils/storage";
import tools from "./utils/tools";
import config from "./utils/config";
import user from "./utils/user";
import logger from "./utils/logger";
import time from "./utils/time";

//app.js
App({
  onLaunch: function() {
    const store = this.globalData;
    if (wx.cloud) {
      // wx.cloud.init({
      //   traceUser: true
      // })
       // 获取appid
      const accountInfo = wx.getAccountInfoSync()
      store.appid = accountInfo.miniProgram.appId
      store.init()
      wx.getSystemInfo({
        success: e => {
          // console.log("brand",e.brand)
          store.isDebug = (e.brand == "devtools")
          store.StatusBar = e.statusBarHeight;
          let capsule = wx.getMenuButtonBoundingClientRect();
          if (capsule) {
            store.Custom = capsule;
            store.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
          } else {
            store.CustomBar = e.statusBarHeight + 50;
          }
        }
      })
    }
  },
  onShow(){
    
  },
  globalData: {
    appid:"",
    isDebug:true,
    init(){
      const store = this
      if(!store.isDebug) logger.init({islog:false})
      store.Config().init()
      store.ApiServe().ticket.verify(store).then((res)=>{},(err)=>{})
    },
    ApiServe(){
      return api
    },
    Control(){
      return control
    },
    Storage(){
      return storage
    },
    User(){
      const that = this
      if(!user.store){
        user.store = that
      }
      return user
    },
    Tools(){
      const that = this
      if(!tools.store){
        tools.store = that
      }
      return tools
    },
    Config(){
      const that = this
      if(!config.store){
        config.store = that
      }
      return config
    },
    Time(){
      const that = this
      if(!time.store){
        time.store = that
      }
      return time
    }
  },

    //我是B，我第二个修改提交

    //我是A，我第一个修改提交
})
