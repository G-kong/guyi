const demo = {
  // funName 暴露的方法名称
  funName: (appid,params) => request({
    url: '/applet/adplace/'+appid, // 必传 调用接口地址
    method: 'get', // 必传 请求方法 get 或者 post
    params, //非必传 传参 如果是 get 传 params key ;如果是post 传 data key;
    cache:10, //非必传 接口数据缓存时间,单位秒,默认值为 0 没有缓存
    t: true, //非必传 接口是否加时间戳,默认值为 false 不添加时间戳
    ticket: true //非必传 接口是否需要加ticket,默认值为 false 不添加ticket
  }),
}

