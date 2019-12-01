<template>
  <div class="zz-page">
    <div>TypeArray demo</div>
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
  name: 'TypeArray',
  components: {},
  created () {
  },
  mounted () {
    this.tsScene01()
  },
  methods: {
    /**
     * 6.TypedArray 类型
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
     Int8Array();
     Uint8Array();
     Uint8ClampedArray();
     Int16Array();
     Uint16Array();
     Int32Array();
     Uint32Array();
     Float32Array();
     Float64Array();
     */
    tsScene01 () {
      console.warn('tsScene01')
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
