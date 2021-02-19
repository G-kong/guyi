// colorui/components/cu-body.js
const app = getApp();
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isHead: {
      type: [String,Boolean],
      default: false
    }, 
  },

  /**
   * 组件的初始数据
   */
  data: {
    containerHeight: "height: calc(100vh - " + app.globalData.CustomBar + "px)",
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
