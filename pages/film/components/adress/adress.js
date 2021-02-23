// pages/film/components/adress/adress.js
const store = getApp().globalData;
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    tapCut: 0,
    fiveDays: [],
    address: [
      {
        placeName: '福州仓山万达广场店',
        fullAddress: '福州市仓山区浦上大道万达广场2号门四层',
        distance: '1.31km'
      },
      {
        placeName: '福州仓山万达广场店',
        fullAddress: '福州市仓山区浦上大道万达广场2号门四层诶哦去他家诶感觉舒服滴工具柜给冻豆腐国家搜地方',
        distance: '1.31km'
      },
      {
        placeName: '福州仓山万达广场店',
        fullAddress: '福州市仓山区浦上大道万达广场2号门四层',
        distance: '1.31km'
      },
      {
        placeName: '福州仓山万达广场店',
        fullAddress: '福州市仓山区浦上大道万达广场2号门四层',
        distance: '1.31km'
      },
    ]
  },
  created() {
   
  },

  methods: {
    purchDate: function(e) {
      const that = this;
      let time = store.Time().getTodayDate();
      let date = store.Time().getDates(7, time);
      console.log(date);
  
      // var fiveDay = [{},{},{},{},{},{}];
      var fiveDay = [];
      for(let i in date) {
        let d = date[i].time.split('-');
        let r = d[1] + '月' + d[2] + '日';
        if (i < 6) {
          switch (i) {
            case '0':
              // fiveDay[i].id = i;
              fiveDay[i] = "今天" + r;
              break;
            case '1':
              // fiveDay[i].id = i;
              fiveDay[i] = "明天" + r;
              break;
            case '2':
              // fiveDay[i].id = i;
              fiveDay[i] = "后天" + r;
              break;
            case '3':
            case '4':
            case '5':
              // fiveDay[i].id = i;
              fiveDay[i] = date[i].week + r;
              break;
            default:
              break;
          }
        }
      }
      console.log(fiveDay);
      that.setData({
        fiveDays: fiveDay
      })
      console.log(that.data.fiveDays)
    },

    daySelect: function(e) {
      const that = this;
      that.setData({
        tapCut: e.currentTarget.dataset.id,
      })
      // console.log(that.data.tapCut);
    },

    goToSchedule: function(event) {
      const place = event.currentTarget.dataset.place;
      const full = event.currentTarget.dataset.full;
      console.log("place:" + place + " full:" + full);
      wx.navigateTo({
        url: './schedule/schedule?place='+place+'&full='+full,
      })
    },
  },
  
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const that = this;
      that.purchDate();
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})