<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
import SingleList from '../../components/demo/SingleList'

/**
 * H5工程模板参考页面
 * API dev@2019.08.10
 * TODO 一级卡片/二级卡片设计
 *
 * Router
 * --- http://localhost:8800/#/
 * --- http://localhost:8800/#/index
 */
export default {
  name: 'ZIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.H5模板',
        path: '/index/demo'
      }, {
        name: '2.CSS',
        path: '/css'
      }, {
        name: '3.JavaScript',
        path: '/js'
      }, {
        name: '3.HTML5',
        path: '/html'
      }]
    }
  }
}
</script>

<style scoped>

</style>
