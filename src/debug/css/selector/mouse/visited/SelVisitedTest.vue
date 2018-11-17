<template>
  <div class="zz-page">
    <div>
      <a class="svt-elm-sty01" href="https://www.baidu.com">Css link selector</a>
    </div>
    <div>
      <a class="svt-elm-sty01" href="https://www.google.com">Css link selector</a>
    </div>
    <div>
      <a class="svt-elm-sty01">Css link selector</a>
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
   * css ==> selector ==> visited
   *  CSS选择器visited
   *  定义和用法
   *    选择已访问的链接，并设置其样式
   *    visited CSS伪类表示用户已访问过的链接。 出于隐私原因，可以使用此选择器修改的样式非常有限。
   *    允许的值：
   *      color
   *      background-color
   *      border-color (and border-color for separate sides)
   *      outline color
   *      column-rule-color
   *      the color parts of fill and stroke
   *
   * Reference:
   *  doc
   *    en
   *    https://www.w3schools.com/cssref/sel_visited.asp
   *    https://developer.mozilla.org/en-US/docs/Web/CSS/:visited
   *    zh
   *    http://www.w3school.com.cn/cssref/selector_visited.asp
   *  blog:
   *    https://www.cnblogs.com/freeyiyi1993/p/3621032.html
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>
  .svt-elm-sty01 {
    padding: 10px;
    font-size: 16px;
    color: goldenrod;
  }

  .svt-elm-sty01:visited {
    font-size: 25px;
    color: greenyellow;
  }
</style>
