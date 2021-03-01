// pages/own/index.js
const store = getApp().globalData;
const auth = store.ApiServe().auth;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containerHeight: "height: calc(100vh - " + store.CustomBar + "px)",
    hotClass:"cu-item flex-sub text-orange cur",
    soonClass:"cu-item flex-sub",
    hotShow:false,
    soonShow:false,
    pull: {
      isLoading: false,
      // loading: '../../image/common/pull_refresh.gif',
      pullText: '正在加载'
    },
    push: {
        isLoading: false,
        // loading: '../../image/common/pull_refresh.gif',
        pullText: '-上拉加载更多-'
    },
  },
  toload(e) {
    console.log('加载', e)
  },
  bindDownLoad: function () {
    console.log('bindDownLoad')
    var that = this;
    // GetList(that);
  },
  scroll: function (event) {
    console.log('scroll')
      this.setData({
          scrollTop: event.detail.scrollTop
      });
  },
  refresh: function (event) {
    console.log('refresh')
      // page = 1;
      // this.setData({
      //     list: [],
      //     scrollTop: 0
      // });
      // GetList(this)
  },
  onPullDownRefresh: function () {
      console.log("下拉")
  },
  onReachBottom: function () {
      console.log("上拉");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    var type = options.type
    that.changeFilm(type)
    console.log("getLocation=>")
    store.Tools().getLocation_wx().then((position)=>{
      console.log("position=>",position)
    },()=>{
       console.log("position=>",position)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  filmSelect:function(e){
    console.log("1111")
    let that=this;
    let type=e.currentTarget.dataset.type;
    that.changeFilm(type)
  },
  changeFilm(type){
    let that=this;
    switch (type){
      case "soon":
        that.setData({
          hotClass:"cu-item flex-sub",
          soonClass:"cu-item flex-sub text-orange cur",
          hotShow:false,
          soonShow:true
        })
        ;break;
      case "hot":
      default:
        that.setData({
          hotClass:"cu-item flex-sub text-orange cur",
          soonClass:"cu-item flex-sub",
          hotShow:true,
          soonShow:false
        })
        ;break;
    }
  }

})