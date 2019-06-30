<template>
  <div id="app" class="zz-page">
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable no-new */
import _zlog from './common/js/utils/ZLog'
import VConsole from 'vconsole'

export default {
  name: 'App',
  components: {},
  beforeCreate () {
    // init vConsole
    if (VConsole) {
      new VConsole()
      _zlog.log('VConsole init')
    }
  },
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style>
  body,html{
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
