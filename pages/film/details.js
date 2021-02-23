// pages/film/components/filminfo.js
const store = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    title:'美食',
    item:{},
    tapCut: 0,
    fiveDays: [],
    address: [
      {
        placeName: '福州仓山万达广场店',
        fullAddress: '福州市仓山区浦上大道万达广场2号门四层',
        distance: '1.31km'
      },
      {
        placeName: '福州仓山万达广场店',
        fullAddress: '福州市仓山区浦上大道万达广场2号门四层诶哦去他家诶感觉舒服滴工具柜给冻豆腐国家搜地方',
        distance: '1.31km'
      },
      {
        placeName: '福州仓山万达广场店',
        fullAddress: '福州市仓山区浦上大道万达广场2号门四层',
        distance: '1.31km'
      },
      {
        placeName: '福州仓山万达广场店',
        fullAddress: '福州市仓山区浦上大道万达广场2号门四层',
        distance: '1.31km'
      },
    ]
  },

  purchDate: function(e) {
    const that = this;
    let time = store.Time().getTodayDate();
    let date = store.Time().getDates(7, time);
    console.log(date);

    // var fiveDay = [{},{},{},{},{},{}];
    var fiveDay = [];
    for(let i in date) {
      let d = date[i].time.split('-');
      let r = d[1] + '月' + d[2] + '日';
      if (i < 6) {
        switch (i) {
          case '0':
            // fiveDay[i].id = i;
            fiveDay[i] = "今天" + r;
            break;
          case '1':
            // fiveDay[i].id = i;
            fiveDay[i] = "明天" + r;
            break;
          case '2':
            // fiveDay[i].id = i;
            fiveDay[i] = "后天" + r;
            break;
          case '3':
          case '4':
          case '5':
            // fiveDay[i].id = i;
            fiveDay[i] = date[i].week + r;
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

  goToSchedule: function(event) {
    const place = event.currentTarget.dataset.place;
    const full = event.currentTarget.dataset.full;
    console.log("place:" + place + " full:" + full);
    wx.navigateTo({
      url: './schedule/schedule?place='+place+'&full='+full,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options",options)
    const that = this;
    that.setData({
      id: options.id,
      title: options.title
    })

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
    var that = this;
    store.ApiServe().film.getFilmById({filmId:that.data.id}).then((res) => {
      console.info("res",res)
      that.data.item = res.data
      that.data.item.publishDate = store.Tools().dateFtt('yyyy-MM-dd', that.data.item.publishDate)
      that.setData({
        item:that.data.item
      })
    }, (err) => {
      store.Tools().Toast(err.msg)
      // console.log('err', err)
    })
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