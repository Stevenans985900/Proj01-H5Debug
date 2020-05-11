<template>
  <div class="zz-page">
    <iframe id="mIfm"
            frameborder="no" marginwidth="0" marginheight="0" class="it-iframe-sty"
            src="http://127.0.0.1:11083/newmobilesite/popular/"></iframe>
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
 * --- http://localhost:8800/#/html/label/iframe/transfer
 */

export default {
  name: 'IframeParent',
  /**
   * iframe feature
   */
  mounted () {
    window.onChildMsg = function (msg) {
      console.log('From child: ', msg)
    }
    // 1.点击iframe里面元素(！！！不可跨域)
    // window.mIfm.contentDocument.getElementById('goHomeElm').click()
  }
}
</script>

<style scoped>
  .it-iframe-sty {
    width: 100%;
    height: 100%;
  }
</style>
