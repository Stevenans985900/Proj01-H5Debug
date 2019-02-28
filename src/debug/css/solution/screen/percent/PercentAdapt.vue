<template>
  <div class="zz-page">
    <div>{{title}}</div>
    <!--<div style="width: 50%;height: 50%;background: gold;">-->
      <!--<div style="width: 50%;height: 50%;background: springgreen;"></div>-->
    <!--</div>-->
    <!--<div style="width: 50%;height: 100px;background: gold;">-->
      <!--<div style="width: 50%;height: 50%;background: springgreen;"></div>-->
    <!--</div>-->
    <div style="width: 100px;height: 100px;background: gold;">
      <div style="width: 50%;height: 50%;background: springgreen;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PercentAdapt',
  components: {},
  data () {
    return {
      title: 'PercentAdapt'
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * Screen adaptation solution %
   * percentage:
   *    %   relative to the parent element
   * 屏幕适配方案：% + px
   * docs
   *  https://www.w3schools.com/cssref/css_units.asp
   *  blog:
   * Can i use:
   *  https://caniuse.com/#search=
   *  Android: Support
   *  IE: Support
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
