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
 * ---http://localhost:8800/#/js/base/type
 */
import SingleList from '../../../../components/demo/SingleList'
export default {
  name: 'TypeIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.ES5 Array',
        path: '/js/base/type/array'
      }]
    }
  }
}
</script>

<style scoped>

</style>
