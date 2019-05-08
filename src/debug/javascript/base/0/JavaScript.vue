<template>
  <div class="zz-page">
    <ContentView :childList="showList"></ContentView>
  </div>
</template>

<script>
import ContentView from '../../../../components/content/ContentView'
export default {
  name: 'JavaScript',
  components: {ContentView},
  data () {
    return {
      showList: [{
        name: 'js for循环特性',
        path: '/H5Super/JsSuper/JavaScript/ForBasic'
      }, {
        name: 'js数组特性',
        path: '/H5Super/JsSuper/JavaScript/ArrayBasic'
      }]
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * URL
   * http://localhost:8800/#/H5Super/JsSuper/JavaScript
   * Js基础-数组操作
   * for
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
