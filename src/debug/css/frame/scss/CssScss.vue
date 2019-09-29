<template>
  <div class="zz-page">
    <div class="cs02-text">SASS</div>
  </div>
</template>

<script>
/**
 * H5工程@CSS/frame/scss
 *
 * github
 * --- https://vue-loader.vuejs.org/zh/guide/pre-processors.html#sass
 * --- https://github.com/webpack-contrib/sass-loader
 * --- https://www.npmjs.com/package/sass-loader/v/7.0.0 // history version
 *
 * 安装
 * --- npm install -g scss
 * --- npm install -g scss-loader
 * --- npm install scss-loader scss --save-dev
 * --- npm install sass-loader node-sass webpack --save-dev
 *
 * ref:
 * --- http://sass.bootcss.com/docs/sass-reference/
 *
 * issue
 * #1.https://github.com/zhengoogle/Proj01-H5Debug/issues/1 // sass-loader version bug
 *
 * Router
 * --- http://localhost:8800/#/css/frame/scss
 */
export default {
  name: 'CssScss'
}
</script>

<style lang="scss">
  .cs02-text {
    font-size: 20px;
    color: red;
  }
</style>
