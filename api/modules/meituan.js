import request from '../../utils/request'

const meituan = {
  // 发送短信
  sms: (mobile) => request({
    url: '/wmxghb/meituan/sms/'+mobile,
    method: 'get',
    ticket: true
  }),
  login:(data) => request({
    url: '/wmxghb/meituan/login',
    method: 'post',
    data,
    header: {
      'content-type': 'application/json'
    },
    ticket: true
  }),
  isLogin:(params) => request({
    url: '/wmxghb/meituan/isLogin',
    method: 'get',
    params,
    header: {
      'content-type': 'application/json'
    },
    ticket: true
  }),
  coupon:(params) => request({
    url: '/wmxghb/meituan/coupon',
    method: 'get',
    params,
    ticket: true
  }),
}

export default meituan;