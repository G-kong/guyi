
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
  }
}
export default time;