<template>
    <div class="zz-page">
      <SingleList :singleList="singleList"></SingleList>
    </div>
</template>

<script>
/**
 * H5工程@CSS/style
 *
 * Router
 * --- http://localhost:8800/#/css/style
 */
import SingleList from '../../../components/demo/SingleList'
export default {
  name: 'StyleIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.CSS布局',
        path: '/css/style/layout'
      }, {
        name: '2.CSS文本',
        path: '/css/style/text'
      }, {
        name: '3.CSS动画',
        path: '/css/style/anim'
      }]
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
