<template>
  <div id="app" class="zz-page">
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable no-new */
import VConsole from 'vconsole'
import APPInfo from './common/js/utils/APPInfo'

let isVConsoleDebug = false

export default {
  name: 'App',
  components: {},
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
