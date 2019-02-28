<template>
  <div class="zz-page">
    <div>{{title}}</div>
    <div style="width: 50vw;height: 50vh;background: gold;font-size: 2vw;">VW</div>
  </div>
</template>

<script>
export default {
  name: 'VwAdaptTest',
  components: {},
  data () {
    return {
      title: 'VwAdaptTest'
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * 1.Screen adaptation solution vw-vh
   *  vw&vh基础
   *    vw vh vmin vmax:
   *    vw  Relative to 1% of the width of the viewport*
   *    vh  Relative to 1% of the height of the viewport*
   *    vmin  Relative to 1% of viewport's* smaller dimension
   *    vmax  Relative to 1% of viewport's* larger dimension
   *
   * 2.vw适配评价
   *    a.原生比例支持，无需特殊配置；
   *    b.标注尺寸需转换比例单位；
   *    c.安卓4.4以下不支持；
   *
   * 3.参考
   *  docs
   *  https://www.w3schools.com/cssref/css_units.asp
   *  blog:
   *    https://www.zhangxinxu.com/wordpress/2016/08/vw-viewport-responsive-layout-typography/
   *    vw + sass
   *    https://blog.csdn.net/u013778905/article/details/78729468
   *    vw + 插件
   *    https://www.w3cplus.com/mobile/vw-layout-in-vue.html
   *    https://www.cnblogs.com/kdcg/p/9106463.html
   *
   * 4.兼容性
   *  Can i use:
   *    https://caniuse.com/#search=vw
   *    Android: >= 4.4
   *    IE: >= 9.0
   */
  mounted: function () {
    console.log('mounted')
  },
  destroyed: function () {
    // console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
