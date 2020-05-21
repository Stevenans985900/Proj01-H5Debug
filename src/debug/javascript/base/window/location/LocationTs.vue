<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.window.location信息'">
      <div class="lts-ts1">
        <div>
          {{getWindowLocation()}}
        </div>
      </div>
    </zz-border-box>
  </div>
</template>

<script>
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
 * @see bDemo.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see bDemo.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see bDemo.ivScene01
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
 * --- http://localhost:8800/#/js/window/location
 */

export default {
  name: 'LocationTs',
  data () {
    return {
      data1: 10
    }
  },
  methods: {
    // location参数
    getWindowLocation () {
      const params = {
        hash: window.location.hash,
        host: window.location.host,
        hostname: window.location.hostname,
        href: window.location.href,
        origin: window.location.origin,
        pathname: window.location.pathname,
        port: window.location.port,
        protocol: window.location.protocol,
        search: window.location.search
      }
      console.log(params)
      return JSON.stringify(params)
    },
    // 获取查询参数
    // 取window.search，非hash
    // https://www.jb51.cc/js/70827.html
    // https://blog.csdn.net/zhang__ao/article/details/78614291
    getQueryString (name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      const r = decodeURI(window.location.search.substr(1)).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    // 支持location.search && location.hash
    // https://www.cnblogs.com/webSong/p/9233374.html
    getQueryStringHash (param) {
      const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)')
      const r = window.location.search.substr(1).match(reg) || window.location.hash.substring((window.location.hash.search(/\?/)) + 1).match(reg)
      if (r != null) {
        return decodeURIComponent(r[2])
      }
    }
  },
  created () {
    console.log(this.getQueryString('t'))
  },
  mounted () {
    console.log(this.getQueryString('t'))
    console.log(this.getQueryStringHash('t'))
  }
}
</script>

<style scoped lang="scss">

</style>
