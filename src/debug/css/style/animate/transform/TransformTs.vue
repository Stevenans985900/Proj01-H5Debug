<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'"
                   :title="'1.CSS transform 平移'">
      <div class="tt-ts1">
        <div @click="onTransformX"
             :class="{'tt-color-box-d': isTranslateX}"
          id="ts1ColorBox" class="tt-color-box">点我</div>
      </div>
    </zz-border-box>
  </div>
</template>

<script>
/**
 * H5工程@css/anim/transform
 * --- <single-transition> = [ none | <single-transition-property> ] || <time> || <timing-function> || <time>
 * --- transform: rotate | scale | skew | translate |matrix
 *
 * scene
 * 1.平移
 * --- translate(X,Y)
 * 2.旋转
 * --- rotate
 * 3.缩放
 * --- scale
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
 * --- https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition
 * --- https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions // 官方例子
 * --- https://www.runoob.com/cssref/css3-pr-transform.html
 * --- https://www.w3school.com.cn/cssref/pr_transform.asp
 * ---优质博客
 * --- https://www.cnblogs.com/qianduanjingying/p/4937574.html
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/css/style/transform
 */

export default {
  name: 'TransformTs',
  data () {
    return {
      isTranslateX: false,
      data1: 10
    }
  },
  methods: {
    onTransformX () {
      this.isTranslateX = !this.isTranslateX
    }
  }
}
</script>

<style scoped lang="scss">
  @import "transform-ts.scss";
</style>
