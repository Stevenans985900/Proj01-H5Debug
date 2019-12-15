<template>
  <div class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
  </div>
</template>

<script>
/**
 * H5工程@CSS/style/text
 *
 * Router
 * --- http://localhost:8800/#/css/style/text
 */
import SingleList from '../../../../components/demo/SingleList'
export default {
  name: 'TextIndex',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.文本常用',
        path: '/css/style/text/general'
      }, {
        name: '2.文本省略',
        path: '/css/style/text/ellipsis'
      }, {
        name: '3.文本对齐',
        path: '/css/style/text/align'
      }]
    }
  }
}
</script>

<style scoped>

</style>
