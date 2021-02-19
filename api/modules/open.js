import request from '../../utils/request'

const open = {
  // 广告位 轮播图
  adplace: (params) => request({
    url: '/applet/adplace',
    method: 'get',
    params,
    cache: 10
  }),
  // 链接配置
  linkConf: (params) => request({
    url: '/applet/linkConfApp',
    method: 'get',
    params,
    cache: 60
  }),
  // 全局配置
  getMiniAppConfig: (params) => request({
    url: '/applet/getMiniAppConfig',
    method: 'get',
    params,
    cache: 10
  }),
  // 全局配置
  getIsShowShade: (appid,params) => request({
    url: '/applet/isShowShade/'+appid,
    method: 'get',
    params,
    cache: 10
  })
}

export default open;