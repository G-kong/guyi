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
    filmType: {
      type: String,
      default: "hot"
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

    triggered: false,
    films: [],
    total: 0,
    pageOp: {
      loading: false,
      lowering: false,
      page: 1,
      size: 10,
      sort: true,
      showStatus: 1,
      isFinish: false
    }
  },
  created() {

  },
  methods: {
    getShowStatus() {
      const that = this
      let showStatus = 1
      console.log('getShowStatus', that.data.filmType)
      switch (that.data.filmType) {
        case 'soon':
          showStatus = 2;
          break;
        case 'hot':
        default:
          showStatus = 1;
          break;
      }
      return showStatus
    },
    getFilmList() {
      const that = this;

      that.data.pageOp.showStatus = that.getShowStatus()
      store.ApiServe().film.getPageFilm(that.data.pageOp).then((res) => {
        console.info("film", res)
        if (that.data.pageOp.page == 0) {
          that.data.films = []
        }
        that.data.total = res.data.total
        let films = res.data.records;
        for (var i in films) {
          let film = films[i]
          film.publishDate = store.Tools().dateFtt('yyyy-MM-dd', film.publishDate)
          // console.log(encodeURIComponent(JSON.stringify(item)))
          that.data.films.push(film)
        }
        that.data.pageOp.loading = false
        that.data.pageOp.lowering = false

        if (that.data.pageOp.page * that.data.pageOp.size >= that.data.total) {
          that.data.pageOp.isFinish = true
        }
        console.log("total", that.data.pageOp.page * that.data.pageOp.size, that.data.total, that.data.pageOp.isFinish)
        that.setData({
          films: that.data.films,
          total: that.data.total,
          pageOp: that.data.pageOp
        })
      }, (err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })

    },
    goToFilmInfo(event) {
      if (store.Tools().TapState()) {
        store.Tools().openConfirm().then((res) => {
          const that = this
          console.log('goToFilmInfo')
          const id = event.currentTarget.dataset.id
          const title = event.currentTarget.dataset.title
          wx.navigateTo({
            url: "/pages/film/details?id=" + id + "&title=" + title,
          })
        }, (err) => {});
      }
    },
    onRefresh() {
      const that = this
      if (that.data.pageOp.loading) return

      that.data.pageOp.page = 1
      that.data.pageOp.loading = true
      that.data.pageOp.isFinish = false
      that.setData({
        triggered: false,
        pageOp: that.data.pageOp
      })
      that.getFilmList()

    },
    onPulling(e) {
      console.log('onPulling:', e)
    },



    onRestore(e) {
      console.log('onRestore:', e)
    },

    onAbort(e) {
      console.log('onAbort', e)
    },
    onLower(e) {
      console.log('onLower', e)
      const that = this
      if (that.data.pageOp.lowering || that.data.pageOp.isFinish) return
      that.data.pageOp.page = that.data.pageOp.page + 1
      that.data.pageOp.lowering = true
      that.setData({
        triggered: false,
        pageOp: that.data.pageOp
      })
      that.getFilmList()
    }
  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this
      that.onRefresh()
      // console.log("attached", this.data)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})