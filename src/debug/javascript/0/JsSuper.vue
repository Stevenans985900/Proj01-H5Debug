<template>
  <div class="zz-page">
    <ContentView :childList="showList"></ContentView>
  </div>
</template>

<script>
import ContentView from '../../../components/content/ContentView'
export default {
  name: 'JsSuper',
  components: {ContentView},
  data () {
    return {
      showList: [{
        name: 'ES6特性',
        path: '/H5Super/JsSuper/ES6'
      }]
    }
  },
  /**
   * http://localhost:8800/#/H5Super/JsSuper
   */
  mounted: function () {
  }
}
</script>

<style scoped>

</style>
