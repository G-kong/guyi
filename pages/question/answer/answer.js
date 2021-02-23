// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx: null,

    array: [{
      id: "0",
      answer: "因为本平台免费发放的红包，是美团＆饿了么官方为了推广市场，提升当地外卖销量，而开放的推广红包。只有通过本平台的推广链接才能领取哦，从外卖平台直接进入是无法领取的。"
    },{
      id: "1",
      answer: "小主们是通过本平台跳转到官方小程序的，领取和下单都是在官方的外卖平台，即使退出了也可以在其他链接和平台下单，只要是在红包的使用条件之内都可以使用哦~"
    },{
      id: "2",
      answer: "由于部分地区没有参与外卖平台的官方活动，所以无法领取。若是定位错误，小主可以点击链接页面左上角切换城市后再试，若依旧不能领取，请过段时间再试。"
    },{
      id: "3",
      answer: "请确认微信登陆领红包的美团＆饿了么账号与下单的账号是否一致。如果一致，请到各平台的红包列表查看红包的使用门槛和时间限制，符合条件就能使用了哦~"
    },{
      id: "4",
      answer: "官方会根据用户定位的位置，当地的外卖销量和用户在平台的日常使用情况随机给用户发放红包，越早参与活动红包数额也会越大哦~。"
    },{
      id: "5",
      answer: "平台会不定期更新哦，更新后可能会迁移入口，以平台实际提供的入口为准。"
    },{
      id: "6",
      answer: "这是跳转问题哦。可以返回重试一下，或者等待一会儿再试下。"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    this.setData({
      idx: options.id
    })
    console.log(this.data.idx);
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