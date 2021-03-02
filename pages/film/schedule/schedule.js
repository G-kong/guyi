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
    scheduleList: [],
    // films: {
    //   id: 0,
    //   name: "你好，李焕英",
    //   score: "8.1分",
    //   time: "128分钟",
    //   tyte: "喜剧",
    //   actor: "贾玲 / 张小斐 / 沈腾"
    // },
    // pieceList: [
    //   {
    //     id: "0",
    //     startTime: "19:00",
    //     endTime: "21:00散场",
    //     language: "国语 2D",
    //     fewNumber: "2号厅（请出示健康码,进场带口罩）",
    //     money: "55.5元",
    //     marPri: "市场价88.8元"
    //   },
    //   {
    //     id: "1",
    //     startTime: "8:00",
    //     endTime: "11:00散场",
    //     language: "国语 2D",
    //     fewNumber: "3号厅（请出示健康码,进场带口罩）",
    //     money: "33.5元",
    //     marPri: "市场价88.8元"
    //   },
    //   {
    //     id: "2",
    //     startTime: "12:00",
    //     endTime: "15:00散场",
    //     language: "国语 3D",
    //     fewNumber: "5号厅（请出示健康码,进场带口罩）",
    //     money: "44.5元",
    //     marPri: "市场价55.8元"
    //   }
    // ]
  },

  // current改变
  handelSwpierChange: function (e) {
    const that = this;
    that.setData({
      swiperCurrent: e.detail.current,
      film: that.data.filmScheduleList[e.detail.current].film
    })
  },

  daySelect: function(e) {
    const that = this;
    that.setData({
      tapCut: e.currentTarget.dataset.id,
    })
    // console.log(that.data.tapCut);
  },

  getFilmId: function(e) {
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
    console.log("options",options)
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
    }).then((resp) => {
      console.log(resp.data);
      that.setData({
        filmScheduleList: resp.data,
      })
      console.log("filmScheduleList：" + that.data.filmScheduleList);
      for (let i in resp.data) {
        if (that.data.filmId == resp.data[i].filmId) {
          that.setData({
            swiperCurrent: i,
          })
        }
      }
      that.parseData();
    },(err) => {
      store.Tools().Toast(err.msg)
        // console.log('err', err)
    })
  },

  parseData: function() {
    const that = this;
    const list = [];
    const dates = {filmId: "", date: []};
    const datess = [];
    const schedule = [];
    const film = [];
    const id = [];
    for (let i in that.data.filmScheduleList) {
      list[i] = that.data.filmScheduleList[i].dateList;
      film[i] = that.data.filmScheduleList[i].film;
      id[i] = that.data.filmScheduleList[i].filmId;
    };
    for (let i in list) {
      var date = [];
      for (let j in list[i]) {
        console.log("list[" + i + "][" + j + "]：" + list[i][j].date);
        date[j] = list[i][j].date;
        dates.filmId = id[i];
        dates.date = date; 
        datess[i] = dates;
      }
      console.log("date:" + date);
    };

    console.log("dates：" + datess);
   
    that.setData({
      dateList: date,
      films: film,
      filmId: id
    })
    console.log("dateList：" + that.data.dateList);
    console.log("films：" + that.data.films);
    console.log("filmId：" + that.data.filmId);
  }
})