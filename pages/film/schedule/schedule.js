// pages/film/schedule/schedule.js
const store = getApp().globalData;
const film = store.ApiServe().film;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: "",
    cinemaName: "",
    address: "",
    cinemaId: "",
    circular: true,
    tapCut: 0,
    filmScheduleList: [],
    film: {},
    dateList: [],
    films: [],
    filmId: "",
    scheduleList: []
  },

  // current改变
  handelSwpierChange: function (e) {
    const that = this;
    that.setData({
      swiperCurrent: e.detail.current,
      film: that.data.filmScheduleList[e.detail.current].film,
      dateList: that.data.filmScheduleList[e.detail.current].dateList,
      scheduleList: that.data.filmScheduleList[e.detail.current].dateList[0].scheduleList,
      tapCut: 0
    })
  },

  daySelect: function(e) {
    const that = this;
    that.setData({
      tapCut: e.currentTarget.dataset.id,
      scheduleList: that.data.filmScheduleList[that.data.swiperCurrent].dateList[e.currentTarget.dataset.id].scheduleList
    })
  },

  filmSelect: function(e) {
    const that = this;
    if(store.Tools().TapState()){
      const cut_index = e.currentTarget.dataset.index
      if(that.data.swiperCurrent != cut_index){
        // console.log("index----------------------" + cut_index);
        that.setData({
          swiperCurrent: e.currentTarget.dataset.index,
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("options",options)
    const that = this;
    that.setData({
      cinemaName: options.cinemaName,
      address: options.address,
      cinemaId: options.cinemaId,
      filmId: options.filmId
    });
    that.getScheduleList();
    // that.getDateList();
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
   * 具体影院的场次排期
   */
  getScheduleList: function() {
    const that = this;
    film.getScheduleList({ 
      cinemaId: that.data.cinemaId
      // cinemaId: 426
    }).then((resp) => {
      // console.log(resp.data);
      that.setData({
        filmScheduleList: resp.data,
      })
      // console.log("filmScheduleList：" + that.data.filmScheduleList);
      for (let i in resp.data) {
        if (that.data.filmId == resp.data[i].filmId) {
          that.setData({
            swiperCurrent: i,
          })
        }
      }
      // that.parseData();
    },(err) => {
      store.Tools().Toast(err.msg)
        // console.log('err', err)
    })
  },

  goToCinema: function(event) {
    // console.log("event:" + event.currentTarget.dataset.schedule);
    const that = this;
    const cinemaName = that.data.cinemaName;
    const film = encodeURIComponent(JSON.stringify(that.data.film));
    const schedule = encodeURIComponent(JSON.stringify(event.currentTarget.dataset.schedule));
    const date = that.data.dateList[that.data.tapCut].date;
    console.log("=============" + cinemaName + "===" + film + "===" + schedule + "===" + date);
    console.log("goToCinema");
    wx.navigateTo({
      url: '/pages/film/cinema/cinema?cinemaName=' + cinemaName + '&film=' + film + '&schedule=' + schedule + '&date=' + date
    })
  }

})