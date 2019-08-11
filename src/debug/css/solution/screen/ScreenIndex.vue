<template>
    <div class="zz-page">
      <VwRemPx></VwRemPx>
    </div>
</template>

<script>
// 桌面平台屏幕适配方案1
import DtGeneral from './desktop/DtGeneral'
// REM H5页面适配方案
import VwRemPx from './mobile/VwRemPx'
export default {
  name: 'ScreenIndex',
  components: {VwRemPx, DtGeneral},
  /**
   * http://localhost:8800/#/css/screen
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
