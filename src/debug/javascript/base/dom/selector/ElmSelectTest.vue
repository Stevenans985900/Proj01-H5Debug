<template>
  <div class="zz-page">
    <div class="est-box">
      <div id="divElm" class="est-div-elm"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElmSelectTest',
  methods () {

  },
  mounted () {
    console.log('mounted')
  },
  destroyed () {
  }
}
</script>

<style scoped>
  .est-box {
    width: 100%;
  }

  .est-div-elm {
    width: 300px;
    height: 300px;
    background: #1cb2ff;
  }
</style>
