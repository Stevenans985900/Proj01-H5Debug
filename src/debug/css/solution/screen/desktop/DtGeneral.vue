<template>
  <div class="zz-page">
    <div class="qr-box">
      <div class="qr-left-box">box1</div>
      <div class="qr-right-box">box2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DtGeneral',
  components: {},
  data () {
    return {
      title: ''
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * 桌面平台适配方案
   * 适配方式：比例 + 最小宽度 + 居中
   * 1.案例
   * ---淘宝、导航网站、主流网页
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
  .qr-box {
    width: 80%;
    min-width: 1000px;
    margin-left: 10%;
    background: darkseagreen;
  }

  .qr-left-box {
    float: left;
    display: inline-block;
    width: 50%;
    height: 100px;
    background: #CCC;
  }

  .qr-right-box {
    float: left;
    display: inline-block;
    width: 50%;
    height: 100px;
    background: #999;
  }

</style>
