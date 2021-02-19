import request from '../../utils/request'

const ticket = {
  // 校验ticket
  verify: (store) => request({
    url: '/applet/authTicket',
    method: 'get',
    store,
    header: {
      'content-type': 'application/json'
    },
    ticket: true
  }),
  accessible: (params) => request({
    url: '/applet/accessible',
    method: 'get',
    params,
    header: {
      'content-type': 'application/json'
    },
    ticket: true
  }),
}

export default ticket;