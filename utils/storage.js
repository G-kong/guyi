const storage = {
  key: 'wm_',
  tkey: 'tt_',
  clearSync(key) {
    if(key){
      wx.removeStorageSync(storage.key + key)
      wx.removeStorageSync(storage.key + storage.tkey + key)
    }else{
      wx.clearStorageSync()
    }
  },
  setSync(key, value, second) {
    wx.setStorageSync(storage.key + key, JSON.stringify(value))
    if(second){
      wx.setStorageSync(storage.key + storage.tkey + key, (new Date()).getTime() + (second * 1000) )
    }
  },
  getSync(key) {
    var value = wx.getStorageSync(storage.key + key)
    value =  (value == null || value === '' || value === 'undefined') ? null : JSON.parse(value)
    if(value != null && wx.getStorageSync(storage.key + storage.tkey + key)){
      // 如果有设定时间
      if(parseInt(wx.getStorageSync(storage.key + storage.tkey + key)) < (new Date()).getTime()){
        storage.clearSync(key)
        value = null
      }
    }
    return value
  },
  // clear(key,fun) {
  //   if(typeof(key) == "string"){
  //     wx.removeStorage({
  //       key: storage.key + key,
  //       success: function(res){
  //         if(fun){
  //           fun()
  //         }
  //       }
  //     })
  //   }else{
  //     wx.clearStorageSync({
  //       success: function(res){
  //         if(fun){
  //           fun()
  //         }
  //       }
  //     })
  //   }
  // },
  // set(key, value, fun) {
  //   wx.setStorage({
  //     key: storage.key + key,
  //     data: JSON.stringify(value),
  //     success: function(res){
  //       if(fun){
  //         fun(res)
  //       }
  //     }
  //   })
  // },
  // get(key,fun) {
  //   wx.getStorage({
  //     key: storage.key + key,
  //     data: JSON.stringify(value),
  //     success: function(res){
  //       if(fun){
  //         fun(res.data)
  //       }
  //     }
  //   })
  // }
}
export default storage;