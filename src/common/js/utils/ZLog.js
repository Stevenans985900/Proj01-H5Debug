/**
 * log工具类
 *  封装日期
 */
let logIndex = 0
const ZLog = {
  gVar: {
    isDebug: true, // 调试才打印
    hasTime: true, // 打印时间
    hasLine: true, // 打印函数
    hasTrace: false, // 打印追踪
    isLogObj: true, // 打印对象/字符串
    logLevel: 0 // log级别：0-v/1-d/2-w/3-e/
  },
  /**
   * 输出LOG
   * @param {Object} TAG 标志
   * @param {Object} msg log信息
   */
  out: function (TAG, msg, level) {
    if (ZLog.gVar.isDebug) {
      var tag = ''
      var traceLine
      if (ZLog.gVar.hasLine) {
        try {
          throw new Error('error')
        } catch (err) {
          var resObj = ZLog.getCodePos(err.stack)
          tag = resObj.codePos
          traceLine = resObj.line
        }
      }
      if (ZLog.gVar.hasTime) {
        tag = ZLog.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss.S') + tag
      }

      if (ZLog.gVar.hasTrace) {
        console.log('==> zlog-' + (logIndex++) + traceLine)
      }
      if (ZLog.gVar.isLogObj) {
        console.log(tag + ' ' + TAG)
        if (level === 0 || level === 1) {
          console.log(msg)
        } else if (level === 2) {
          console.warn(msg)
        } else if (level === 3) {
          console.error(msg)
        }
      } else {
        console.log(tag + ' ' + TAG + ' ' + JSON.stringify(msg))
      }
    }
  },
  /**
   * 获取LOG打印位置
   */
  getCodePos: function (errMsg) {
    var resOjb = {}
    var eArr = errMsg.split('\n')
    var rArr = eArr[3].split(':')
    var linePos = '(Line:' + rArr[rArr.length - 2] + ': Cloum:' + rArr[rArr.length - 1]
    var midVar = eArr[3].split('?')
    midVar = midVar[0].split('/')
    resOjb.line = eArr[3]
    resOjb.codePos = midVar[midVar.length - 1] + linePos
    return resOjb
  },
  /**
   * 格式化当前时间
   * @param {Object} date
   * @param {Object} fmt
   */
  dateFormat: function (date, fmt) { // author: meizz
    var o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return '[' + fmt + ']'
  },
  e: function (tag, msg) {
    if (ZLog.gVar.logLevel <= 3) {
      if (!msg) {
        msg = tag
        tag = ''
      }
      tag = 'e ' + tag
      ZLog.out(tag, msg, 3)
    }
  },
  w: function (tag, msg) {
    if (ZLog.gVar.logLevel <= 2) {
      if (!msg) {
        msg = tag
        tag = ''
      }
      tag = 'w ' + tag
      ZLog.out(tag, msg, 2)
    }
  },
  d: function (tag, msg) {
    if (ZLog.gVar.logLevel <= 1) {
      if (!msg) {
        msg = tag
        tag = ''
      }
      tag = 'd ' + tag
      ZLog.out(tag, msg, 1)
    }
  },
  v: function (tag, msg) {
    if (ZLog.gVar.logLevel <= 0) {
      if (!msg) {
        msg = tag
        tag = ''
      }
      tag = 'v ' + tag
      ZLog.out(tag, msg, 0)
    }
  },
  log: function (tag, msg) {
    if (ZLog.gVar.logLevel <= 0) {
      if (!msg) {
        msg = tag
        tag = ''
      }
      tag = 'log ' + tag
      ZLog.out(tag, msg, 0)
    }
  }
}

export default {
  log: ZLog.log,
  v: ZLog.v,
  d: ZLog.d,
  w: ZLog.w,
  e: ZLog.e
}
