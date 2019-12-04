<template>
  <div class="zz-page">
    <div>dev template demo</div>
  </div>
</template>

<script>
/**
 * H5工程@js/window/open
 * ---
 *
 * ref
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * 场景归类
 * s01.测试场景01
 * u01.使用场景01
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
  name: 'WindwoOpen',
  components: {},
  created () {
  },
  mounted () {
    this.tsScene01()
  },
  methods: {
    /**
     * 测试场景01
     */
    tsScene01 () {
      console.warn('tsScene01')
      window.open('https://www.bing.com/')
    },
    /**
     * 使用场景01
     */
    useScene01 () {
      console.warn('useScene01')
    }
  }
}
</script>

<style scoped>

</style>
