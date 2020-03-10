<template>
  <div class="zz-page">
    <div class="pv-color-box"></div>
  </div>
</template>

<script>
/**
 * CSS@screen/postcss
 * ---移动端适配方案postcss-px-to-viewport
 * --- npm install postcss-viewport-units -D
 * --- npm install postcss-px-to-viewport -D
 *
 * ref:
 * --- https://github.com/postcss/postcss
 * --- https://www.postcss.com.cn/
 * ---Blog
 * --- https://www.jianshu.com/p/cceafb0dc056 // .postcssrc.js
 * --- https://blog.csdn.net/ygh5123687/article/details/89337470 // .postcssrc.js
 * --- https://www.jianshu.com/p/8078ac26e257 // postcss-px-to-viewport配置，cli3.0？ bug？
 *
 * Router
 * --- http://localhost:8800/#/css/solution/screen/px2vw
 *
 * Bug
 * 1.安装失败，重试
 *
 */

export default {
  name: 'PX2vw'
}
</script>

<style scoped>
  .pv-color-box {
    width: 375px;
    height: 100px;
    background: aquamarine;
  }
</style>
