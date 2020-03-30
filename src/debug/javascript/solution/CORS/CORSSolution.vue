<template>
  <div class="zz-page">
    <SimpleTitle :title="'FrontEnd CORS Solution'"></SimpleTitle>
    <!-- 1.字符串模板 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.String</div>
      <div class="cs-str-sty1">
        String
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>import SimpleTitle from '../../../../components/zui/title/SimpleTitle'
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox/ZZBorderBox'

/**
 * H5工程@js/solution/cors
 * ---前端跨域解决方案
 * --- 跨域资源共享（ CORS ）机制允许 Web 应用服务器进行跨域访问控制，从而使跨域数据传输得以安全进行。
 * --- 现代浏览器支持在 API 容器中（例如 XMLHttpRequest 或 Fetch ）使用 CORS，以降低跨域 HTTP 请求所带来的风险。
 *
 * ref
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
 * ---优质博客
 * ---框架
 *
 * 场景归类
 * ----- API -----
 * s01.服务端设置响应头
 * @see tsCORS.tsScene01
 * s02.使用代理插件
 * @see tsCORS.tsScene02
 * s03.配置node，使用VUE提供方式
 * @see tsCORS.tsScene03
 * s04.配置浏览器支持跨域访问
 * @see tsCORS.tsScene04
 * s05.JSONP
 * @see tsCORS.tsScene05
 *
 * ----- USE -----
 * u01.使用场景01
 * @see tsCORS.useScene01
 *
 * ----- Issue -----
 * i01.问答场景01
 * @see tsCORS.ivScene01
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/js/solution/cors
 *
 * Ref:
 * ---
 */

// CORS
const corsAllowUrl = 'https://getman.cn/echo'
// No allow CORS
const corsNoAllowUrl = 'https://postman-echo.com/get?test=123'

const tsCORS = {
  /**
   * API场景05
   * 使用JSONP方式
   */
  tsScene05: () => {
    console.warn('tsScene05')
  },
  /**
   * API场景04
   * 配置浏览器支持跨域访问
   * ---Chrome
   * --- --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
   * ref:
   * --- https://alfilatov.com/posts/run-chrome-without-cors/
   */
  tsScene04: () => {
    console.warn('tsScene04')
    this.axios.get(corsNoAllowUrl)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .then(() => {
        // always executed
      })
  },
  /**
   * API场景03
   * 配置node
   * ---config/index.js --> proxyTable
   * ref:
   * --- https://segmentfault.com/a/1190000014396546
   * --- https://segmentfault.com/a/1190000014492336
   * --- https://segmentfault.com/a/1190000011007043
   * --- https://www.jianshu.com/p/5ef2b17f9b25
   */
  tsScene03: () => {
    console.warn('tsScene03')
    this.axios.get('api/get?test=123')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .then(() => {
        // always executed
      })
  },
  /**
   * API场景02
   * 使用代理插件
   * ---浏览器插件：Resource override(chrome)
   * --- https://chrome.google.com/webstore/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii
   * --- https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
   */
  tsScene02: () => {
    console.warn('tsScene02')
    this.axios.get(corsNoAllowUrl)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .then(() => {
        // always executed
      })
  },
  /**
   * API场景01
   * 服务端设置响应头：Access-Control-Allow-Origin: *
   */
  tsScene01: () => {
    console.warn('tsScene01')
    this.axios.get(corsAllowUrl)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .then(() => {
        // always executed
      })
  },
  /**
   * 使用场景01
   */
  useScene01: () => {
    console.warn('useScene01')
  },
  /**
   * 问答场景01
   */
  ivScene01: () => {
    console.warn('ivScene01')
  }
}

export default {
  name: 'CORSSolution',
  components: {ZZBorderBox, SimpleTitle},
  created () {
  },
  mounted () {
    this.tsScene01()
    // this.useScene01()
    // this.ivScene01()
  },
  methods: tsCORS
}
</script>

<style scoped>
  .cs-str-sty1 {
  }
</style>
