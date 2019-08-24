<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
/**
 * H5工程模板@issue
 *
 * Router
 * --- http://localhost:8800/#/issue
 */
import SingleList from '../SingleList'

export default {
  name: 'IssuePage',
  components: {SingleList},
  data () {
    return {
      singleList: []
    }
  },
  mounted () {
    this.singleList = this.$route.params
  }
}
</script>

<style scoped>

</style>
