// pages/own/components/user/user.js
const store = getApp().globalData;
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    pmcUser: {
      avatar: "https://sswmapi.gykj007.com/wmxgimg/user_avatar.png",
      guserId: "00000",
      nickname: "请登录"
    }
  },
  created(){
    const that = this;
    store.User().addWatch((data) => {
      console.log("User addWatch", data)
      //注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
      that.setData({
        pmcUser: {
          guserId: data.guserId,
          avatar: data.avatar,
          nickname: data.nickname
        }
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLogin(){
      if(store.Tools().TapState() && store.User().check()){
        store.User().refresh()
      }
    }
  }
})
