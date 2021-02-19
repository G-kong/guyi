// colorui/components/cu-bar.js
const store = getApp().globalData;
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    curIndex: {
      type: Number,
      default: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarList: [{
        index: 0,
        title: '首页',
        icon: 'welfare',
        path: '/pages/index/index'
      },
      // {
      //   index: 1,
      //   title: '订单',
      //   icon: 'order',
      //   path: '/pages/order/index'
      // },
      {
        index: 3,
        title: '电影资讯',
        icon: 'film',
        path: '/pages/film/index'
      },
      {
        index: 1,
        title: '美食食谱',
        icon: 'recipe',
        path: '/pages/recipe/index'
      },
      {
        index: 2,
        title: '会员中心',
        icon: 'own',
        path: '/pages/own/index'
      }
    ],
    isShowOwn: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addWatch(){
      const that = this
      store.Control().addWatch((data) => {
        that.setData({
          isShowOwn: store.Control().show("own")
        })
        // if(store.isDebug){
        //   that.setData({
        //     isShowOwn: true
        //   })
        // }
      })
    },
    goToPage(event) {
      console.log("进入", event.currentTarget.dataset.path)
        const that = this
      if(that.data.curIndex !=event.currentTarget.dataset.index ){
          wx.redirectTo({
              url: event.currentTarget.dataset.path,
              success(res) {
                  // let page = getCurrentPages().pop();
                  // if (page == undefined || page == null) {
                  //   return
                  // }
                  // page.onLoad();
              }
          })
      }
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this
      that.addWatch()
      // console.log("attached", this.data)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

})
