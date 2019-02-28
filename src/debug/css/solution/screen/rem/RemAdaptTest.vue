<template>
  <div class="zz-page">
    <div style="font-size: 0.15rem;">{{title}}</div>
    <div style="width: 5.4rem;height: 1rem;background: gold;font-size: 0.15rem;">REM</div>
  </div>
</template>

<script>
export default {
  name: 'RemAdaptTest',
  components: {},
  data () {
    return {
      title: 'RemAdaptTest'
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * Screen adaptation solution rem
   * rem em:
   *    rem  Relative to font-size of the root element
   *    em  Relative to the font-size of the element (2em means 2 times the size of the current font)
   *
   * docs
   *  https://www.w3schools.com/cssref/css_units.asp
   *  blog:
   *    https://www.zhihu.com/question/21504656
   * Can i use:
   *  https://caniuse.com/#search=rem
   *  Android: >= 2.1
   *  IE: >= 9.0
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
<style>
  /*html,body {*/
    /*font-size: 192px !important;*/
  /*}*/
</style>
