<template>
    <div class="zz-page">
      <SingleList :singleList="singleList"></SingleList>
    </div>
</template>

<script>
/**
 * H5工程@CSS/style/layout
 *
 * Router
 * --- http://localhost:8800/#/css/style/layout
 */
import SingleList from '../../../../components/demo/SingleList'
export default {
  name: 'LayoutIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.CSS布局',
        path: '/css/style'
      }, {
        name: '2.CSS文本',
        path: '/css'
      }, {
        name: '3.CSS动画',
        path: '/js'
      }]
    }
  }
}
</script>

<style scoped>

</style>
