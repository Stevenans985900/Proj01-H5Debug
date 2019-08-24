<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
    <FloatBtn :issueList="issueList"/>
  </div>
</template>

<script>
/**
 * H5工程模板参考页面
 * API dev@2019.08.10
 * TODO 一级卡片/二级卡片设计
 *
 * Router
 * --- http://localhost:8800/#/z
 */
import SingleList from '../components/demo/SingleList'
import FloatBtn from '../components/demo/issue/FloatBtn'

export default {
  name: 'ZIndex',
  components: {FloatBtn, SingleList},
  data () {
    return {
      singleList: [{
        name: '1.H5工程模板',
        path: '/index/demo'
      }, {
        name: '2.HTML5开发工具',
        path: '/index/dev-tools'
      }],
      issueList: [{
        name: '1.#issue 001',
        path: '/index/dev-tools'
      }]
    }
  },
  mounted () {
    this.$router.push({
      name: 'PageIndex',
      params: [{
        name: '1.H5工程模板',
        path: '/index/demo',
        list: [{
          name: '1.#issue 001',
          path: '/index/dev-tools',
          list: [{
            name: '1.#issue 002',
            path: '/index/dev-tools'
          }]
        }]
      }, {
        name: '2.HTML5开发工具',
        path: '/index/dev-tools'
      }]
    })
  }
}
</script>

<style scoped>

</style>
