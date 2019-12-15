<template>
  <div class="zz-page">
    <div>dev template demo</div>
  </div>
</template>

<script>
/**
 * H5工程@HTML/label
 * ---
 *
 * ref
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * 场景归类
 * API
 * s01.API场景01
 * USE
 * u01.使用场景01
 * Issue
 * i01.问答场景01
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/index/demo
 *
 * Ref:
 * ---
 */
export default {
  name: 'ZDemo',
  components: {},
  created () {
  },
  mounted () {
    this.tsScene01()
    // this.useScene01()
    // this.ivScene01()
  },
  methods: {
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
    },
    /**
     * 问答场景01
     */
    ivScene01 () {
      console.warn('ivScene01')
    }
  }
}
</script>

<style scoped>

</style>
