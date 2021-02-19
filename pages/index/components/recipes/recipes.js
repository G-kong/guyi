// pages/index/components/recipes/recipes.js
const store = getApp().globalData;
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    filmType: {
      type: String,
      default: "hot"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    items: [],
    total: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getRecipeList() {
      const that = this
      store.ApiServe().recipe.list({}).then((res) => {
        // console.info("res",res)
        that.data.items = []
        for (var i in res.data) {
          const item = res.data[i]
          that.data.items.push(item)
        }
        that.data.total = that.data.items.length
        that.setData(that.data)
      }, (err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },
    goToRecipe() {
      if (store.Tools().TapState()) {
        const that = this
        wx.redirectTo({
          url: "/pages/recipe/index",
          success(res) {
            // let page = getCurrentPages().pop();
            // if (page == undefined || page == null) {
            //   return
            // }
            // page.onLoad();
          }
        })
      }
    },
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
      that.getRecipeList()
      // console.log("attached", this.data)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})