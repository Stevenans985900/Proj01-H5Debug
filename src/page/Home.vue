<template>
  <div>
    <H5Super/>
  </div>
</template>

<script>
import VwAdaptTest from '../debug/css/solution/screen/vw/VwAdaptTest'
import RemAdaptTest from '../debug/css/solution/screen/rem/RemAdaptTest'
import H5Super from '../debug/0/H5Super'

export default {
  name: 'Home',
  components: {H5Super, RemAdaptTest, VwAdaptTest},
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
