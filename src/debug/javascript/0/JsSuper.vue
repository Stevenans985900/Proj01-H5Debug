<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
import SingleList from '../../../components/demo/SingleList'
/**
 * H5工程@js
 *
 * Router
 * --- http://localhost:8800/#/js
 */
export default {
  name: 'JsSuper',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.ES5基础',
        path: '/js/base'
      }, {
        name: '1.ES6特性',
        path: '/js/es6'
      }]
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

</style>
