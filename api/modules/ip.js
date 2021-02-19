import request from '../../utils/request'

const ip = {
  // ip-api 获取坐标 但是https有问题 还有网络延迟比较严重
  ip_location: (params) => request({
    url: 'http://ip-api.com/json',
    method: 'get',
    params,
    cache: 60
  }),
   // 百度坐标 但是有日次数限制
   baidu_mapkey: (params) => request({
    url: 'data/mapkey.json',
    method: 'get',
    params,
    cache: 60
  }),
  // 百度坐标 但是有日次数限制
  baidu_location: (params) => request({
    url: 'https://api.map.baidu.com/location/ip',
    method: 'get',
    params,
    cache: 60
  }),
}
export default ip;