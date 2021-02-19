// pages/recipe/details.js
import WxParse from "./../components/wxParse/wxParse.js"

const store = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    title:'美食'
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
    
    store.ApiServe().recipe.details(that.data.id,{}).then((res) => {
      // console.info("res",res)
      let html = decodeURIComponent(res.data)
      html = html.replace(/{domain}/g, "https://sswmapi.gykj007.com/wmxgimg/recipe/"+that.data.id)
      console.log("html",html)
      WxParse.wxParse('article', 'html',  html, that, 5);
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
  }
})