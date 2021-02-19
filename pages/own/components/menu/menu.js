// pages/own/components/menu/menu.js
const store = getApp().globalData
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
    container: store.Config().contact,
    isMainMiniApp: false,
  },

  created(){
    const that = this;
    store.Config().addWatch("mainApp, contact",(key,data) => {
      console.log("own menu addWatch", data)
      //注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
      let newData = {}
      switch (key) {
        case "mainApp": data["isMainMiniApp"] = (store.appid == data.appid); break;
        case "contact": data["contact"] = data; break;
      }
      that.setData(newData)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goToQuestion: function () {
      console.log("进入", "/pages/question/question")
      wx.navigateTo({
        url: '/pages/question/question',
      })
    },
  }
})
