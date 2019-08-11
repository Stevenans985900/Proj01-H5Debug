// VLog.js
import ZLog from '../../common/js/utils/ZLog'
let VLog = {
  version: 'v1.0.0'
}
/**
 * 插件项目公共log安装
 * @param Vue
 * @param options
 */
VLog.install = function (Vue, options) {
  Vue.prototype._zlog = ZLog
  ZLog.w('ZLog install finish')
}
export default VLog
