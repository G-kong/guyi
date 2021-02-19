// pages/eleme/login.js
const store = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar:store.StatusBar,
    item: {},
    gpsOp: {
      longitude: 0,
      latitude: 0,
      isPosition: false
    },
    forms: {
      mobile: '',
      code: '',
      btnClass: 'disabled'
    },
    smsOp: {
      text: '发送验证码',
      maxNum: 60,
      curNum: 0,
      timer: -1
    }
  },
  BackPage() {
    wx.navigateBack({
      delta: 1
    });
  },
  limitLenght(event) {
    const that = this
    let forms = that.data.forms
    let key = event.currentTarget.dataset.key
    let lenght = event.currentTarget.dataset.lenght
    forms[key] = event.detail.value.substring(0, lenght)
    that.setData({
      forms: forms
    })
    that.isSubmit()
  },
  locationInit(){
    const that = this
    store.Tools().getLocation().then((position)=>{
      that.init(position)
    },()=>{
      that.BackPage()
    })
  },
  init(position) {
    const that = this
    let gpsOp = that.data.gpsOp
    console.log('position', position)
    gpsOp.longitude = position.lon
    gpsOp.latitude = position.lat
    gpsOp.isPosition = true
    that.setData({gpsOp:gpsOp})
  },
  isSmsSend() {
    const that = this
    let forms = that.data.forms
    if (forms.mobile.length != 11) {
      return false
    }
    if(!store.Tools().checkStr(forms.mobile,'phone')){
      return false
    }
    return true
  },
  onSend(){
    const that = this
    let forms = that.data.forms
    let smsOp = that.data.smsOp
    console.log('isSmsSend', that.isSmsSend())
    if (!that.isSmsSend()) {
      store.Tools().Toast('请填写正确的手机号')
      return
    }
    if (that.isSmsSend() && smsOp.timer == -1) {
      smsOp.curNum = smsOp.maxNum
      smsOp.text = `${smsOp.curNum}S`
      smsOp.timer = setInterval(() => {
        smsOp.curNum--
        if (smsOp.curNum > 0) {
          smsOp.text = `${smsOp.curNum}S`
        } else {
          clearInterval(smsOp.timer)
          smsOp.timer = -1
          smsOp.text = '重新发送'
        }
        that.setData({smsOp:smsOp})
      }, 1000)
      that.setData({smsOp:smsOp})
      // 请求接口 不管是否正确都按倒计时来
      store.ApiServe().meituan.sms(forms.mobile).then((res) => {
      },(err)=>{
          console.log(err)
      })
      store.Tools().Toast('发送成功')
    }
  },
  isSubmit() {
    const that = this
    let forms = that.data.forms
    let gpsOp = that.data.gpsOp
    if (that.isSmsSend() && forms.code.length === 6 && gpsOp.isPosition) {
      forms.btnClass = ''
      that.setData({
        forms:forms
      })
      return true
    } else {
      forms.btnClass = 'disabled'
      that.setData({
        forms:forms
      })
      return false
    }
  },
  onSubmit() {
    const that = this
    let forms = that.data.forms
    let gpsOp = that.data.gpsOp
    if (!that.isSubmit()) {
      store.Tools().Toast('请输入验证码')
      return
    }
    //登录并领取红包券
    store.ApiServe().meituan.login({
      latitude:gpsOp.latitude,
      longitude:gpsOp.longitude,
      mobile:forms.mobile,
      smsCode:forms.code
    }).then((res) => {
      if(res.code==0){
        store.Tools().Toast('登录成功')
        that.setData({
          isLogin: true
        })
        that.goToMini()
      } else {
        store.Tools().Toast(res.msg)
      }
    },(err)=>{
    })
  },
  goToMini(){
    const that = this
    const item = that.data.item
    wx.navigateToMiniProgram({
      appId: item.navigator.appid,
      path: item.navigator.path,
      envVersion: "release"
    })
    
    wx.reportAnalytics('location_statue', {
      statue: 'meituan_ok'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    const itemStr = decodeURIComponent(options.item)
    that.data.item = JSON.parse(itemStr);
    that.setData({
      item: that.data.item
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
    if(that.data.isLogin){
      that.BackPage()
    }
    that.locationInit()
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
  // onShareAppMessage: function () {

  // }
})