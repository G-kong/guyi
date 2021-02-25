// pages/myteam/details/details.js
const store = getApp().globalData;
const team = store.ApiServe().team;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0,
    list: [
      {
        id: 0,
        friend: "直推好友"
      },
      {
        id: 1,
        friend: "扩散好友"
      }
    ],

    subFrined: []
  },

  getFriend: function(e) {
    const that = this;
      that.setData({
        tabCur: e.currentTarget.dataset.id,
      });
      that.getUserInviteDetailList(that.data.tabCur);
  },

  formatStr: function(str) {
    return str.substring(0,1) + "*"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    const that = this;
    that.getUserInviteDetailList(that.data.tabCur);
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
   * 获取团队数据明细
   */
  getUserInviteDetailList: function (inviteType) {
    const that = this;
    team.getUserInviteDetailList({
      inviteType: inviteType
    }).then((resp) => {
      that.setData({
        subFrined: resp.data
      });
      for(const i in that.data.subFrined) {
        var str = that.formatStr(that.data.subFrined[i].nickname);
        that.data.subFrined[i].nickname = str;
        // console.log(str);
        that.setData({
          subFrined: that.data.subFrined
        })
      }
    }, (err) => {
      store.Tools().Toast(err.msg)
      // console.log('err', err)
    })
  }

})