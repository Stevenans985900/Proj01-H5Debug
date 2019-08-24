<template>
  <div class="zz-page">
    <SingleLoop :singleList="singleList"></SingleLoop>
  </div>
</template>

<script>
/**
 * H5工程模板@index
 *
 * Router
 * --- http://localhost:8800/#/index
 */
import SingleLoop from './SingleLoop'

export default {
  name: 'PageIndex',
  components: {SingleLoop},
  // props: ['singleList'],
  data () {
    return {}
  },
  created () {
    if (this.$route.params) {
      this.singleList = this.$route.params
    }
  }
}
</script>

<style scoped>

</style>
