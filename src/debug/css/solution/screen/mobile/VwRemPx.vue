<template>
  <div class="zz-page">
    <div class="px-elm">px</div>
    <div class="rem-elm">rem</div>
    <div class="vw-elm">vw</div>
  </div>
</template>

<script>
export default {
  name: 'VwRemPx',
  /**
   * rem&vw&px
   * ---px desktop
   * ---rem low version device
   * ---vw >=android 4.4
   * ref:
   * ---
   * issue:
   * #1.rem on some device display error(SAMSung);
   * ---https://www.jianshu.com/p/8300a5ec6480
   * ---https://blog.csdn.net/u013778905/article/details/77972841
   */
  mounted () {
  }
}
</script>

<style scoped>
  .px-elm {
    width: 100px;
    height: 50px;
    background: goldenrod;
  }

  .rem-elm {
    width: 5rem;
    height: 1rem;
    background: greenyellow;
  }

  .vw-elm {
    width: 50vw;
    height: 10vw;
    background: blue;
  }
</style>
