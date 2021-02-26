// pages/film/lianxi/lianxi.js
// const api = require('./api.js')
const app = getApp();
let that;
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    height: "",
    seats: [],
    lineTop: 0,
    lineHeight: "",
    lineArray: [],
    reset: false,
    columnNumber: 0,
    selectX: 0,
    selectY: 0,
    selectedSeat: [],
    price:'',
    rowSize: '',
    seatTypeList: [],
    seatArea: '',
    timer: null,
    maxY:'',
    maxX:'',
    loadComplete:false,
    hidden:true
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    let movie = JSON.parse(options.paramsStr);
    let price = movie.sellPrice;
    this.setData({
      price: price,
      movie: movie,
      seatArea: app.globalData.screenHeight - app.globalData.statusBarHeight - (500 * app.globalData.screenWidth / 750),
      rpxToPx: app.globalData.screenWidth / 750
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let seats = [];
    api.post('/api/cinema/trade_seat', { showId: this.data.movie.showId }).then(function (res) {
      seats =that.prosessSeats(res.seatList.rows);
      that.setData({
        seatTypeList: res.seatTypeList,
        seats: seats,
        columnNumber: res.seatList.rowSize
      })
      that.prosessMaxSeat(res.seatList);
      const query = wx.createSelectorQuery()
      query.select('#seatView').boundingClientRect()
      query.exec((r) => {
        let height = r[0].heighrt;
        let newHeight =that.data.seatScaleHeight;
        let top = r[0].top;
        that.setData({
          lineHeight: newHeight,
          lineTop: top-80
        })
      })
    })
  },
  prosessSeats:function(data){
    let seatData=data;
    seatData.forEach(e => {
      e.columns.forEach(j=>{
        if(j.status=="CAN_SELL"){
          j.icon="/assets/icon/seatPre.png";
          j.flag=0;
        }else if(j.status=="EMPTY"){
          j.icon="";
        }else{
          j.flag=1;
          j.icon="/assets/icon/seatDone.png";
        }
      })
    });
    return seatData;
  },
    //计算最大座位数,生成影厅图大小
    prosessMaxSeat: function(value) {
      let seatList = value
      let maxY = seatList.rowSize;
      let maxX = seatList.rows[0]['columns'].length;
      let seatRealWidth = parseInt(maxX) * 70 * this.data.rpxToPx
      let seatRealheight = parseInt(maxY) * 70 * this.data.rpxToPx
      let seatScale = 1;
      let seatScaleX = 1;
      let seatScaleY = 1;
      let seatAreaWidth = 630 * this.data.rpxToPx
      let seatAreaHeight = this.data.seatArea - 200 * this.data.rpxToPx
      if (seatRealWidth > seatAreaWidth) {
        seatScaleX = seatAreaWidth / seatRealWidth
      }
      if (seatRealheight > seatAreaHeight) {
        seatScaleY = seatAreaHeight / seatRealheight
      }
      if (seatScaleX < 1 || seatScaleY < 1) {
        seatScale = seatScaleX < seatScaleY ? seatScaleX : seatScaleY
      }
      this.setData({
        maxY: parseInt(maxY),
        maxX: parseInt(maxX),
        seatScale: seatScale,
        seatScaleHeight: seatScale * 70 * this.data.rpxToPx,
        loadComplete:true
      });
    },
  //解决官方bug
  handleScale: function (e) {
    if (this.data.timer) {
      clearTimeout(this.data.timer)
    }
    let timer = setTimeout(() => {
      this.setData({
        seatArea: this.data.seatArea
      });
    }, 200)
  },
 
  onScale(e) {
    const query = wx.createSelectorQuery()
    query.select('#seatView').boundingClientRect()
    query.exec((res) => {
      let height = res[0].height;
      let top = res[0].top;
      let newHeight = that.data.seatScaleHeight;
      this.setData({
        lineHeight: newHeight,
        lineTop: top
      })
    })
  },
  selectSeat(e) {
    let rowid = e.currentTarget.dataset.rowid;
    let columnid = e.currentTarget.dataset.columnid;
    let flag = e.currentTarget.dataset.flag;
    let seats=that.data.seats
 
    if(flag==1){
      for (var a = 0; a < that.data.selectedSeat.length; a++) {
        if (that.data.selectedSeat[a].rowid == rowid&&that.data.selectedSeat[a].columnid==columnid) {
          that.data.selectedSeat.splice(a, 1);
          break;
        }
      }
    }else{
      if(that.data.selectedSeat.length==4){
        wx.showToast({
          title: '最多只能选4个座哦~~',
          icon:'none'
        })
        return;
      }
      let seat = {
        rowid:rowid,
        columnid:columnid
      };
      that.data.selectedSeat.push(seat);
    }
    seats.forEach(e=>{
      e.columns.forEach(c=>{
        if(rowid==e.rowId&&c.columnId==columnid){
          if(c.flag==1){
            c.flag=0;
            c.icon="/assets/icon/seatPre.png";
          }else if(c.flag==0){
            c.flag=1;
            c.icon="/assets/icon/selectIcon.png";
          }
        }
      })
    })
    let hidden=true;
    if(that.data.selectedSeat.length!=0){
       hidden=false;
    }
    that.setData({
      hidden:hidden,
      seats:seats,
      selectedSeat: that.data.selectedSeat,
      totalPrice: that.data.selectedSeat.length*that.data.price
    })
  },
  cancelSeat(e) {
    let rowid = e.currentTarget.dataset.rowid;
    let columnid = e.currentTarget.dataset.columnid;
    let seats=that.data.seats
    for (var a = 0; a < that.data.selectedSeat.length; a++) {
      if (that.data.selectedSeat[a].rowid == rowid&&that.data.selectedSeat[a].columnid==columnid) {
        that.data.selectedSeat.splice(a, 1);
        break;
      }
    }
    seats.forEach(e=>{
      e.columns.forEach(c=>{
        if(rowid==e.rowId&&c.columnId==columnid){
          c.flag=0;
          c.icon="/assets/icon/seatPre.png";
        }
      })
    })
    let hidden=false;
    if(that.data.selectedSeat.length==0){
       hidden=true;
    }
    that.setData({
      hidden:hidden,
      selectedSeat: that.data.selectedSeat,
      totalPrice: that.data.selectedSeat.length*that.data.price,
      seats:seats
    })
  },
  confirmHandle() {
    if(that.data.selectedSeat.length==0){
      wx.showToast({
        title: '至少得选1个座位哦~~',
        icon:'none'
      })
      return;
    }
  }
 
})