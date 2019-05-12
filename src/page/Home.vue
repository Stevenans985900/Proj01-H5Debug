<template>
  <div class="zz-page">
    <JQuerySelector/>
    <!--<H5Super/>-->
  </div>
</template>

<script>
import DivElementProps from '../debug/html/label/div/DivElementProps'
import ElmSelectTest from '../debug/javascript/base/dom/selector/ElmSelectTest'
import JQuerySelector from '../debug/javascript/frame/tools/jquery/JQuerySelector'

export default {
  name: 'Home',
  components: {JQuerySelector, ElmSelectTest, DivElementProps},
  /**
   * http://localhost:8800/#/
   * http://localhost:8800/#/home
   */
  mounted: function () {
    console.log('mounted')
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
