<template>
  <div>Home
    <ParentView></ParentView>
    <!--<router-view />-->
  </div>
</template>

<script>
import ParentView from '../debug/css/selector/mouse/actions/SelActionsCompare'

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
