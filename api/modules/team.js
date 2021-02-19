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
    })
  }

  export default team;