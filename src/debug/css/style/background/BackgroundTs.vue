<template>
  <div class="zz-page">
    <zz-border-box :height="'60vw'"
                   :title="'1.背景渐变主要场景'">
      <div class="bkg-ts1">
        <div class="color-box1">上下渐变</div>
        <div class="color-box2">左右渐变</div>
        <div class="color-box3">斜角渐变</div>
        <div class="color-box4">左-中-右渐变</div>
        <div class="color-box5">角度渐变</div>
      </div>
    </zz-border-box>
  </div>
</template>

<script>
/**
 * css/style/bkg
 * --- CSS background
 background-color  指定要使用的背景颜色  1
 background-position  指定背景图像的位置  1
 background-size  指定背景图片的大小  3
 background-repeat  指定如何重复背景图像  1
 background-origin  指定背景图像的定位区域  3
 background-clip  指定背景图像的绘画区域  3
 background-attachment  设置背景图像是否固定或者随着页面的其余部分滚动。  1
 background-image  指定要使用的一个或多个背景图像
 *
 * ---背景渐变
 * ---1.从上到下渐变
 * ---2.从左到右渐变
 * ---3.斜角渐变
 * ---4.左-中-右渐变
 * --- background-image: linear-gradient(#e66465, #9198e5); // 从上到下的线性渐变
 * --- background-image: linear-gradient(to right, red , yellow); // 从左到右的线性渐变
 * --- https://www.runoob.com/css3/css3-gradients.html
 * ---背景半透明
 * --- background: rgba(0, 0, 0, 0.5);
 *
 * ref:
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/CSS/background
 * --- https://developer.mozilla.org/en-US/docs/Web/CSS/gradient
 * ---优质博客
 * --- https://www.runoob.com/cssref/css3-pr-background.html // 背景样式
 * --- https://www.runoob.com/css3/css3-gradients.html // 渐变
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/css/style/bkg/gradients
 *
 * issue
 * #1.
 * ---
 */

export default {
  name: 'BackgroundTs'
}
</script>

<style scoped lang="scss">
  @import "bkg-ts.scss";
</style>
