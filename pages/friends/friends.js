// pages/friends/friends.js
const store = getApp().globalData;
const team = store.ApiServe().team;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qrMini: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    team.getFriends().then((resp)=>{
      console.log(resp.data);
      this.setData({
        qrMini:resp.data
      })
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

  },

  /**
   * 用户点击右上角转发到朋友圈
   */
  onShareTimeline: function () {

  },

  SaveCard: function(e) {
    let that = this;
    console.log('保存');
    var imgSrc = e.currentTarget.dataset.img;
    //获取相册授权
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('授权成功');
              that.img(imgSrc)
            }
          })
        }else{
          that.img(imgSrc)
        }
      }
    })
  },
  img: function (imgSrc){
    var imgSrc = imgSrc;
    wx.downloadFile({
      url: imgSrc,
      success: function (res) {
        console.log(res); //图片保存到本地
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (data) {
            console.log(data);
            wx.showToast({
              title: '保存成功',
              duration: 2000
            })
          },
          fail: function (err) {
            console.log(err);
            if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
              wx.openSetting({
                success(settingdata) {
                  console.log(settingdata)
                  if (settingdata.authSetting['scope.writePhotosAlbum']) {
                    wx.showToast({
                      title: '图片已保存',
                      icon:'none',
                      duration:2000
                    })
                    console.log('获取权限成功')
                  } else {
                    console.log('获取权限失败')
                  }
                }
              })
            }
          }
        })
      }
    })
  },
})