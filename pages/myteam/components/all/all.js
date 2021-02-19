// pages/myteam/components/all/all.js
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
   * 页面的初始数据
   */
  data: {
    subNum: 0,
    ssubNum: 0,
  },

   /**
   * 组件的方法列表
   */
  methods: {
    
  },

  lifetimes: {
    attached() {
      //请求数据(业务逻辑)
      team.getUserInvite({
        beginDate: "",
        endDate: ""
      }).then((resp) => {
        // console.log(resp.data);
        this.setData({
          subNum: resp.data.inviteCount,
          ssubNum: resp.data.sinviteCount
        })
      })
    }
  }
})
