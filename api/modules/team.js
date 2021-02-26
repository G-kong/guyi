import request from '../../utils/request'

const team = {
    //获取邀请好友海报
    getFriends: (params) => request({
      url: '/qrCode/getQrCodeMini',
      method: 'get',
      params,
      ticket: true
    }),
    //获取我的团队数量
    getUserInvite: (params) => request({
      url: '/applet/getUserInvite',
      method: 'get',
      params,
      ticket: true
    }),
    //获取用户新增数据
    getUserInviteList: (params) => request({
      url: '/applet/getUserInviteList',
      method: 'get',
      params,
      ticket: true
    }),
    //获取团队数据明细
    getUserInviteDetailList: (params) => request({
      url: '/applet/getUserInviteDetailList',
      method: 'get',
      params,
      ticket: true
    }),
}

  export default team;