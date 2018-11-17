<template>
  <div>Home
    <ParentView></ParentView>
    <!--<router-view />-->
  </div>
</template>

<script>
import ParentView from '../debug/css/selector/before/SelBeforeTest'

export default {
  name: 'Home',
  components: {ParentView},
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
