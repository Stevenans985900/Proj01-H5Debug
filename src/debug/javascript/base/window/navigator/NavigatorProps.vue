<template>
  <div class="zz-page">
    NavigatorProps
  </div>
</template>

<script>
/* eslint-disable eqeqeq */

/**
 * H5工程@HTML/label
 * ---
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see tsNav.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see tsNav.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see tsNav.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/js/window/navigator
 */
import Browser from './browser'

const tsNav = {
  /**
   * API场景01
   */
  tsScene01 () {
    console.warn('tsScene01')
  },
  /**
   * 使用场景02
   * --- 浏览器UA标识，判断浏览器类型
   */
  useScene02 () {
    console.warn('useScene02')
    console.log(window.navigator.userAgent)

    // 1.判断微信浏览器类型
    // https://www.cnblogs.com/shaozhu520/p/10844001.html
    const isWeiXin = () => {
      const ua = window.navigator.userAgent.toLowerCase()
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true
      } else {
        return false
      }
    }

    // https://www.jianshu.com/p/90d90d32e69d
    // 2.判断IOS
    const isIOS = () => {
      const u = navigator.userAgent
      if (u.indexOf('iPhone') > -1 || u.indexOf('iOS') > -1) {
        return true
      }
      return false
    }

    // 3.判断Android
    const isAndroid = () => {
      const u = navigator.userAgent
      if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        return true
      }
      return false
    }

    // 4.判断PC
    const isPC = () => {
      var userAgentInfo = navigator.userAgent
      var Agents = ['Android', 'iPhone',
        'SymbianOS', 'Windows Phone',
        'iPad', 'iPod']
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }

    // 5.获取浏览器类型
    // https://www.jianshu.com/p/f897aab7ce95
    const getBrowserType = () => {
      var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
      var isOpera = userAgent.indexOf('Opera') > -1 // 判断是否Opera浏览器
      var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera // 判断是否IE浏览器
      var isEdge = userAgent.indexOf('Edge') > -1 // 判断是否IE的Edge浏览器
      var isFF = userAgent.indexOf('Firefox') > -1 // 判断是否Firefox浏览器
      var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1 // 判断是否Safari浏览器
      var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 // 判断Chrome浏览器
      if (isIE) {
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
        reIE.test(userAgent)
        var fIEVersion = parseFloat(RegExp['$1'])
        if (fIEVersion == 7) {
          return 'IE7'
        } else if (fIEVersion == 8) {
          return 'IE8'
        } else if (fIEVersion == 9) {
          return 'IE9'
        } else if (fIEVersion == 10) {
          return 'IE10'
        } else if (fIEVersion == 11) {
          return 'IE11'
        } else {
          return 'IE'
        } // IE版本过低
      }
      if (isOpera) {
        return 'Opera'
      }
      if (isEdge) {
        return 'Edge'
      }
      if (isFF) {
        return 'FF'
      }
      if (isSafari) {
        return 'Safari'
      }
      if (isChrome) {
        return 'Chrome'
      }
    }

    console.log('Wechat browser:', isWeiXin())
    console.log('IOS browser:', isIOS())
    console.log('Android browser:', isAndroid())
    console.log('PC browser:', isPC())
    console.log('Browser type:', getBrowserType())
    console.log('Browser type:', Browser.client.name + ' ' + Browser.client.version)
  },
  /**
   * 使用场景01
   * --- 浏览器UA标识
   */
  useScene01 () {
    console.warn('useScene01')

    // Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
    console.warn(window.navigator)
    console.log(window.navigator.userAgent)
  },
  /**
   * 问答场景01
   */
  ivScene01 () {
    console.warn('ivScene01')
  }
}

export default {
  name: 'NavigatorProps',
  methods: tsNav,
  /**
   * window.navigator
   * ref:
   * ---https://www.cnblogs.com/muscleape/p/6897356.html
   * ---https://www.cnblogs.com/xdp-gacl/p/3926848.html
   * ---https://blog.csdn.net/u012762221/article/details/80419331
   * ---http://blog.sina.com.cn/s/blog_6911cf140102wol1.html
   */
  mounted () {
    this.useScene02()
  }
}
</script>

<style scoped>

</style>
