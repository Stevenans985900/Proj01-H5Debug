<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
/**
 * H5工程@HTML
 *
 * Router
 * --- http://localhost:8800/#/html
 */
import SingleList from '../../../components/demo/SingleList'
export default {
  name: 'HtmlSuper',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.标签属性',
        path: '/html/label'
      }, {
        name: '2.标签盒子',
        path: '/html/label-ui'
      }]
    }
  }
}
</script>

<style scoped>

</style>
