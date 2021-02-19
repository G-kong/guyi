
const store = getApp().globalData;
// pages/index/components/swipe/swipe.js
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
    images:{
      list: [
        // 'https://mpstatic.qingting123.com/img/take-out/banner01.jpg',
        // 'https://mpstatic.qingting123.com/img/take-out/banner02.png',
        // 'https://mpstatic.qingting123.com/img/take-out/banner03.jpg'
      ]
    }
  },
  created(){
    const that = this;
    store.ApiServe().open.adplace({}).then((res) => {
      // console.info("res",res)
      that.data.images.list = res.data

      that.setData(that.data)
    }, (err) => {
      store.Tools().Toast(err.msg)
      // console.log('err', err)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
