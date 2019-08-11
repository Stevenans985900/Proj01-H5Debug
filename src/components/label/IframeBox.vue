<template>
  <div class="ib0-box">
    <iframe class="ib0-iframe-box" :src="pageUrl"
            frameborder="no" marginwidth="0" marginheight="0"></iframe>
  </div>
</template>

<script>
/**
 * H5工程@label-ui/iframe
 * ---封装iframe基本嵌套属性
 *
 * 使用场景
 * 1.NG
 *
 * issue
 * #1.NG
 *
 * Router
 * --- NG
 */
export default {
  name: 'IframeBox',
  props: ['pageUrl']
}
</script>

<style scoped>
  .ib0-box {
    width: 100%;
    height: 100%;
  }

  .ib0-iframe-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
