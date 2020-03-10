<template>
  <div class="zz-page">
    <div class="pr-color-box"></div>
  </div>
</template>

<script>
/**
 * CSS@screen/postcss
 * ---移动端适配方案postcss-pxtorem
 * --- npm install postcss-pxtorem -D
 *
 * ref:
 * --- https://github.com/cuth/postcss-pxtorem/
 * ---Blog
 * --- https://www.jianshu.com/p/8350b611e5bb
 * --- https://www.jianshu.com/p/8078ac26e257
 *
 * Router
 * --- http://localhost:8800/#/css/solution/screen/px2rem
 */

export default {
  name: 'PX2rem'
}
</script>

<style scoped>
  .pr-color-box {
    width: 375px;
    height: 100px;
    background: aquamarine;
  }
</style>
