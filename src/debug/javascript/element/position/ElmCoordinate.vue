<template>
  <div class="zz-page">
    <div style="height: 60px;">ElmCoordinate</div>
    <div ref="ecElm0" class="ec-elm01-sty"></div>
  </div>
</template>

<script>
export default {
  name: 'ElmCoordinate',
  data () {
    return {
      name: 'name'
    }
  },
  /**
   * 元素坐标位置
   * https://www.cnblogs.com/cloud-k/p/7681386.html
   */
  mounted: function () {
    console.log('mounted')
    console.log(this.$refs.ecElm0)
    console.log(window.screen.width + 'x' + window.screen.height)
    console.log(this.$refs.ecElm0.offsetTop)
    console.log(this.$refs.ecElm0.style.top + ' ' + this.$refs.ecElm0.style.left)
    console.log('clientWidth x clientHeight')
    console.log(this.$refs.ecElm0.clientWidth + 'x' + this.$refs.ecElm0.clientHeight)
  }
}
</script>

<style scoped>
  .ec-elm01-sty {
    width: 100%;
    height: 100px;
    background: darkseagreen;
  }
</style>
