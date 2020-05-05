<template>
  <div class="zz-page">
    <iframe frameborder="no" marginwidth="0" marginheight="0"
            width="100%" height="100%"
            src="http://127.0.0.1:60183/#/index"></iframe>
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
 * --- http://localhost:8800/#/html/label/iframe
 */

export default {
  name: 'IframeTest',
  /**
   * iframe feature
   */
  mounted () {
    window.onChildMsg = function (msg) {
      console.log('From child: ', msg)
    }
  }
}
</script>

<style scoped>
</style>
