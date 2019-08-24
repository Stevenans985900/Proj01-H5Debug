<template>
  <div class="ts01-card">
    <div class="ts01-title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
/**
 * Test card for test
 */
export default {
  name: 'TestCard',
  props: ['title']
}
</script>

<style lang="less" scoped>
  @import "../../../common/css/theme.less";

  .ts01-card {
    box-sizing: border-box;
    width: 100%;
    height: 30vw;
    margin-bottom: 1vw;
    border: @borderColor solid 0.5vw;
  }

  .ts01-title {
    height: 7vw;
    line-height: 7vw;
    border-bottom: @borderColor solid 0.5vw;
  }
</style>
