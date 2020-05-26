<template>
  <div class="zz-page">
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
 * --- http://localhost:8800/#/crypto/base64
 */

const tsBase64 = {
  /**
   * API场景01
   * --- window自带base64编解码方法
   * --- https://www.cnblogs.com/moqiutao/p/6280099.html
   * --- https://www.zhangxinxu.com/wordpress/2018/08/js-base64-atob-btoa-encode-decode/
   */
  tsScene01 () {
    console.warn('tsScene01')

    var encodedData = window.btoa('Hello, world') // 编码
    var decodedData = window.atob(encodedData) // 解码
    console.log(decodedData)
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
  name: 'Base64',
  data () {
    return {
      data1: 10
    }
  },
  methods: tsBase64,
  created () {
    this.tsScene01()
  }
}
</script>

<style scoped lang="scss">

</style>
