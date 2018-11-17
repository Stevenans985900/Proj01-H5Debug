<template>
  <div class="zz-page">
    <div class="sac-elm-sty01">Css mouse actions selector</div>
    <div>
      <a class="sac-elm-sty01" href="https://www.baidu.com">Bai Du</a>
    </div>
    <div>
      <a class="sac-elm-sty01" href="https://www.google.com">Google</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelActionsCompare',
  data () {
    return {
      name: 'name'
    }
  },
  /**
   * css ==> selector ==> mouse actions compare
   *  CSS选择器xxx
   *  定义和用法
   *    :active 选择鼠标按下点击(或触摸点击)的元素
   *    :hover  选择鼠标指针浮动在其上的元素
   *    :link   选择未被访问的链接
   *    :visited   选择已访问的链接
   *    顺序问题：
   *    Styles defined by the :active pseudo-class will be overridden by any subsequent link-related pseudo-class
   *    (:link, :hover, or :visited) that has at least equal specificity. To style links appropriately, put the :active
   *    rule after all other link-related rules, as defined by the LVHA-order: :link — :visited — :hover — :active.
   *
   * Reference:
   *  doc
   *    en
   *    https://developer.mozilla.org/en-US/docs/Web/CSS/:active
   *    https://www.w3schools.com/cssref/sel_active.asp
   *    zh
   *    http://www.w3school.com.cn/cssref/selector_active.asp
   *  blog:
   *    https://www.cnblogs.com/freeyiyi1993/p/3621032.html
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>
  .sac-elm-sty01 {
    padding: 10px;
    font-size: 16px;
    color: goldenrod;
  }

  /* !!!共用有顺序问题，顺序错误可能导致属性的失效 */
  /* LVHA-order: :link — :visited — :hover — :active. */
  /* Unvisited links */
  .sac-elm-sty01, a:link {
    color: blue;
  }

  /* Visited links */
  .sac-elm-sty01, a:visited {
    color: purple;
  }

  /* Hovered links */
  .sac-elm-sty01, a:hover {
    color: yellow;
  }

  /* Active links */
  .sac-elm-sty01, a:active {
    color: red;
  }
</style>
