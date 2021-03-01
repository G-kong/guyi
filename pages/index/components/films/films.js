// pages/index/components/filmhots/filmhots.js
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
    films: [],
    total: 0,
    pageOp: {
      page: 1,
      size: 6,
      sort: true,
      showStatus: 1
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getShowStatus() {
      const that = this
      let showStatus = 1
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
      const that = this
      that.data.pageOp.showStatus = that.getShowStatus()
      store.ApiServe().film.getPageFilm(that.data.pageOp).then((res) => {
        // store.ApiServe().film.getHotList(that.data.pageOp).then((res) => {
        console.info("film", res)
        that.data.films = []
        that.data.total = res.data.total
        let films = res.data.records;
        for (var i in films) {
          let film = films[i]
          film.publishDate = store.Tools().dateFtt('yyyy-MM-dd', film.publishDate)
          // console.log(encodeURIComponent(JSON.stringify(item)))
          that.data.films.push(film)
        }
        that.setData(that.data)
      }, (err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },
    goToFilm() {
      if (store.Tools().TapState()) {
        store.Tools().openConfirm().then((res) => {
          const that = this
          wx.redirectTo({
            url: "/pages/film/index?type=" + that.data.filmType,
            success(res) {
              // let page = getCurrentPages().pop();
              // if (page == undefined || page == null) {
              //   return
              // }
              // page.onLoad();
            }
          })
        }, (err) => {});
      }
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
        }, (err) => {})

      }

    }

  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this
      that.getFilmList()
      // console.log("attached", this.data)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})