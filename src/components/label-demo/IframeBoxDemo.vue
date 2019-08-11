<template>
  <div class="zz-page ibd-page-box">
    <IframeBox :pageUrl="pageUrl"></IframeBox>
  </div>
</template>

<script>
import IframeBox from '../label/IframeBox'

/**
 * H5工程@lable-ui/iframe
 *
 * Router
 * --- http://localhost:8800/#/html/label-ui/iframe
 */
export default {
  name: 'IframeBoxDemo',
  components: {IframeBox},
  data () {
    return {
      pageUrl: 'https://www.bing.com'
    }
  }
}
</script>

<style scoped>
  .ibd-page-box {
    background: white;
  }
</style>
