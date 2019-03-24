<template>
  <div class="zz-page">
    <ContentView :childList="showList"></ContentView>
  </div>
</template>

<script>
import ContentView from '../../../../components/content/ContentView'
export default {
  name: 'ES6',
  components: {ContentView},
  data () {
    return {
      showList: [{
        name: 'Promise基本特性',
        path: '/H5Super/JsSuper/ES6/PromiseBasic'
      }, {
        name: 'Async基本特性',
        path: '/H5Super/JsSuper/ES6/PromiseBasic'
      }]
    }
  },
  /**
   * http://localhost:8800/#/H5Super/JsSuper/ES6
   * ES6
   * blog
   * ---http://es6.ruanyifeng.com/
   * ---http://www.runoob.com/w3cnote/es6-tutorial.html
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
