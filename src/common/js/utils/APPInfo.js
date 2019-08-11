// APPInfo.js
let APPInfo = {
  version: 'v1.0.0',
  /**
   * 浏览器信息
   * @param context
   */
  loggerBrowserInfo (context) {
    context._zlog.w('Current browser info')
    context._zlog.d(window.navigator.appVersion)
    context._zlog.d(window.navigator.userAgent)
    context._zlog.d(window.navigator.vendor)
  }
}

export default APPInfo
