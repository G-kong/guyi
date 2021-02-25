// pages/film/schedule/schedule.js
const store = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent:7,
    place: '',
    full: '',
    circular: true,
    tapCut: 0,
    fiveDays: [],
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
  },

  // current改变
  handelSwpierChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current,
      imgUrl: this.data.swiperList[e.detail.current]
    })
  },

  purchDate: function(e) {
    const that = this;
    let time = store.Time().getTodayDate();
    let date = store.Time().getDates(7, time);
    console.log(date);

    // var fiveDay = [{},{},{},{},{},{}];
    var fiveDay = [];
    for(let i in date) {
      if (i < 6) {
        switch (i) {
          case '0':
            // fiveDay[i].id = i;
            fiveDay[i] = "今天" + date[i].time;
            break;
          case '1':
            // fiveDay[i].id = i;
            fiveDay[i] = "明天" + date[i].time;
            break;
          case '2':
            // fiveDay[i].id = i;
            fiveDay[i] = "后天" + date[i].time;
            break;
          case '3':
          case '4':
          case '5':
            // fiveDay[i].id = i;
            fiveDay[i] = ' ' + date[i].time;
            break;
          default:
            break;
        }
      }
    }
    console.log(fiveDay);
    that.setData({
      fiveDays: fiveDay
    })
    console.log(that.data.fiveDays)
  },

  daySelect: function(e) {
    const that = this;
    that.setData({
      tapCut: e.currentTarget.dataset.id,
    })
    // console.log(that.data.tapCut);
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
    });
    that.purchDate();
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