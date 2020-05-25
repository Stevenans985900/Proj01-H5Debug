<template>
  <div class="zz-page">
    <zz-border-box :height="'60vw'"
                   :title="'1.border-radius例子'">
      <div class="bt-ts1">
      </div>
    </zz-border-box>
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
 * --- http://localhost:8800/#/css/border/radius
 *
 * issue
 * #1.
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
 @import "border-ts.scss";
</style>
