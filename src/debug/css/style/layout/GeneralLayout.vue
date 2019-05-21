<template>
  <div class="zz-page">
    <!-- position@static -->
    <div v-if="testSate === 0" class="gl-static-box">
      <div class="gl-item-container">
        <div class="gl-vertical-a gl-item-common gl-color1">A</div>
        <div class="gl-vertical-b gl-item-common gl-color2">B</div>
        <!--<span class="gl-vertical-a gl-color1" style="display: block">A</span>-->
        <!--<span class="gl-vertical-b gl-color2" style="display: block">B</span>-->
      </div>
      <!-- inline-block element -->
      <hr>
      <div class="gl-item-container">
        <span class="gl-horizontal-a gl-item-common gl-color1">A</span>
        <span class="gl-horizontal-b gl-item-common gl-color2">B</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneralLayout',
  data () {
    return {
      testSate: 0 // 0(static)/1(relative)
    }
  },
  /**
   * CSS position-static
   *  一个定位为static的元素，它总是根据页面的正常文档流定位，是一种流式布局。
   *  特点：HTML标准文档流，对于inline元素自上而下，一行排满自动添加到下一。block元素自动占一行。
   *  position:
   *      static | relative | absolute | sticky | fixed
   *
   *  Ref:
   *      https://developer.mozilla.org/en-US/docs/Web/CSS/position
   *      https://www.w3schools.com/css/css_positioning.asp
   *  issue
   *  #1.水平堆叠组件有间隔，影响布局精度；
   *  ---a.设置font-size为0；
   *  ---b.使用float定位；
   *
   */
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>
  span {
    display: inline-block;
  }

  /* position:static */
  .gl-static-box {

  }

  .gl-item-container {
    box-sizing: border-box;
    position: static;
    width: 100%;
    height: 20vh;
    border: 2px solid gray;
    /*font-size: 0;*/
  }

  .gl-item-common {
    width: 20vw;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .gl-vertical-a {
  }

  .gl-vertical-b {
  }

  .gl-horizontal-a {

  }

  .gl-horizontal-b {

  }

  .gl-color1 {
    background: cadetblue;
  }

  .gl-color2 {
    background: greenyellow;
  }
</style>
