// pages/film/components/adress/adress.js
const store = getApp().globalData;
const film = store.ApiServe().film;
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    tapCut: 0,
    date: [],
    showList: [],
    address: []
  },
  created() {
    this.mapViewTap();
  },

  methods: {
    daySelect: function (e) {
      const that = this;
      that.setData({
        tapCut: e.currentTarget.dataset.id,
      })
      // console.log(that.data.tapCut);
      for (let i in that.data.showList) {
        if (i == that.data.tapCut) {
          that.setData({
            address: that.data.showList[i],
          })
        }
      }
    },

    goToSchedule: function (event) {
      const place = event.currentTarget.dataset.place;
      const full = event.currentTarget.dataset.full;
      console.log("place:" + place + " full:" + full);
      wx.navigateTo({
        url: './schedule/schedule?place=' + place + '&full=' + full,
      })
    },

    /**
     * 获取某电影的电影院
     * @param {*} body
     */
    getFilmShowList: function(body) {
      const that = this;
      film.getFilmShowList({
        filmId: 123031,
        cityId: 14
      }).then((resp) => {
        console.log("获取某电影的电影院" + resp.data);
        var days = [];
        var show = [];
        for (let i in resp.data) {
          days[i] = resp.data[i].date;
          show[i] = resp.data[i].shouList;
        }
        that.setData({
          date: days,
          showList: show,
          address: show[0],
        })
        console.log("date:" + that.data.date);
        console.log("showList:" + that.data.showList);
      },(err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },

    mapViewTap: function() {
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function(res) {
          console.log(res)
          wx.openLocation({
            latitude: res.latitude,
            longitude: res.longitude,
            scale: 28
          })
          console.log("latitude:" + latitude);
          console.log("longitude:" + longitude);
        }
      })
    }

  },
    
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this;
      console.log("获取某电影的电影院");
      that.getFilmShowList();
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})