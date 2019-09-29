<template>
    <div class="zz-page">
      <SingleList :singleList="singleList"></SingleList>
    </div>
</template>

<script>
import SingleList from '../../../components/demo/SingleList'
/**
 * H5工程@CSS/frame
 *
 * Router
 * --- http://localhost:8800/#/css/frame
 */
export default {
  name: 'FrameIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.CSS样式',
        path: '/css/style'
      }, {
        name: '2.CSS选择器',
        path: '/css'
      }, {
        name: '3.样式解决方案',
        path: '/js'
      }, {
        name: '5.CSS框架',
        path: '/js'
      }]
    }
  }
}
</script>

<style scoped>

</style>
