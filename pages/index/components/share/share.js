// pages/index/components/share/share.js
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
    contact: store.Config().contact
  },
  created(){
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setShadeShow(){
      this.triggerEvent('setShadeShow', {isShow:true})
    }
    
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})
