<template>
  <div class="zz-page">
    MathRandom
  </div>
</template>

<script>
export default {
  name: 'MathRandom',
  /**
   * js生成随机数
   * ref
   * https://www.cnblogs.com/starof/p/4988516.html
   * https://www.runoob.com/w3cnote/js-random.html
   */
  mounted () {
    console.log(Math.random())
  }
}
</script>

<style scoped>

</style>
