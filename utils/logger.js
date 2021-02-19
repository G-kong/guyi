const logger = {
  config: {
    islog: true,
    log: true,
    debug: true,
    info: true,
    warn: true,
    error: true,
  },
  init(config) {
    logger.config = Object.assign({}, logger.config, config)
    console.log('logger.config', logger.config)
    logger.funInit('log')
    logger.funInit('debug')
    logger.funInit('info')
    logger.funInit('warn')
    logger.funInit('error')
  },
  getStackTrace() {
    var obj = {};
    try {
      throw new Error();
    } catch (e) {
      obj = e
      // e.stack 中包含了堆栈数据，可以进行处理从而忽略不感兴趣的堆栈信息
    }
    return obj.stack;
  },
  funInit(type) {
    console["_"+type] = console[type]
    console[type] = function() {
      if (logger.config[type] && logger.config.islog){
        // const stack = logger.getStackTrace() || ""
        // const matchResult = stack.match(/\(.*?\)/g) || []
        // const line = matchResult[matchResult.length-1] || ""
        // const data = [...arguments,'----' + line.replace("(", "").replace(")", "")]
        const data = arguments
        console["_"+type].apply(console,data)
      }
    }
  },
}
export default logger;