<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
/**
 * H5工程@js/base
 *
 * Router
 * ---http://localhost:8800/#/js/base
 */
import SingleList from '../../../components/demo/SingleList'

export default {
  name: 'BaseIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.ES5 数据类型',
        path: '/js/base/type'
      }]
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
