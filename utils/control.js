const control = {
  watchFuns: [],
  data: {},
  init(data) {
    for (const key in data) {
      control.data[key] = data[key]
      // if(typeof(control.data[key]) != "undefined"){

      // }
    }
    // setTimeout(() => {
      // console.log("control.init", control.watchFuns.length, control.data)
      for (const i in control.watchFuns) {
        const watchFun = control.watchFuns[i]
        if (watchFun) {
          watchFun(control.data)
        }
      }
    // }, 500)
  },
  addWatch(watchFun) {
    // 注册监听全局开关,初始化可能受到wx:if影响,被后置,所以初始化的时候可以先赋值
    if (watchFun) {
      control.watchFuns.push(watchFun)
      setTimeout(()=>{
        watchFun(control.data)
      },500)
    }
  },
  show(key) {
    // console.log("control.show", key, control.data, control.data[key])
    if (!control.data[key]) {
      return false
    }
    return control.data[key].show
  },
  get(key) {
    // console.log("control.get", key, control.data, control.data[key])
    if (!control.data[key]) {
      return {}
    }
    return control.data[key].data
  }
}
export default control;