<template>
  <div class="zz-page">
    <iframe id="mIfm"
            frameborder="no" marginwidth="0" marginheight="0" class="it-iframe-sty"
            src="http://localhost:8800/#/html/label/iframe/transfer/child"></iframe>
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
 * --- http://localhost:8800/#/html/label/iframe/transfer/parent
 */

export default {
  name: 'IframeParent',
  /**
   * iframe feature
   */
  mounted () {
    window.onChildMsg = function (msg) {
      console.log('From child: ', msg)
      return {
        p1: '01',
        p2: '02',
        p3: '03'
      }
    }
    // 1.点击iframe里面元素(！！！不可跨域，！！！localhost && 127.0.0.1跨域)
    // ！！！ iframe父子页面端口与与域名必须一致才能取到document，否则为null
    // window.mIfm.contentDocument.getElementById('goHomeElm').click()
    // window.mIfm.contentWindow.document.getElementById('goHomeElm').click()
  }
}
</script>

<style scoped>
  .it-iframe-sty {
    width: 100%;
    height: 100%;
  }
</style>
