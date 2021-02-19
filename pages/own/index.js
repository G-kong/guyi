// pages/own/index.js
const store = getApp().globalData;
const auth = store.ApiServe().auth;
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    viceTicket: ""
  },
  bindTicket(){
    const that = this
    store.ApiServe().auth.bindTicket({
      viceTicket: that.data.viceTicket
    }).then((resp) => {
      //默认触发点击事件
      store.User().check()
    }, (error) => {
      console.log("bindTicket error:", error);
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //用户中心数据判断
    const that = this
    store.User().refresh()
    if(options.viceTicket){
      // 如果有传原小程序 进行绑定操作
      that.setData({ viceTicket: options.viceTicket})
      that.bindTicket()
    } 
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