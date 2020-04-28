<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'"
                   :title="'1.CSS animation 平移'">
      <div class="ca-ts1">
        <div id="ts1ColorBox" class="ca-color-box"></div>
      </div>
    </zz-border-box>
  </div>
</template>

<script>
/**
 * CSS动画@CSS/style/anim/base
 * ---animation属性
 * --- animation: @keyframes duration | timing-function | delay | iteration-count
 * ---  | direction | fill-mode | play-state | name
 * --- animation-timing-function:
 {
   // Keyword values
   animation-timing-function: ease;
   animation-timing-function: ease-in;
   animation-timing-function: ease-out;
   animation-timing-function: ease-in-out;
   animation-timing-function: linear;
   animation-timing-function: step-start;
   animation-timing-function: step-end;
 }
 * --- single-animation-iteration-count: infinite | <number>
 *
 * ref
 * ---原生API
 * ---animation
 * --- https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation
 * --- https://www.w3schools.com/cssref/css3_pr_animation.asp
 * --- https://www.w3schools.com/css/css3_animations.asp
 * --- https://www.runoob.com/cssref/css-animatable.html
 * --- https://www.w3school.com.cn/cssref/pr_animation.asp
 * ---transform
 * --- https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform
 * --- https://www.runoob.com/cssref/css3-pr-transform.html
 * --- https://www.w3school.com.cn/cssref/pr_transform.asp
 * ---优质博客
 * --- https://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html
 * ---框架
 * ---animate.css
 * --- https://www.cnblogs.com/xiaohuochai/p/7372665.html
 *
 * 场景归类
 * 1.平移动画
 * 2.旋转动画
 * 3.缩放动画
 * 图片操作
 * --- 旋转
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/css/style/anim/base
 */
export default {
  name: 'CSSAnimate'
}
</script>

<style scoped lang="scss">
  @import "css-animate.scss";
</style>
