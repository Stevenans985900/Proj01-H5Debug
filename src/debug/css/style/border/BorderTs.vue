<template>
  <div class="zz-page">
    <div></div>
  </div>
</template>

<script>
/**
 * html/style/border
 * ---CSS样式border
 * ---
 *
 * ---基本特性
 * ---1.修改placeholder
 * --- https://jingyan.baidu.com/article/19192ad8eada35e53e570721.html
 *
 * ---常见场景
 * ---1.修改placeholder
 * --- https://jingyan.baidu.com/article/19192ad8eada35e53e570721.html
 * ---
 * ---2.复制内容到剪切板
 * --- cnpm install vue-clipboard2 --save
 * --- https://www.cnblogs.com/similar/p/10757540.html
 * --- 使用input的select( document.execCommand('Copy') )
 * --- http://yige.org/htmldom/met_text_select.php
 * ---
 * ---3.文件场景
 * --- input file
 * --- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file
 *
 * ref:
 * --- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input
 *
 * Router
 * --- http://localhost:8800/#/html/label/input
 *
 * issue
 * #1.input type="number"时 maxlength 属性不起作用
 * --- 规避方案：使用tel
 * --- https://blog.csdn.net/u012982629/article/details/80588438
 *
 * #2.input文本内容动态改变后的光标位置问题
 * --- 规避方案：动态设置elm.selectionStart
 * --- https://segmentfault.com/q/1010000011036750
 *
 */

export default {
  name: 'BorderTs',
  data () {
    return {
      data1: 10
    }
  }
}
</script>

<style scoped lang="scss">

</style>
