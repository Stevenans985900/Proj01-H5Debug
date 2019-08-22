<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
/**
 * H5工程模板参考页面
 * API dev@2019.08.10
 * TODO 一级卡片/二级卡片设计
 *
 * Router
 * --- http://localhost:8800/#/index
 */
import SingleList from '../components/demo/SingleList'

export default {
  name: 'ZIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.H5工程模板',
        path: '/index/demo'
      }, {
        name: '2.HTML5开发工具',
        path: '/index/dev-tools'
      }]
    }
  }
}
</script>

<style scoped>

</style>
