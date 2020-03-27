<template>
  <div class="zz-page">
    <div>CSS selector</div>
    <div class="cs-root">
      <div id="csRootChild1"></div>
      <p>PPP1</p>
      <p>PPP2</p>
      <div options="select" style="height: 10px;"></div>
    </div>
  </div>
</template>

<script>
/**
 * H5工程@css/selector
 *
 * 后代选择器
 * ---
 *
 * ref:
 * --- https://www.runoob.com/cssref/css-selectors.html
 *
 * issue
 * #1.
 *
 * Router
 * --- http://localhost:8800/#/css/selector
 */

export default {
  name: 'basic'
}
</script>

<style scoped lang="scss">
  @import "CssSelector.scss";
</style>
