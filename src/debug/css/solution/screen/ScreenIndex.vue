<template>
    <div class="zz-page">
      <RemScene></RemScene>
    </div>
</template>

<script>
// 桌面平台屏幕适配方案1
import DtGeneral from './desktop/DtGeneral'
import RemScene from './rem/RemScene'
export default {
  name: 'ScreenIndex',
  components: {RemScene, DtGeneral},
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
