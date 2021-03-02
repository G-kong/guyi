// pages/film/components/adress/adress.js
const store = getApp().globalData;
const film = store.ApiServe().film;
const ip = store.ApiServe().ip;
Component({
  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {
    filmId: {
      type: String,
      default: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tapCut: 0,
    date: [],
    showList: [],
    address: [],
    latitude: 0,
    longitude: 0,
    ip: "",
    mapAk: "",
    cityName: "",
    cityId: ""
  },
  created() {
    
  },

  methods: {
    daySelect: function (e) {
      const that = this;
      that.setData({
        tapCut: e.currentTarget.dataset.id,
        address: that.data.showList[e.currentTarget.dataset.id]
      })
      // console.log(that.data.tapCut);
    },

    goToSchedule: function (event) {
      const that = this;
      console.log(event.currentTarget.dataset + "==============================");
      const cinemaName = event.currentTarget.dataset.cinemaname;
      const address = event.currentTarget.dataset.address;
      const cinemaId = event.currentTarget.dataset.cinemaid;
      const filmId = that.data.filmId;
      console.log("cinemaName:" + cinemaName + " address:" + address + "cinemaId:" + cinemaId + "filmId:" + filmId);
      wx.navigateTo({
        url: './schedule/schedule?cinemaName=' + cinemaName + '&address=' + address + '&cinemaId=' + cinemaId + "&filmId=" + filmId,
      })
    },

    /**
     * 获取用户ip
     * @param {*} body 
     */
    getIp: function(params) {
      const that = this;
      ip.getIp({

      }).then((resp) => {
        // console.log("用户IP：" + resp.data);
        that.setData({
          ip: resp.data
        })
        that.mapViewTap();
        that.getMapAk();
      },(err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },

    /**
     * 获取访问地图的ak
     * @param {*} body 
     */
    getMapAk: function() {
      const that = this;
      ip.getMapAk({

      }).then((resp) => {
        // console.log("地图的AK：" + resp.data);
        that.setData({
          mapAk: resp.data
        })
        that.baidu_location();
      },(err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },

    /**
     * 获取城市名
     * @param {*} body 
     */
    baidu_location: function() {
      const that = this;
      ip.baidu_location({
        ip: that.data.ip,
        ak: that.data.mapAk,
      }).then((resp) => {
        // console.log("城市：" + resp.content.address_detail.city);
        that.setData({
          cityName: resp.content.address_detail.city
        })
        that.getCityIdByName();
      },(err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },

    /**
     * 通过名称获取城市id
     */
    getCityIdByName: function() {
      const that = this;
      ip.getCityIdByName({
        cityName: that.data.cityName,
      }).then((resp) => {
        // console.log("城市ID：" + resp.data);
        that.setData({
          cityId: resp.data
        })
        that.getFilmShowList();
      },(err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },

    /**
     * 获取某电影的电影院
     * @param {*} body
     */
    getFilmShowList: function(body) {
      const that = this;
      film.getFilmShowList({
        filmId: that.data.filmId,
        cityId: that.data.cityId,
        latitude: that.data.latitude,
        longitude: that.data.longitude
      }).then((resp) => {
        // console.log("获取某电影的电影院" + resp.data);
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
        // console.log("date:" + that.data.date);
        // console.log("showList:" + that.data.showList);
      },(err) => {
        store.Tools().Toast(err.msg)
        // console.log('err', err)
      })
    },

    mapViewTap: function() {
      const that = this;
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          var latitude = res.latitude;
          var longitude = res.longitude;
          // console.log("经度：" + latitude);
          // console.log("纬度：" + longitude);
          that.setData({
            latitude: latitude,
            longitude: longitude
          })
        }
      })
    },

  },
    
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this;
      that.getIp();
      // console.log("获取某电影的电影院");
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})