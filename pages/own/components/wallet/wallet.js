// pages/own/components/wallet/wallet.js
const store = getApp().globalData
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    pmcWallet:{
      pointUncredited: "0",
      pointCredited: "0",
      pointOut: "0",
      point: "0"
    }
  },

  created(){
    const that = this;
    store.User().addWatch((data) => {
      console.log("Wallet addWatch", data)
      //注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
      that.setData({
        pmcUser: {
          pointUncredited: data.pointUncredited,
          pointCredited: data.pointCredited,
          pointOut: data.pointOut,
          point: data.point
        }
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: { 
    goToBill(){
      if(store.Tools().TapState() && store.User().check()){
        // 进入明细页面
        wx.navigateTo({
          url: '/pages/friends/friends',
        })
      }
    },
    goToWithdraw(){
      if(store.Tools().TapState() && store.User().check()){
        // 进入提现页面
        wx.navigateTo({
          url: '/pages/friends/friends',
        })
      }
    }
  }
})
