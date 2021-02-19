// pages/guides/meituanwm/index.js
const store = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redbagShow: false,
    fingerShow: false,
    item: {},
  },
  goToMini(){
    if(store.Tools().TapState()){
      const that = this
      const item = that.data.item
      wx.navigateToMiniProgram({
        appId: item.navigator.appid,
        path: item.navigator.path,
        envVersion: "release"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    const itemStr = decodeURIComponent(options.item)
    that.data.item = JSON.parse(itemStr);
    that.setData({
      item: that.data.item
    })

    store.Control().addWatch((data) => {
      // console.log("addWatch", store.Control().show("redbaglead"))
      //注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
      that.setData({ 
        redbagShow: store.Control().get("btnicon")['redbag'] || false,
        fingerShow: store.Control().get("btnicon")['finger'] || false
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    

   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }

})