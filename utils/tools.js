const tools = {
  store: null,
  getTicket() {
    return new Promise((resolve, reject) => {
      const store = tools.store
      let ticket = store.Storage().getSync('ticket')
      if (ticket) {
        console.log('缓存获取到ticket')
        resolve(ticket)
      } else {
        wx.login({
          success(res) {
            if (res.code) {
              //发起网络请求
              store.ApiServe().open.getCode2Session(store.appid, {
                code: res.code
              }).then((res) => {
                console.log("res", res)
                if (res.code == 0) {
                  store.Storage().setSync('ticket', res.data, 47 * 60 * 60) //服务器有效期 48小时
                  resolve(res)
                } else {
                  console.log('获取ticket失败')
                  reject(res.msg)
                }
              }, (err) => {
                console.log('code转ticket失败！' + err.msg)
                reject(err.msg)
              })
            } else {
              console.log('wx.login失败！' + res.errMsg)
              reject(res.errMsg)
            }
          }
        })
      }
    })
  },
  Toast: (options) => {
    return new Promise((resolve, reject) => {
      if (typeof (options == "string")) {
        options = {
          title: options
        }
      }
      wx.showToast({
        title: options.title || "",
        icon: options.icon || "none",
        showCancel: options.showCancel || false,
        duration: options.duration || 2000,
        success: function () {
          resolve()
        },
        fail: function () {
          reject()
        }
      })
    })
  },
  Dialog: (options) => {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: options.title || "",
        content: options.content || "",
        showCancel: options.showCancel || false,
        success: function (res) {
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            reject()
          }
        }
      })
    })
  },
  taping: false,
  TapState() {
    if (!tools.taping) {
      tools.taping = true
      setTimeout(() => {
        tools.taping = false
      }, 500)
      return true
    }
    tools.Toast("您点太快了")
    return false
  },
  checkStr(str, type) {
    switch (type) {
      case 'phone': //手机号码
        return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
      case 'tel': //座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case 'card': //身份证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
      case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(str)
      case 'postal': //邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str);
      case 'QQ': //QQ号
        return /^[1-9][0-9]{4,9}$/.test(str);
      case 'email': //邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'money': //金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(str);
      case 'URL': //网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
      case 'IP': //IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
      case 'date': //日期时间
        return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      case 'number': //数字
        return /^[0-9]$/.test(str);
      case 'english': //英文
        return /^[a-zA-Z]+$/.test(str);
      case 'chinese': //中文
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower': //小写
        return /^[a-z]+$/.test(str);
      case 'upper': //大写
        return /^[A-Z]+$/.test(str);
      case 'HTML': //HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
      default:
        return true;
    }
  },
  isCardID(sId) {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      alert('你输入的身份证长度或格式错误')
      return false
    }
    //身份证城市
    var aCity = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外"
    };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
      alert('你的身份证地区非法')
      return false
    }

    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
      d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
      alert('身份证上的出生日期非法')
      return false
    }

    // 身份证号码校验
    var sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432"
    for (var i = 0; i < sId.length - 1; i++) {
      sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
      alert('你输入的身份证号非法')
      return false
    }

    return true
  },
  getLocation() {
    var wxLocation = function () {
      return new Promise((resolve, reject) => {
        tools.getLocation_baidu().then((position) => {
          resolve(position)
        }, (err) => {
          wx.getLocation({
            type: 'wgs84', // 默认wgs84
            success: function (res) {
              // console.log('地理位置获取成功!')
              let position = {
                "type": 'wx',
                "lat": res.latitude,
                "lon": res.longitude
              }
              tools.store.Storage().setSync("position", position, 24 * 60 * 60);
              resolve(position)
            },
            fail: function (res) {
              // console.log('地理位置获取失败!')
              reject()
            },
            complete: function () {
              // console.log('地理位置获取结束!')
            }
          })
        })
      })
    }
    return wxLocation()

  },
  getLocation_baidu() {
    var baiduLocation = function () {
      return new Promise((resolve, reject) => {
        let position = tools.store.Storage().getSync("position")
        if (position) {
          resolve(position)
          return
        }
        tools.store.ApiServe().ip.baidu_mapkey({}).then((res) => {

          const params = res.data[tools.getRand(0, res.data.length - 1)]
          tools.store.ApiServe().ip.baidu_location(params).then((res) => {
            wx.reportAnalytics('location_baidu', {
              status: res.status,
              ak: params.ak,
              desc: '接口正常'
            });
            if (res.status == 0) {
              let position = {
                "type": 'baidu',
                "lat": parseFloat(res.content.point.y),
                "lon": parseFloat(res.content.point.x)
              }
              tools.store.Storage().setSync("position", position, 24 * 60 * 60);
              resolve(position)
            } else {
              reject(err)
            }
          }, (err) => {
            reject(err)
            wx.reportAnalytics('location_baidu', {
              status: -100,
              ak: params.ak,
              desc: '接口失败'
            });
          })
        }, (err) => {
          reject(err)
          wx.reportAnalytics('location_baidu', {
            status: -101,
            ak: params.ak,
            desc: '获取mapkey失败'
          });
        })
      })
    }
    return baiduLocation()
  },
  getRand(min, max) {
    // 包含 min 和 max
    var rand = Math.random();
    return Math.round(min + rand * (max - min));
  },
  rmoney(money){
    // 金额格式化
    money = parseFloat(money).toFixed(2).toString().split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('')
    return money
  },
  formatDate: (formatStr, fdate) => {
    // 日期格式化
    if (fdate) {
      if (~fdate.indexOf('.')) {
        fdate = fdate.substring(0, fdate.indexOf('.'))
      }
      fdate = fdate.toString().replace('T', ' ').replace(/\-/g, '/')
      var fTime = null
      var fStr = 'ymdhis'
      if (!formatStr) {
        formatStr = 'y-m-d h:i:s'
      }
      if (fdate) {
        fTime = new Date(fdate)
      } else {
        fTime = new Date()
      }
      var month = fTime.getMonth() + 1
      var day = fTime.getDate()
      var hours = fTime.getHours()
      var minu = fTime.getMinutes()
      var second = fTime.getSeconds()
      month = month < 10 ? '0' + month : month
      day = day < 10 ? '0' + day : day
      hours = hours < 10 ? ('0' + hours) : hours
      minu = minu < 10 ? '0' + minu : minu
      second = second < 10 ? '0' + second : second
      var formatArr = [
        fTime.getFullYear().toString(),
        month.toString(),
        day.toString(),
        hours.toString(),
        minu.toString(),
        second.toString()
      ]
      for (var i = 0; i < formatArr.length; i++) {
        formatStr = formatStr.replace(fStr.charAt(i), formatArr[i])
      }
      return formatStr
    } else {
      return ''
    }
  },
  formatDateTime: (inputTime, defaultVal) => {
    /**
     * 时间戳 转 日期格式
     * @param {*} inputTime  //时间戳
     */
    if (inputTime == null || inputTime === 0) {
      return defaultVal
    }
    if (inputTime < 9999999999) {
      inputTime = inputTime * 1000
    }
    const date = new Date(inputTime)
    const y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let minute = date.getMinutes()
    let second = date.getSeconds()
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  },
  formatTimestamp: (inputTime, defaultVal) => {
    /**
     * 时间格式 转时间戳
     * @param {*} inputTime yyyy
     * @param {*} defaultVal
     */
    // console.log('时间戳', inputTime)
    if (inputTime == null || inputTime === '') {
      return defaultVal
    }
    // const reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/
    // const regExp = new RegExp(reg)
    // if (!regExp.test(inputTime)) {
    //   return defaultVal
    // }
    const date = new Date(inputTime)
    return date.getTime()
  },
  strToDate: (date) => {
    if (typeof date === 'string') {
      var dateArr = date.split(' ')
      var dayArr = dateArr[0].split('-')
      var year = parseInt(dayArr[0], 0)
      var month
      // 处理月份为04这样的情况
      if (dayArr[1].indexOf('0') === 0) {
        month = parseInt(dayArr[1].substring(1), 0)
      } else {
        month = parseInt(dayArr[1], 0)
      }
      var day = parseInt(dayArr[2], 0)
      if (!dateArr[1]) {
        date = new Date(year, month - 1, day)
      } else {
        var timeArr = dateArr[1].split(':')
        var hours = timeArr[0] ? parseInt(timeArr[0], 0) : 0
        var minutes = timeArr[1] ? parseInt(timeArr[1], 0) : 0
        var seconds = timeArr[2] ? parseInt(timeArr[2], 0) : 0

        date = new Date(year, month - 1, day, hours, minutes, seconds)
      }
    }
    return date
  },
  dateFtt: (fmt, date) => { // author: meizz
    date = tools.strToDate(date)
    var o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  },

  dateAdd: (fmt, date, type, num) => { // author: meizz
    date = tools.strToDate(date)
    switch (type) {
      case 'y':
        date.setFullYear(date.getFullYear() + num)
        break
      case 'M':
        date.setMonth(date.getMonth() + num)
        break
      case 'd':
        date.setDate(date.getDate() + num)
        break
      case 'h':
        date.setHours(date.getHours() + num)
        break
      case 'm':
        date.setMinutes(date.getMinutes() + num)
        break
      case 's':
        date.setSeconds(date.getSeconds() + num)
        break
      default:
        break
    }
    return tools.dateFtt(fmt, date)
  },
  dateDiffer: (date1, date2, type) => { // author: meizz
    date1 = tools.strToDate(date1)
    date2 = tools.strToDate(date2)
    var time1 = date1.getTime()
    var time2 = date2.getTime()
    var timeDiffer = (time2 - time1)

    var num = 0
    switch (type) {
      case 'y':
        num = parseInt(timeDiffer / 1000 / 3600 / 24 / 365, 0)
        break
      case 'M':
        num = parseInt(timeDiffer / 1000 / 3600 / 24 / 30, 0)
        break
      case 'd':
        num = parseInt(timeDiffer / 1000 / 3600 / 24, 0)
        break
      case 'h':
        num = parseInt(timeDiffer / 1000 / 3600, 0)
        break
      case 'm':
        num = parseInt(timeDiffer / 1000 / 60, 0)
        break
      case 's':
        num = parseInt(timeDiffer / 1000, 0)
        break
      default:
        break
    }
    return num
  }
}
export default tools;