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

    subFrined: [
      {
        avatar: "http://thirdwx.qlogo.cn/mmopen/V0mhkIwf3EHzVyBwMaCR3S6HxwpohFvPn2J8Jib01QgyXOD5bBfaSclvia66nxia5RXeab0wMeQBChXmicrk7fnNtE2HyruZfCQg/132",
        nickName: "G-kong",
        time: "2020-02-20 20:20",
        renNum: "30",
        ordeSize: "20",
        money: "20"
      },
      {
        avatar: "http://thirdwx.qlogo.cn/mmopen/NhwzVYNvSSRlibBQGVoM5ibibyXKcicHibjthqVKhxPDIibWd0reyf29hloKPWGbCsQLmGr7WwDTS0XAZuldRcVNmF0iaxibwCgFgcicD/132",
        nickName: "苦桉树",
        time: "2020-02-20 20:20",
        renNum: "0",
        ordeSize: "10",
        money: "10"
      },
      {
        avatar: "http://thirdwx.qlogo.cn/mmopen/V0mhkIwf3EHzVyBwMaCR3S6HxwpohFvPn2J8Jib01QgyXOD5bBfaSclvia66nxia5RXeab0wMeQBChXmicrk7fnNtE2HyruZfCQg/132",
        nickName: "G-kong",
        time: "2020-02-20 20:20",
        renNum: "0",
        ordeSize: "20",
        money: "20"
      },
      {
        avatar: "http://thirdwx.qlogo.cn/mmopen/V0mhkIwf3EHzVyBwMaCR3S6HxwpohFvPn2J8Jib01QgyXOD5bBfaSclvia66nxia5RXeab0wMeQBChXmicrk7fnNtE2HyruZfCQg/132",
        nickName: "G-kong",
        time: "2020-02-20 20:20",
        renNum: "0",
        ordeSize: "20",
        money: "20"
      },
      {
        avatar: "http://thirdwx.qlogo.cn/mmopen/V0mhkIwf3EHzVyBwMaCR3S6HxwpohFvPn2J8Jib01QgyXOD5bBfaSclvia66nxia5RXeab0wMeQBChXmicrk7fnNtE2HyruZfCQg/132",
        nickName: "G-kong",
        time: "2020-02-20 20:20",
        renNum: "0",
        ordeSize: "20",
        money: "20"
      },
    ]
  },

  getFriend: function(e) {
    const that = this;
      that.setData({
        tabCur: e.currentTarget.dataset.id
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    
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

})