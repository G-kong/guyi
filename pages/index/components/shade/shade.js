// pages/index/components/shade/shade.js
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
    shadeTop: "top: calc(6px + " + store.CustomBar + "px)",
  },
  created(){
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    setShadeShow(){
      this.triggerEvent('setShadeShow', {isShow:false})
    }
  }
})
