// pages/myteam/components/portion/portion.js
const store = getApp().globalData;
const team = store.ApiServe().team;
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

    tabCur: 0,
    subNewly: 0,
    ssubNewly: 0,

    list:[
      {
        id: 0,
        newly: "今日新增"
      },
      {
        id: 1,
        newly: "昨日新增"
      },
      {
        id: 2,
        newly: "本月新增"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    myteam(e) {
      const that = this;
      // console.log(e);
      if (e != 0) {
        that.setData({
          tabCur: e.currentTarget.dataset.id
        });
      }
  
      //今日新增数量
      if (that.data.tabCur == 0) {
        // console.log(store.Time().getTodayDate());
        var today = store.Time().getTodayDate();
  
        that.getNewTeam(today, today);
      };
  
      //昨日新增数量
      if (that.data.tabCur == 1) {
        // console.log(store.Time().getYesterdayDate());
        var yesterday = store.Time().getYesterdayDate();
        // getNewTeam(yesterday, yesterday);
        that.getNewTeam(yesterday, yesterday);
      };
  
      //本月新增
      if (that.data.tabCur == 2) {
        // console.log(store.Time().getMonDate());
        var monDate = store.Time().getMonDate();
        var startDay = monDate.split('~')[0];
        var endDay = monDate.split('~')[1];
        that.getNewTeam(startDay, endDay);
      }
    },

    getNewTeam: function(beginDate, endDate) {
      team.getUserInvite({
        beginDate: beginDate,
        endDate: endDate
      }).then((resp) => {
        // console.log(resp.data);
        this.setData({
          subNewly: resp.data.inviteCount,
          ssubNewly: resp.data.sinviteCount
        })
      })
    },
  },

  lifetimes: {
    attached() {
      const that = this;
      that.myteam(0);
    }
  }

})
