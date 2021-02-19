// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      id: "0",
      question: "为什么直接进外卖平台找不到这些红包领取的地方呢?"
    },{
      id: "1",
      question: "从你们的链接领了红包只能当场用掉吗？"
    },{
      id: "2",
      question: "为什么我打开你们提供的链接后没有找到领取的地方？"
    },{
      id: "3",
      question: "为什么领取后没有？或者无法使用？"
    },{
      id: "4",
      question: "为什么领取的红包数额比别人小？"
    },{
      id: "5",
      question: "为什么没看到教程里的领券入口？"
    },{
      id: "6",
      question: "为什么领红包的链接点开没有东西？"
    }]
  },

  /**
   * 进入回答页面
   * @param {} event 
   */
  goToAnswer: function(event){
      const id = event.currentTarget.dataset.id
      console.log(id);
      wx.navigateTo({
        url: './answer/answer?id='+id,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      
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