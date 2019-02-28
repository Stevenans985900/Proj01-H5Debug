<template>
  <div class="zz-page">
    <div>{{title}}</div>
    <div>屏幕CSS尺寸大小</div>
    <div class="sa-test-container">{{width + 'x' + height}}&nbsp;</div>
  </div>
</template>

<script>
export default {
  name: 'ScreenAdapt',
  components: {},
  data () {
    return {
      title: 'ScreenAdapt',
      width: 0,
      height: 0
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * 屏幕适配
   *  1.移动端屏幕适配问题
   *   issue#1:适配移动端多种尺寸屏幕
   *    屏幕尺寸差异多，浏览器CSS像素参数离散，不是线性比例；
   *   issue#2:1px显示问题
   *    移动端1px非物理尺寸，而是CSS相对单位；
   *    修改viewport可解决，由于分辨率提高，可能导致性能问题；
   *    https://www.cnblogs.com/lunarorbitx/p/5287309.html
   *    https://blog.csdn.net/ljmkmnkl/article/details/62217186
   *    https://blog.csdn.net/xuexizhe88/article/details/80566552
   *
   *  2.需求：字体 组件尺寸保持比例适配
   *    1.根据屏幕尺寸保持比例适配，不出现布局问题；
   *    2.根据屏幕尺寸自动调整布局，实现PC与手机端的自动适配；
   *
   *  3.方案
   *  blog
   *    https://www.w3cplus.com/css/vw-for-layout.html
   *
   *  4.评价指标
   *    方案  适配度   标注方便  字体    1px-issue  性能
   *    rem  完美适配  标注方便  等比例  1px-issue
   *    vw   完美适配  转换      等比例  1px-issue
   *    px   低适配    标注方便  固定    1px-issue
   *    %
   *
   *  移动适配主要问题：
   *  issue#1:1px问题
   *    https://www.w3cplus.com/css/vw-for-layout.html
   */
  mounted: function () {
    console.log('mounted')
    this.width = document.body.clientWidth
    this.height = document.body.clientHeight
  },
  destroyed: function () {
    // console.log('destroyed')
  }
}
</script>

<style scoped>
  .sa-test-container {
    width: 100px;
    height: 100px;
    background: darkkhaki;
  }
</style>
