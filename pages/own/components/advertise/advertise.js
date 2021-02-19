// pages/own/components/advertising/advertising.js
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
    isAdShow:false
  },

  created(){
    const that = this;
    store.Control().addWatch((data) => {
      // console.log("addWatch", store.Control().show("redbaglead"))
      //注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
      that.setData({
        isAdShow: store.Control().show("ad")
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
