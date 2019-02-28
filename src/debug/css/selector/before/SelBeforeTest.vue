<template>
  <div class="zz-page">
    <div class="sbt-div-sty01">Css before selector1</div>
    <div class="sbt-div-sty02">Css before selector2</div>
    <div class="sbt-div-sty03">Css before selector3</div>
  </div>
</template>

<script>
export default {
  name: 'SelBeforeTest',
  data () {
    return {
      name: 'name'
    }
  },
  /**
   * css ==> selector ==> before
   *  CSS选择器before
   *  定义和用法
   *    :before 选择器在被选元素的内容前面插入内容
   *    使用content属性来指定要插入的内容
   *  应用场景
   *    利于语义化，用css创建布局元素
   *    用css创建装饰性元素
   * Reference:
   *  doc
   *    en
   *    https://www.w3schools.com/cssref/sel_before.asp
   *    zh
   *    http://www.w3school.com.cn/cssref/selector_before.asp
   *  exam:
   *    https://blog.csdn.net/weixin_36715481/article/details/79032403
   *  blog:
   *    https://www.cnblogs.com/laden666666/p/6089880.html
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>
  .sbt-div-sty01 {
    padding: 10px;
    font-size: 16px;
    color: goldenrod;
  }

  .sbt-div-sty01:before {
    content: 'Before: ';
    font-size: 25px;
    color: firebrick;
  }

  .sbt-div-sty02 {
    height: 25px;
    padding: 10px;
    margin-left: 20px;
    line-height: 25px;
    font-size: 16px;
    color: goldenrod;
  }

  .sbt-div-sty02:before {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 3px;
    background: #9EEA6A;
    content: "";
    opacity: 0.5;
  }

  .sbt-div-sty03 {
    height: 25px;
    padding: 10px;
    margin-left: 20px;
    line-height: 25px;
    font-size: 20px;
    color: goldenrod;
  }

  .sbt-div-sty03:before {
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    left: 3px;
    content: "11";
    background: url("/static/logo/logo.png") no-repeat;
    /*background-image: url("/static/logo/logo.png");*/
    background-size: 26px 26px;
    /*background-size: 100% 100%;*/
    /*background-size: 100%;*/
    vertical-align:middle;
    opacity: 0.5;
  }
</style>
