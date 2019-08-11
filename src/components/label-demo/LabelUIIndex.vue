<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
/**
 * H5工程@LableUI
 *
 * Router
 * --- http://localhost:8800/#/html/label-ui
 */
import SingleList from '../demo/SingleList'
export default {
  name: 'LabelUIIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.IframeBox',
        path: '/html/label-ui/iframe'
      }, {
        name: '2.ImageBox',
        path: '/html/label-ui/image'
      }]
    }
  }
}
</script>

<style scoped>

</style>
