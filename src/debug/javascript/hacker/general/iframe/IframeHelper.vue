<template>
  <div class="zz-page">
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" allowtransparency="yes"
            width="100%" height="100%;"
            style="position: relative;"
            id="mIfm"
            src="http://127.0.0.1:11085/newmobilesite/popular/"></iframe>
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
 * --- http://localhost:8800/#/js/hacker/iframe
 */
import iframeLoop from './js/iframe-loop'

export default {
  name: 'IframeHelper',
  data () {
    return {
      data1: 10
    }
  },
  mounted () {
    iframeLoop.runTask()
  }
}
</script>

<style scoped lang="scss">

</style>
