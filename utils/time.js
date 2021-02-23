
const time = {
  store: null,
  getTodayDate: () => {
    /**
     * 获取今天日期
     * 格式:yyyy-MM-dd
     */
    var timestamp  = Date.parse(new Date()) / 1000;
    var dateTime = time.store.Tools().formatDateTime(timestamp, "");
    return dateTime.split(" ")[0];
  },
  getYesterdayDate: () => {
    /**
     * 获取昨天日期
     * 格式:yyyy-MM-dd
     */
    var timestamp  = (Date.parse(new Date()) / 1000) - (24 * 60 * 60);
    var dataTime = time.store.Tools().formatDateTime(timestamp, "");
    return dataTime.split(" ")[0];
  },
  getMonDate: () => {
    /**
     * 获取一个月日期范围
     */
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var one = "01";
    var dayOne = y + '-' + m + '-' + one;

    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var today = y + '-' + m + '-' + d;

    return dayOne + '~' + today;
  },

  //todate默认参数是当前日期，可以传入对应时间 todate格式为2018-10-05
  getDates: (days, todate) => {
    var dateArry = [];
    for (var i = 0; i < days; i++) {
      var dateObj = time.dateLater(todate, i);
      dateArry.push(dateObj)
    }
    return dateArry;
  },

  dateLater: (dates, later) => {
    let dateObj = {};
    let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
    let date = new Date(dates);
    date.setDate(date.getDate() + later);
    let day = date.getDay();
    let yearDate = date.getFullYear();
    let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
    let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
    dateObj.time =  yearDate+'-'+ month + '-' + dayFormate;
    dateObj.week = show_day[day];
    return dateObj;
  }

}
export default time;