// pages/own/components/divide/divide.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToDivide(){
      if(store.Tools().TapState() && store.User().check()){
        // 进入分红页面
        wx.navigateTo({
          url: '/pages/friends/friends',
        })
      }
    }
  }
})
