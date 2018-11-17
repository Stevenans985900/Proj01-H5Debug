<template>
  <div class="zz-page">
    <div class="sht-elm-sty01">Css hover selector</div>
  </div>
</template>

<script>
export default {
  name: 'SelHoverTest',
  data () {
    return {
      name: 'name'
    }
  },
  /**
   * css ==> selector ==> hover
   *  CSS选择器hover
   *  定义和用法
   *    选择鼠标指针浮动在其上的元素，并设置其样式
   *
   * Reference:
   *  doc
   *    en
   *    https://developer.mozilla.org/en-US/docs/Web/CSS/:hover
   *    https://www.w3schools.com/cssref/sel_hover.asp
   *    zh
   *    http://www.w3school.com.cn/cssref/selector_hover.asp
   *  blog:
   *    https://www.cnblogs.com/freeyiyi1993/p/3621032.html
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>
  .sht-elm-sty01{
    padding: 10px;
    font-size: 16px;
    color: goldenrod;
  }

  .sht-elm-sty01:hover{
    font-size: 25px;
    color: greenyellow;
  }
</style>
