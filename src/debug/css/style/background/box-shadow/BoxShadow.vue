<template>
  <div class="zz-page">
    <zz-border-box :height="'60vw'"
                   :title="'1.box-shadow例子'">
      <div class="bs-ts1">
      </div>
    </zz-border-box>
  </div>
</template>

<script>
/**
 * H5工程@HTML/label
 * ---
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see bDemo.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see bDemo.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see bDemo.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
 * ---优质博客
 * --- https://www.html.cn/archives/9360/
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/css/style/box/shadow
 */

export default {
  name: 'BoxShadow',
  data () {
    return {
      data1: 10
    }
  }
}
</script>

<style scoped lang="scss">
 @import "box-shadow.scss";
</style>
