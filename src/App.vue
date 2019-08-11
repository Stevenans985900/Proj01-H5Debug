<template>
  <div id="app" class="zz-page">
    <SingleList :singleList="singleList"></SingleList>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable no-new */
/**
 * H5工程
 *
 * Router
 * --- http://localhost:8800/#/
 */
import VConsole from 'vconsole'
import APPInfo from './common/js/utils/APPInfo'
import SingleList from './components/demo/SingleList'

let isVConsoleDebug = false

export default {
  name: 'App',
  components: {SingleList},
  data () {
    return {
      singleList: [{
        name: '1.H5工程',
        path: '/index'
      }, {
        name: '2.CSS',
        path: '/css'
      }, {
        name: '3.JavaScript',
        path: '/js'
      }, {
        name: '3.HTML5',
        path: '/html'
      }]
    }
  },
  beforeCreate () {
    // init vConsole
    if (VConsole && isVConsoleDebug) {
      new VConsole()
      this._zlog.log('VConsole init')
    }
  },
  mounted: function () {
    APPInfo.loggerBrowserInfo(this)
    this._zlog.w('==================== app mounted ====================')
  }
}
</script>

<style>
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
