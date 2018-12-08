<template>
  <div>Home
    <VwAdaptTest/>
    <!--<PercentAdapt/>-->
    <!--<RemAdaptTest/>-->
    <!--<router-view />-->
  </div>
</template>

<script>
import EventBaseTest from '../debug/javascript/event/base/EventBaseTest'
import VwAdaptTest from '../debug/css/solution/screen/vw/VwAdaptTest'
import PercentAdapt from '../debug/css/solution/screen/percent/PercentAdapt'
import RemAdaptTest from '../debug/css/solution/screen/rem/RemAdaptTest'

export default {
  name: 'Home',
  components: {RemAdaptTest, PercentAdapt, VwAdaptTest, EventBaseTest},
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
