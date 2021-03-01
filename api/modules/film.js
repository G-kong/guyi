import request from '../../utils/request'

const film = {
    //小程序首页热门电影列表
    getHotList: (params) => request({
      url: '/applet/getHotList',
      method: 'get',
      params
    }),
    //小程序首页即将上映电影列表
    getSoonList: (params) => request({
      url: '/applet/getSoonList',
      method: 'get',
      params
    }),
    //小程序首页即将上映电影列表
    getPageFilm : (params) => request({
      url: '/applet/getPageFilm',
      method: 'get',
      params
    }),
    //小程序首页即将上映电影列表
    getFilmById : (params) => request({
      url: '/applet/getFilmById',
      method: 'get',
      params
    }),
    //获取某电影的电影院
    getFilmShowList: (data) => request({
      url: '/applet/getFilmShowList',
      method: 'post',
      data,header: {
        'content-type': 'application/json'
      }
    }),
    //具体影院的场次排期
    getScheduleList: (params) => request({
      url: '/applet/getScheduleList',
      method: 'get',
      params
    })
  }

  export default film;