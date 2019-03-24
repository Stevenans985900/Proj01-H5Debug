<template>
  <div class="zz-page">
    <ContentView :childList="showList"></ContentView>
  </div>
</template>

<script>
import ContentView from '../../components/content/ContentView'
export default {
  name: 'H5Super',
  components: {ContentView},
  data () {
    return {
      showList: [{
        name: 'Web JS',
        path: '/H5Super/JsSuper'
      }, {
        name: 'Web CSS',
        path: '/H5Super/CssSuper'
      }, {
        name: 'Web HTML',
        path: '/H5Super/HtmlSuper'
      }]
    }
  },
  methods: {
  },
  /**
   * Web技术栈
   * http://localhost:8800/#/H5Super
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>
</style>
