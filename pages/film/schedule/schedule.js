// pages/film/schedule/schedule.js
const store = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent:0,
    place: '',
    full: '',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }, {
      id: 7,
      type: 'image',
      url: 'https://gw.alicdn.com/i2/O1CN01cCbKPv1rhFBSyNqNc_!!6000000005662-0-alipicbeacon.jpg_480x480Q30s150.jpg'
    }],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    circular: true,
    beforeColor: "white",//指示点颜色 
    afterColor: "coral",//当前选中的指示点颜色 
    previousmargin:'40px',//前边距
    nextmargin:'40px',//后边距
  },

  // current改变
  handelSwpierChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current,
      imgUrl: this.data.swiperList[e.detail.current]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options",options)
    const that = this;
    that.setData({
      place: options.place,
      full: options.full
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})