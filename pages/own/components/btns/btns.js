// pages/own/components/btns/btns.js
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
    goToFrineds: function () {
      // if(store.Tools().TapState() && store.User().check()){
        console.log("进入", "/pages/friends/friends")
        wx.navigateTo({
          url: '/pages/friends/friends',
        })
      // }
    },
    goToMyTeam: function () {
      // if(store.Tools().TapState() && store.User().check()){
        console.log("进入", "/pages/myteam/myteam")
        wx.navigateTo({
          url: '/pages/myteam/myteam',
        })
      }
    // }
  }
})
