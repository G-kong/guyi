// const api = require('../../../utils/api.js')
const store = getApp().globalData;
const film = store.ApiServe().film;
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
    price: '',
    rowSize: '',
    seatTypeList: [],
    seatArea: '',
    timer: null,
    maxY: '',
    maxX: '',
    loadComplete: false,
    hidden: true,
    seatData: {},
    cinemaName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    console.log("options：" + options);
    const cinemaName = options.cinemaName;
    const film = JSON.parse(decodeURIComponent(options.film));
    const schedule = JSON.parse(decodeURIComponent(options.schedule));
    const date = options.date;
    // console.log("=============" + cinemaName + "===" + film + "===" + schedule + "===" + date);
    const movie = {
      filmName: film.filmName,
      date: date,
      showTime: schedule.showTime,
      showEndTime: schedule.showEndTime,
      showVersionType: schedule.showVersionType,
      hallName: schedule.hallName.split("（")[0],
      discountPrice: schedule.discountPrice,
      showId: schedule.showId
    };
    // console.log("movie：" + movie.filmName + "==" + movie.date + "==" + movie.showTime + "==" + movie.showEndTime + "==" + movie.showVersionType + "==" + movie.hallName + "==" + movie.discountPrice + "==" + movie.showId);

    let price = movie.discountPrice;
    const sysInfo = wx.getSystemInfoSync()

    this.setData({
      price: price,
      movie: movie,
      cinemaName: cinemaName,
      seatArea: sysInfo.screenHeight - sysInfo.statusBarHeight - (500 * sysInfo.screenWidth / 750),
      rpxToPx: sysInfo.screenWidth / 750
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let seats = [];
    let that = this;
    // let res = that.data.seatData
    film.getSeatList({ 
      // showId: "NDI2I0BpbWFubUAjMTIzMDMxI0BpbWFubUAjMTYxNDkyNzMwMCNAaW1hbm1AIzE0I0BpbWFubUAjNQ=="
      // showId: "NDI2I0BpbWFubUAjMjg5NiNAaW1hbm1AIzE2MTQ5MzA2MDAjQGltYW5tQCMxNCNAaW1hbm1AIzU="
      showId: that.data.movie.showId
    }).then((res) => {
    // let data = that.toNewData(res.data.seatList)
    console.log(res);
    seats = that.prosessSeats(res.data.seatList);
    that.setData({
      seatTypeList: that.getSeatTypeList(),
      seats: seats,
      columnNumber: res.data.maxCol,
      seatData: res
    })
    that.prosessMaxSeat(res.data);
    const query = wx.createSelectorQuery()
    query.select('#seatView').boundingClientRect()
    query.exec((r) => {
      let height = r[0].heighrt;
      let newHeight = that.data.seatScaleHeight;
      let top = r[0].top;
      that.setData({
        lineHeight: newHeight,
        lineTop: top - 80
      })
    })
     })
  },

  getSeatTypeList(){
    let seatTypeList = [
      { name: '可选', icon: '../../../assets/icon/seatPre.png' },
      { name: '已选', icon: '../../../assets/icon/seatSel.png' },
      { name: '已售', icon: '../../../assets/icon/seatDone.png' },
      { name: '不可售', icon: '../../../assets/icon/seatPre1.png' },
      { name: '情侣座', icon: '../../../assets/icon/selectIcon.png' }
    ]
    return seatTypeList
  },
  prosessSeats: function (data) {
    let seatData = data;
    seatData.forEach(e => {
      e.forEach(j => {
        if (j.status == "LK") {
          j.icon = "../../../assets/icon/seatDone.png";
          j.flag = 1;
        } else if (j.status == "N") {
          j.flag = 0;
          j.icon = "../../../assets/icon/seatPre.png";
        } else if (j.status == "N" && (j.lovestatus == "1" || j.lovestatus == "2")) {
          j.flag = 0;
          j.icon = "../../../assets/icon/selectIcon.png";
        } else {
          j.icon = "";
        }
      })
    });
    return seatData;
  },
  //计算最大座位数,生成影厅图大小
  prosessMaxSeat: function (value) {
    let seatList = value
    let maxY = seatList.maxRow;
    let maxX = seatList.maxCol;
    let seatRealWidth = parseInt(maxX) * 100 * this.data.rpxToPx
    let seatRealheight = parseInt(maxY) * 100 * this.data.rpxToPx
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
      seatScaleHeight: seatScale * 100 * this.data.rpxToPx,
      loadComplete: true
    });
  },
  //解决官方bug
  handleScale: function (e) {
    // if (this.data.timer) {
    //   clearTimeout(this.data.timer)
    // }
    // let timer = setTimeout(() => {
    //   this.setData({
    //     seatArea: this.data.seatArea
    //   });
    // }, 200)
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
    let seatId = e.currentTarget.dataset.seatid;
    let rowNo = e.currentTarget.dataset.rowno;
    let columnNo = e.currentTarget.dataset.columnno;
    let flag = e.currentTarget.dataset.flag;
    let seats = that.data.seats
    let seatNo = e.currentTarget.dataset.seatno;
    console.log('selectSeat =>', e.currentTarget.dataset)
    if (flag == 1) {
      for (var a = 0; a < that.data.selectedSeat.length; a++) {
        // if (that.data.selectedSeat[a].seatId == seatId) {
        if (that.data.selectedSeat[a].rowNo == rowNo && that.data.selectedSeat[a].columnNo == columnNo) {
          that.data.selectedSeat.splice(a, 1);
          break;
        }
      }
    } else {
      if (that.data.selectedSeat.length == 4) {
        wx.showToast({
          title: '最多只能选4个座哦~~',
          icon: 'none'
        })
        return;
      }
      let seat = {
        seatId: seatId,
        rowNo: rowNo,
        columnNo: columnNo,
        seatNo:seatNo
      };
      that.data.selectedSeat.push(seat);
    }
    seats.forEach(e => {
      e.forEach(c => {
        if (rowNo == c.rowNo && c.columnNo == columnNo) {
          if (c.flag == 1) {
            c.flag = 0;
            c.icon = "../../../assets/icon/seatPre.png";
          } else if (c.flag == 0) {
            c.flag = 1;
            c.icon = "../../../assets/icon/seatSel.png";
          }
        }
      })
    })
    let hidden = true;
    if (that.data.selectedSeat.length != 0) {
      hidden = false;
    }
    that.setData({
      hidden: hidden,
      seats: seats,
      selectedSeat: that.data.selectedSeat,
      totalPrice: (that.data.selectedSeat.length * 10 * that.data.price) / 10
    })
  },
  cancelSeat(e) {
    let rowNo = e.currentTarget.dataset.rowno;
    let columnNo = e.currentTarget.dataset.columnno;
    let seats = that.data.seats
    for (var a = 0; a < that.data.selectedSeat.length; a++) {
      if (that.data.selectedSeat[a].rowNo == rowNo && that.data.selectedSeat[a].columnNo == columnNo) {
        that.data.selectedSeat.splice(a, 1);
        break;
      }
    }
    seats.forEach(e => {
      e.forEach(c => {
        if (rowNo == c.rowNo && c.columnNo == columnNo) {
          c.flag = 0;
          c.icon = "../../../assets/icon/seatPre.png";
        }
      })
    })
    let hidden = false;
    if (that.data.selectedSeat.length == 0) {
      hidden = true;
    }
    that.setData({
      hidden: hidden,
      selectedSeat: that.data.selectedSeat,
      totalPrice: (that.data.selectedSeat.length * 10 * that.data.price) / 10,
      seats: seats
    })
  },
  confirmHandle() {
    if (that.data.selectedSeat.length == 0) {
      wx.showToast({
        title: '至少得选1个座位哦~~',
        icon: 'none'
      })
      return;
    }
  }

})