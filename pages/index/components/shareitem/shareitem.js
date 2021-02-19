// pages/index/components/shareitem/shareitem.js
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
    contact: store.Config().contact,
    icon: "",
    titles: [
    ]
  },
  created(){
    const that = this
    
  },
  /**
   * 组件的方法列表 
   */
  methods: {

  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this
      that.data.icon = store.Control().get("redbaglead").icon
      that.data.titles = store.Control().get("redbaglead").titles
      that.setData(that.data)
      store.Config().addWatch("contact",(key, data) => {
        that.setData({
          contact: data
        })
      })
      
      //  console.log("attached", that.data)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})
