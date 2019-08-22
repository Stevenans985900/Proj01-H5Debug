<template>
    <div class="zz-page">
      <SingleList :singleList="singleList"></SingleList>
    </div>
</template>

<script>
/**
 * H5工程@CSS/style/anim
 *
 * Router
 * --- http://localhost:8800/#/css/style/anim
 */
import SingleList from '../../../../components/demo/SingleList'
export default {
  name: 'AnimIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.CSS动画',
        path: '/css/style/anim/sty'
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
