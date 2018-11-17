<template>
  <div class="zz-page">
    <div class="sat-div-sty01">Css after selector</div>
  </div>
</template>

<script>
export default {
  name: 'SelAfterTest',
  data () {
    return {
      name: 'name'
    }
  },
  /**
   * css ==> selector ==> after
   *  CSS选择器after
   *  定义和用法
   *    :after 选择器在被选元素的内容后面插入内容
   *    请使用 content 属性来指定要插入的内容
   * Reference:
   *  en
   *  https://www.w3schools.com/cssref/sel_after.asp
   *  zh
   *  http://www.w3school.com.cn/cssref/selector_after.asp
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>
  .sat-div-sty01{
    padding: 10px;
    font-size: 16px;
    color: goldenrod;
  }

  .sat-div-sty01:after{
    content: 'After';
    margin-left: 10px;
    font-size: 25px;
    color: firebrick;
  }
</style>
