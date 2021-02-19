// pages/index/components/item/item.js
const store = getApp().globalData;
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // userTag: {
    //   type: String,
    //   default: ""
    // }
  },
  /**
   * 组件的初始数据
   */
  data: {
    items: [],
    showIndex: 1,
    userTag:''
  },
  created(){
    const that = this;
    that.addWatch()
    that.getUserTag()
    that.getLinkConf()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addWatch(){
      const that = this;
      store.Control().addWatch((data) => {
        console.log("showIndex_addWatch")
        //注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
        that.chageShowIndex()
      })
    },
    chageShowIndex(){
      const that = this;
      let showIndex = store.Control().get("redbagshade")["showIndex"]
      let isCheck = store.Control().get("redbagshade")["isCheck"]
      if(showIndex > 1){
        if(isCheck && that.data.userTag != "commission"){
          showIndex = 1
        }
      }
      console.log("chageShowIndex",showIndex,isCheck,that.data.userTag)
      that.setData({
        showIndex: showIndex
      })
    },
    getUserTag(){
      const that = this
      store.ApiServe().auth.getUserTag({}).then((res) => {
        console.log('getUserTag',res)
        if(res.data.length>0){
          that.setData({
            userTag: res.data[0].tag
          })
          that.chageShowIndex()
        }
      })
    },
    getLinkConf(){
      const that = this;
      store.ApiServe().open.linkConf({}).then((res) => {
        // console.info("res",res)
        that.data.items = []
        for (var i in res.data) {
          const item = res.data[i]
          item.class = that.getItemClass(item)
          item.switchs = item.switchs.split('')
          item.navigator = {
            "appid": item.appId,
            "path": item.furi
          }

          // console.log(encodeURIComponent(JSON.stringify(item)))
          that.data.items.push(item)
        }
        that.setData(that.data)
      }, (err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },
    getItemClass(item) {
      // console.log(item.type,typeof(item.type))
      let className = ""
      switch (item.type) {
        case 1:
          className = "eleme";
          break;
        case 2:
          className = "meituan";
          break;
        default:
          className = "";
          break;
      }
      return className
    },
    goToGuides(event){
      if(store.Tools().TapState()){
        const that = this
        const id = event.currentTarget.dataset.id
        const item = that.data.items.find(curitem => curitem.id == id)
        if(item.isOpenSub == 0){
          that.goToMini(item)
          return
        }
        console.log("item",item)
        let page = ""
        switch(item.type){
          case 1:
            page = "elemewm";
            break;
          case 2:
            page = "meituanwm";
            break;
          default:
            page = "";
            break;
        }
        const itemStr = JSON.stringify(item)
        wx.navigateTo({ 
          url: '/pages/guides/'+page+'/index?item=' + encodeURIComponent(itemStr)
        })
      }
    },
    goToMini(item) {
      console.log("goToMini", item)
      // if(store.Tools().TapState()){
        wx.navigateToMiniProgram({
          "appId": item.navigator.appid,
          "path": item.navigator.path,
          "envVersion": "release"
        })
        wx.reportAnalytics('click_item_redbag', {
          item_id: item.id,
          item_title: item.title
        });
      // }
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this
      
      // console.log("attached", this.data)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})