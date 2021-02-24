import request from '../../utils/request'

const auth = {
    //ticket获取用户信息
    getMiniUser: (params) => request({
      url: '/applet/getMiniUser',
      method: 'get',
      params,
      ticket: true
    }),

    //guserId获取PMC用户信息
    getPmcUser: (params) => request({
      url: '/applet/getPmcUser',
      method: 'get',
      params,
      ticket: true
    }),
    //绑定主副小程序ticket
    bindTicket: (params) => request({
      url: '/applet/bindTicket',
      method: 'get',
      params,
      ticket: true
    }),
    //绑定副小程序guserId
    bindGuserId: (params) => request({
        url: '/applet/bindGuserId',
        method: 'get',
        params,
        ticket: true
    }),
    //给用户添加标签
    addUserTag: (params) => request({
        url: '/applet/addUserTag',
        method: 'get',
        params,
        ticket: true
    }),
    //获取用户标签
    getUserTag: (params) => request({
        url: '/applet/getUserTag',
        method: 'get',
        params,
        ticket: true
    }),
  decodeMiniUserInfo: (data) => request({
    url: '/applet/decodeMiniUserInfo',
    method: 'post',
    data,header: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }),
  bindUnionid: (params) => request({
    url: '/applet/bindUnionid',
    method: 'get',
    params,
    ticket: true
  })
  }

  export default auth;