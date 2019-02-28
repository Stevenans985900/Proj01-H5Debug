<template>
  <div>Home
    <RemAdaptTest/>
  </div>
</template>

<script>
import VwAdaptTest from '../debug/css/solution/screen/vw/VwAdaptTest'
import RemAdaptTest from '../debug/css/solution/screen/rem/RemAdaptTest'

export default {
  name: 'Home',
  components: {RemAdaptTest, VwAdaptTest},
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
