// pages/index/components/item/item.js
const store = getApp().globalData;
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {},
  /**
   * 组件的初始数据
   */
  data: {
    items: []
  },
  created(){
    const that = this;
    store.ApiServe().recipe.list({}).then((res) => {
      // console.info("res",res)
      that.data.items = []
      for (var i in res.data) {
        const item = res.data[i]
        that.data.items.push(item)
      }
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
    goToDetails(event) {
      // console.log("tapMini", event)
      if(store.Tools().TapState()){
        const id = event.currentTarget.dataset.id
        const title = event.currentTarget.dataset.title
        wx.navigateTo({
          url: "/pages/recipe/details?id="+id+"&title="+title ,
        })
      }
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