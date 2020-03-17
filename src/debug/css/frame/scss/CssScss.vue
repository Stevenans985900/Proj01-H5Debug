<template>
  <div class="zz-page">
    <div class="cs02-text">SASS/SCSS</div>
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
 * ---配置webpack.base.conf.js scss loader
 *
 * ref:
 * --- http://sass.bootcss.com/docs/sass-reference/
 * --- https://www.sass.hk/docs/
 *
 * issue
 * #1.https://github.com/zhengoogle/Proj01-H5Debug/issues/1 // sass-loader version bug
 * ---需要指定版本，v8.10.0@sass@7.3.1
 *
 * Router
 * --- http://localhost:8800/#/css/frame/scss
 */
export default {
  name: 'CssScss'
}
</script>

<style lang="scss">
  @import "css-scss";
</style>
