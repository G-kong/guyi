// pages/index/components/redbagShare/redbagshare.js
const store = getApp().globalData;
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
    title: "",
    item: {},
    itemList: [],
    isClick: false,
    isShow: true,
    accessible:false,
    coupon: {
      verifys: [],
      eleme: false,
      meituan: false
    }
  },

  /**
   * 组件的方法列表
   */
  methods: { 
    setItem(){
      const that = this
      const validItem = that.getValidItem()
      // console.log('validItem',validItem)
      if(validItem.length > 0 && that.data.accessible){
        that.setData({
          item: validItem[0]
        })
      }else{
        that.setData({
          item: that.data.itemList[0]
        })
      }
    },
    setItemList() {
      const that = this
      let itemList = that.data.itemList
      // that.data.title = store.Control().get("redbagshade").title
      store.ApiServe().open.linkConf({}).then((res) => {
        console.log("res",res)
        itemList = []
        const toItems = store.Control().get("redbagshade").toItems
        for(var i in toItems){
          const itemId = toItems[i]
          
          for (var j in res.data) {
            const item = res.data[j]
            if(itemId == item.id){
              if(item.type == 1){
                item.typeClass = 'eleme'
              }
              if(item.type == 2){
                item.typeClass = 'meituan'
              }
              item.navigator = {
                "appid": item.appId,
                "path": item.furi
              }
              itemList.push(item)
            }
          }
        }
        that.setData({
          itemList:itemList
        }) 
        that.setItem()
      }, (err) => {
        console.log('err', err)
      })
    },
    setShowState(){
      const that = this
      that.data.isShow = !store.Storage().getSync("isOpenRedBagShade")
      if(!that.data.isShow){
        const setDate = store.Storage().getSync("openRedBagShadeDate")
        const curDate = store.Tools().dateFtt("yyyy-MM-dd",new Date())
        if(setDate != curDate){
          that.data.isShow = true
        }
      }
      that.setData(that.data) 
    },
    closeShow(){
      const that = this
      const curDate = store.Tools().dateFtt("yyyy-MM-dd",new Date())
      store.Storage().setSync("isOpenRedBagShade",true);
      store.Storage().setSync("openRedBagShadeDate",curDate);
      that.setShowState();
    },
    setCouponVerify(type){
      const that = this
      let coupon = that.data.coupon
      if(!coupon.verifys.includes(type)){
        coupon.verifys.push(type)
      }
      that.setData({coupon:coupon})
      if(coupon.verifys.length == 2){
        if(!coupon.eleme || !coupon.meituan){
          store.ApiServe().ticket.accessible({}).then((res) => {
            console.log("res",res)
            that.setData({
              accessible: res.data
            })
            that.setItem()
          }, (err) => {
            console.log('err', err)
          })
        }
      }
    },
    setCouponState(){
      const that = this 
      let coupon = that.data.coupon
      store.ApiServe().eleme.isLogin({}).then((res) => {
        console.log("res",res) 
        coupon.eleme = res.data 
        that.setData({coupon:coupon})
        that.setCouponVerify('eleme')
      }, (err) => {
        console.log('err', err)
      })
      store.ApiServe().meituan.isLogin({}).then((res) => {
        console.log("res",res)
        coupon.meituan = res.data
        that.setData({coupon:coupon})
        that.setCouponVerify('meituan')
      }, (err) => {
        console.log('err', err)
      })
    },
    getValidItem(){
      const that = this
      const coupon = that.data.coupon
      let validItem = []
      for(const i in that.data.itemList){
        const item = that.data.itemList[i]  
        // 1:eleme 2:meituan
        if(item.type == 1 && !coupon.eleme){
          validItem.push(item)
        }
        if(item.type == 2 && !coupon.meituan){
          validItem.push(item)
        }
      }
      return validItem
    },
    tapMini(event) {
      // console.log("tapMini", event)
      if(store.Tools().TapState()){
        const that = this
        console.log('1',that.data.item)
        if(typeof(that.data.item.id) == 'undefined'){
          return
        }
        if(!that.data.isClick){
          this.setData({
            isClick:true
          })

          if(that.data.accessible){
            // 如果需要登录,就申请授权地址
            store.Tools().getLocation().then((position)=>{
              // 如果授权了,就进入特定页面
              // const item = validItem[
              //   store.Tools().getRand(0,validItem.length-1)
              // ]
              // 不做随机 按配置顺序 优先饿了么,让后美团
              
              that.goToLogin(that.data.item)
              wx.reportAnalytics('location_statue', {
                statue: '授权:' + position.type
              });
            },()=>{
              // 如果没授权,就直接去领红包,默认列表里面第一个
              that.goToMini(that.data.item)
              wx.reportAnalytics('location_statue', {
                statue: '不授权:' + position.type
              });
            })
          }else{
            // 如果不需要登录,就直接去领红包,默认列表里面第一个
            that.goToMini(that.data.item)
          }
        }
      }
    },
    goToMini(item){
      const that = this
      // 等待金币动画开启
      setTimeout(()=>{
        that.closeShow()
      },1500)
      wx.navigateToMiniProgram({
        appId: item.navigator.appid,
        path: item.navigator.path,
        envVersion: "release"
      })
      
      wx.reportAnalytics('click_redbag_shade', {
        item_id: item.id,
        item_title: item.title
      });
    },
    goToElemeLogin(item) {
      const itemStr = JSON.stringify(item)
      wx.navigateTo({
        url: '/pages/eleme/login?item=' + encodeURIComponent(itemStr)
      })
    },
    goToMeiTuanLogin(item) {
      const itemStr = JSON.stringify(item)
      wx.navigateTo({ 
        url: '/pages/meituan/login?item=' + encodeURIComponent(itemStr)
      })
    },
    goToLogin(item){
      const that = this
      // console.log('goToLogin',item)
      switch (item.type) {
        case 1:
          that.goToElemeLogin(item)
          break;
        case 2:
          that.goToMeiTuanLogin(item)
          break;
      
        default:
          break;
      }
      that.closeShow()
    }

  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this
      that.setItemList()
      that.setShowState()
      that.setCouponState()

      store.Control().addWatch((data) => {
        that.setItemList()
      })
     
      //  console.log("attached", that.data)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})
