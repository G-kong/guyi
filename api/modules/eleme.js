import request from '../../utils/request'

const eleme = {
  // 发送短信
  sms: (mobile) => request({
    url: '/wmxghb/ele/sms/'+mobile,
    method: 'get',
    ticket: true
  }),
  login:(data) => request({
    url: '/wmxghb/ele/login',
    method: 'post',
    data,
    header: {
      'content-type': 'application/json'
    },
    ticket: true
  }),
  isLogin:(params) => request({
    url: '/wmxghb/ele/isLogin',
    method: 'get',
    params,
    header: {
      'content-type': 'application/json'
    },
    ticket: true
  }),
  coupon:(params) => request({
    url: '/wmxghb/ele/coupon',
    method: 'get',
    params,
    ticket: true
  }),
}

export default eleme;