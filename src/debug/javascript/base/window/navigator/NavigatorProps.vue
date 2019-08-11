<template>
    <div class="zz-page">
      NavigatorProps
    </div>
</template>

<script>
export default {
  name: 'NavigatorProps',
  /**
   * window.navigator
   * ref:
   * ---https://www.cnblogs.com/muscleape/p/6897356.html
   * ---https://www.cnblogs.com/xdp-gacl/p/3926848.html
   * ---https://blog.csdn.net/u012762221/article/details/80419331
   * ---http://blog.sina.com.cn/s/blog_6911cf140102wol1.html
   */
  mounted () {
    console.warn(window.navigator)
    console.log(window.navigator.userAgent)
  }
}
</script>

<style scoped>

</style>
