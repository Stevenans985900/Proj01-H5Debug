<template>
  <div class="zz-page">
  </div>
</template>

<script>
/**
 * js/uri
 * --- 选择
 *
 * ---常见场景
 * ---1.URI特殊文本转换
 * --- encodeURIComponent
 * --- decodeURIComponent
 *
 * ref:
 * --- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select
 * ---BLOG
 * --- https://www.w3school.com.cn/js/jsref_encodeURIComponent.asp
 *
 * issue
 * #1.
 * ---
 *
 * Router
 * --- http://localhost:8800/#/js/global/uri
 */

export default {
  name: 'UriTs',
  data () {
    return {
      data1: 10
    }
  },
  mounted () {
    let urlEnc = encodeURIComponent('九分电视剧')
    console.log(urlEnc)
    console.log(decodeURIComponent(urlEnc))
  }
}
</script>

<style scoped lang="scss">

</style>
