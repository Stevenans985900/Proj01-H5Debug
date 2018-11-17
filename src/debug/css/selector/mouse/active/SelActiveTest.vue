<template>
  <div class="zz-page">
    <div class="sat-elm-sty01">Css active selector</div>
  </div>
</template>

<script>
export default {
  name: 'SelActiveTest',
  data () {
    return {
      name: 'name'
    }
  },
  /**
   * css ==> selector ==> active
   *  CSS选择器active
   *  定义和用法
   *    ：active CSS伪类表示由用户激活的元素（例如按钮）。 使用鼠标时，“激活”通常在用户按下主鼠标按钮时启动。
   *    :active伪类通常用于<a>和<button>元素
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
  .sat-elm-sty01{
    padding: 10px;
    font-size: 16px;
    color: goldenrod;
  }

  .sat-elm-sty01:active{
    font-size: 25px;
    color: firebrick;
  }
</style>
