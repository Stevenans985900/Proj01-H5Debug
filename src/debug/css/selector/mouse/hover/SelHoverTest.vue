<template>
  <div class="zz-page">
    <!-- ref -->
    <!-- https://www.w3school.com.cn/cssref/selector_hover.asp -->
    <zz-border-box :height="'30vw'"
                   :title="'2.CSS伪类hover'">
      <a style="font-size: 3vw;">www.bing.com</a>
    </zz-border-box>
    <zz-border-box :height="'30vw'"
                   :title="'1.hover DEMO'">
      <div class="sht-elm-sty01">Css hover selector</div>
    </zz-border-box>
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
 * --- http://localhost:8800/#/css/selector/hover
 */

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

<style scoped lang="scss">
  /* 2. */
  a:link {
    color: blue;
  }

  a:visited {
    color: blue;
  }

  a:hover {
    color: red;
  }

  a:active {
    color: yellow;
  }

  .sht-elm-sty01 {
    padding: 10px;
    font-size: 16px;
    color: goldenrod;
  }

  .sht-elm-sty01:hover {
    font-size: 25px;
    color: greenyellow;
  }
</style>
