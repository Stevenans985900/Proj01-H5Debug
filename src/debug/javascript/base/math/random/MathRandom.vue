<template>
  <div class="zz-page">
    MathRandom
  </div>
</template>

<script>
export default {
  name: 'MathRandom',
  // Math.ceil();  //向上取整。
  // Math.floor();  //向下取整。
  // Math.round();  //四舍五入。
  // Math.random();  //0.0 ~ 1.0 之间的一个伪随机数。【包含0不包含1】 //比如0.8647578968666494
  // Math.ceil(Math.random()*10);      // 获取从1到10的随机整数 ，取0的概率极小。
  // Math.round(Math.random());   //可均衡获取0到1的随机整数。
  // Math.floor(Math.random()*10);  //可均衡获取0到9的随机整数。
  // Math.round(Math.random()*10);  //基本均衡获取0到10的随机整数，其中获取最小值0和最大值10的几率少一半。
  /**
   * js生成随机数
   * ref
   * https://www.jb51.net/article/138648.htm
   * https://www.jb51.net/article/69591.htm
   * https://www.runoob.com/w3cnote/js-random.html
   * https://www.cnblogs.com/starof/p/4988516.html
   *
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
