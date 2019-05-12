<template>
  <div class="zz-page">
    <DivElementProps/>
    <!--<H5Super/>-->
  </div>
</template>

<script>
import DivElementProps from '../debug/html/label/div/DivElementProps'

export default {
  name: 'Home',
  components: {DivElementProps},
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
