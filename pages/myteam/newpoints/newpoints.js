// pages/myteam/newpoints/newpoints.js
const store = getApp().globalData;
const team = store.ApiServe().team;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    const that = this;
    that.getUserInviteList();
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 用户点击右上角转发到朋友圈
   */
  onShareTimeline: function () {

  },

  /**
   * 获取用户新增数据
   */
  getUserInviteList: function() {
    team.getUserInviteList({

    }).then((resp) => {
      console.log("返回数据" + resp.data);
      this.setData({
        list: resp.data
      })
    }, (err) => {
      store.Tools().Toast(err.msg)
      // console.log('err', err)
    })
  }

})