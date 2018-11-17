<template>
  <div class="zz-page">
    <div>
      <a class="slt-elm-sty01" href="https://www.bing.com">Css link selector</a>
    </div>
    <div>
      <a class="slt-elm-sty01" href="https://www.google.com">Css link selector</a>
    </div>
    <div>
      <a class="slt-elm-sty01">Css link selector</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelLinkTest',
  data () {
    return {
      name: 'name'
    }
  },
  /**
   * css ==> selector ==> link
   *  CSS选择器link
   *  定义和用法
   *    选择未被访问的链接，并设置其样式
   *
   * Reference:
   *  doc
   *    en
   *    https://developer.mozilla.org/en-US/docs/Web/CSS/:link
   *    https://www.w3schools.com/cssref/sel_link.asp
   *    zh
   *    http://www.w3school.com.cn/cssref/selector_link.asp
   *  blog:
   *    https://www.cnblogs.com/freeyiyi1993/p/3621032.html
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>
  .slt-elm-sty01 {
    padding: 10px;
    font-size: 16px;
    color: goldenrod;
  }

  .slt-elm-sty01:link {
    font-size: 25px;
    color: greenyellow;
  }
</style>
