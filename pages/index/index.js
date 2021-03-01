// pages/index/index.js
const store = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containerHeight: "height: calc(100vh - " + store.CustomBar + "px)",
    
    ticket: null,
    isShadeShow: false,
    isRedBagLeadShow: store.Control().show("redbaglead"),
    isRedBagShadeShow: store.Control().show("redbagshade"),
    isAdShow: store.Control().show("ad"),
    unitAdId: store.Control().get("ad")['unitid'] || ''
  },
  addWatch(){
    const that = this
    store.Control().addWatch((data) => {
      // console.log("addWatch", store.Control().show("redbaglead"))
      //注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
      that.setData({
        isRedBagLeadShow: store.Control().show("redbaglead"),
        // isRedBagShadeShow: store.Control().show("redbagshade"),
        isAdShow: store.Control().show("ad"),
        unitAdId: store.Control().get("ad")['unitid'] || ''
      })
    })
    store.ApiServe().open.getIsShowShade(store.appid,{}).then((res) => {
      // console.log("addWatch", store.Control().show("redbaglead"))
      //注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
      that.setData({
        isRedBagShadeShow: res.data
      })
    })
  },
  addUserTag(tag){
    const that = this
    store.ApiServe().auth.addUserTag({
      userTag:tag,
      ext:tag
    }).then((res) => {})
  },
  setShadeShow(data) {
    const that = this
    that.setData({
      isShadeShow: data.detail.isShow
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    that.addWatch()
    if(typeof(options.commission) != "undefined"){
      that.addUserTag(options.commission)
    }

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
  onShow: function () {
    const that = this
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
  onShareAppMessage: function (res) {
    console.log('onShareAppMessage',res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return store.Config().share
  },
  onShareTimeline(){
    return store.Config().timeline
  }
})