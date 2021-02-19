// pages/myteam/components/menu/menu.js
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
    goToNewPoints: function () {
      console.log("进入", "/pages/myteam/newpoints/newpoints")
      wx.navigateTo({
        url: '/pages/myteam/newpoints/newpoints',
      })
    },
    goToDetails: function () {
      console.log("进入", "/pages/myteam/details/details")
      wx.navigateTo({
        url: '/pages/myteam/details/details',
      })
    },
  }
})
