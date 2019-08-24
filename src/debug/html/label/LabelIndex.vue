<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
import SingleList from '../../../components/demo/SingleList'
/**
 * H5工程@HTML/label
 *
 * Router
 * --- http://localhost:8800/#/html/label
 */
export default {
  name: 'LabelIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.label@div',
        path: '/html/label/div'
      }, {
        name: '2.label@iframe',
        path: '/'
      }, {
        name: '3.label@image',
        path: '/'
      }, {
        name: '4.label@input',
        path: '/'
      }, {
        name: '5.label@svg',
        path: '/'
      }, {
        name: '6.label@textarea',
        path: '/'
      }]
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
