<template>
  <div class="zz-page">
    <zz-border-box :height="'50vw'"
                   :title="'1.CSS定位sticky'">
      <div class="ps-ts1">
        <div class="ps-ts1-box0"></div>
        <div class="ps-ts1-box1"></div>
        <div class="ps-ts1-box2"></div>
      </div>
    </zz-border-box>
  </div>
</template>

<script>
/**
 * CSS定位@CSS/position/sticky
 * ref
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
 * ---优质博客
 * --- http://www.ruanyifeng.com/blog/2019/11/css-position.html
 * --- https://www.cnblogs.com/moqiutao/p/7341671.html
 *
 * 场景归类
 * 1.平移动画
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/css/pos/sticky
 */

export default {
  name: 'PosSticky',
  data () {
    return {
      data1: 10
    }
  }
}
</script>

<style scoped lang="scss">
 @import "pos-sticky.scss";
</style>
