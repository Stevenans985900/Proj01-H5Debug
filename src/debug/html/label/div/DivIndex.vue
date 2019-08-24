<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
    <FloatBtn :issueList="issueList"/>
  </div>
</template>

<script>
/**
 * H5工程@HTML/label/div
 *
 * Router
 * --- http://localhost:8800/#/html/label/div
 */
import SingleList from '../../../../components/demo/SingleList'
import FloatBtn from '../../../../components/demo/issue/FloatBtn'

export default {
  name: 'DivIndex',
  components: {FloatBtn, SingleList},
  data () {
    return {
      singleList: [{
        name: '1.div@ElementProps',
        path: '/html/label/div/props'
      }, {
        name: '2.div@DivTest',
        path: '/html/label/div/test'
      }],
      issueList: [{
        name: '#1.div/span元素间隔问题',
        path: '/html/label/div/is01'
      }]
    }
  }
}
</script>

<style scoped>

</style>
