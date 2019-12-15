<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
/**
 * H5工程@js/base/type
 *
 * Router
 * --- http://localhost:8800/#/js/base/type
 */
import SingleList from '../../../../components/demo/SingleList'

export default {
  name: 'TypeIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.Array数据类型',
        path: '/js/base/type/array/base'
      }, {
        name: '2.String数据类型',
        path: '/js/base/type/string/base'
      }]
    }
  }
}
</script>

<style scoped>

</style>
