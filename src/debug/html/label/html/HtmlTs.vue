<template>
  <div>
  </div>
</template>

<script>
/**
 * H5工程@HTML/html
 * ---
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see htmlTs.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see htmlTs.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see htmlTs.ivScene01
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
 * --- http://localhost:8800/#/ts/demo1
 */

const htmlTs = {
  /**
   * API场景01
   * ---设置页面黑白模式
   * --- http://www.divcss5.com/wenji/w484.shtml
   */
  tsScene01 () {
    console.warn('tsScene01')
  },
  /**
   * 使用场景01
   */
  useScene01 () {
    console.warn('useScene01')
  },
  /**
   * 问答场景01
   */
  ivScene01 () {
    console.warn('ivScene01')
  }
}

export default {
  name: 'HtmlTs',
  data () {
    return {
      data1: 10
    }
  },
  methods: htmlTs
}
</script>

<style scoped lang="scss">

</style>
