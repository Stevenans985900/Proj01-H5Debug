<template>
  <div class="zz-page">
    <div>
      <!-- APP H5页面适配方案1 -->
      <!-- 固定头部 + 滚动body + 固定底部 -->
      <header class="rs-head-box">Title</header>
      <div class="rs-body-box">
        <div v-for="(item,index) in rsList1" :key="index" :item="item" class="rs-body-item"
             :class="{ 'rs-color0': index % 2 === 0,'rs-color1': index % 2 === 1 }">{{index}}
        </div>
      </div>
      <footer class="rs-footer-box">Fixed Footer</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemScene',
  data () {
    return {
      rsList1: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  }
}

/**
 * Rem init
 */
function pageInit () {
  let remSum = 10.0

  function adjustFontRem (ev) {
    console.log('adjustFontRem ' + ev)
    document.documentElement.style.fontSize = document.body.offsetWidth / remSum + 'px'
    console.log(document.documentElement.style.fontSize)
    console.log('devicePixelRatio ' + window.devicePixelRatio)
  }

  window.addEventListener('resize', adjustFontRem)
  window.addEventListener('load', adjustFontRem)
}

pageInit()
</script>

<style scoped>
  .rs-color0 {
    background: burlywood;
  }

  .rs-color1 {
    background: mediumseagreen;
  }

  .rs-head-box {
    position: fixed;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    top: 0;
    background: darkseagreen;
  }

  .rs-body-box {
    position: fixed;
    width: 100%;
    overflow-y: scroll;
    top: 1rem;
    bottom: 1rem;
    background: goldenrod;
  }

  .rs-body-item {
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border: dodgerblue solid 0.01rem;
  }

  .rs-footer-box {
    position: fixed;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    bottom: 0;
    background: darkgreen;
  }
</style>
