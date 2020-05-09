<template>
  <div class="zz-page">
    <div>this</div>
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
 * @see tsThis.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see tsThis.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see tsThis.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * ---优质博客
 * --- https://www.runoob.com/w3cnote/js-call-apply-bind.html
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/js/proto/this
 */

const tsThis = {
  /**
   * API场景01
   */
  tsScene01 () {
    console.warn('tsScene01')
  },
  /**
   * 使用场景01
   */
  useScene01 () {
    console.warn('useScene01')
    console.log(this)
  },
  /**
   * 问答场景01
   */
  ivScene01 () {
    console.warn('ivScene01')
  }
}

export default {
  name: 'ThisTs',
  data () {
    return {
      data1: 10
    }
  },
  // 修改this指向
  // https://blog.csdn.net/qq_41945935/article/details/90443765
  methods: Object.assign(tsThis, {
    // 页面重载
    onReloadPage () {
      tsThis.useScene01.call(this)
      // tsThis.useScene01.bind(this)
      // tsThis.useScene01.apply(this)
    }
  }),
  mounted () {
    this.onReloadPage()
  }
}
</script>

<style scoped lang="scss">

</style>
