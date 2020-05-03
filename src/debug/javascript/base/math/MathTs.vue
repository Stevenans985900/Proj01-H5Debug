<template>
  <div>
  </div>
</template>

<script>
/**
 * H5工程@HTML/label
 * ---
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see tsMath.tsScene01
 *
 * USE
 * u01.取整
 * @see tsMath.useScene01
 * u02.使用场景02
 * @see tsMath.useScene02
 *
 * Issue
 * i01.问答场景01
 * @see tsMath.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/js/math/ts
 */

const tsMath = {
  /**
   * API场景01
   */
  tsScene01 () {
    console.warn('tsScene01')
  },
  /**
   * 使用场景01
   * --- Math常用方法
   * --- https://www.jianshu.com/p/a93bd02d9eb7
   */
  useScene01 () {
    console.warn('useScene01')
    // 只保留整数部分（丢弃小数部分）
    console.log(parseInt(5.1234)) // 5
    // 向下取整（<= 该数值的最大整数，和parseInt()一样)
    console.log(Math.floor(5.1234)) // 5
    // 向上取整（有小数，整数部分就+1）
    console.log(Math.ceil(5.1234)) // 6
    // 四舍五入（小数部分）
    console.log(Math.round(5.1234)) // 5
    // 取绝对值
    console.log(Math.abs(-1)) // 1
    // 返回两数中的较大者
    console.log(Math.max(1, 2))
    // 返回两数中的较小者
    console.log(Math.min(1, 2))
    // 随机数（0-1）
    console.log(Math.random())
  },
  /**
   * 问答场景01
   */
  ivScene01 () {
    console.warn('ivScene01')
  }
}

export default {
  name: 'MathTs',
  data () {
    return {}
  },
  methods: tsMath,
  mounted () {
    this.useScene01()
  }
}
</script>

<style scoped lang="scss">

</style>
