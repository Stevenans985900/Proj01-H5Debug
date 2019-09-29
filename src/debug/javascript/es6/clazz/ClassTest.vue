<template>
  <div class="zz-page">
    js es6 class
  </div>
</template>

<script>
/**
 * H5工程@class/base
 * ---
 *
 * ref
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes
 * --- http://es6.ruanyifeng.com/#docs/class
 * --- http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html
 * ---优质博客
 * ---框架
 *
 * 场景归类
 * 1.NG
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/js/es6/class/base
 */
export default {
  name: 'ClassTest',
  mounted () {
    console.log('mounted')

    // ECMAScript2015定义使用class定义类
    class Rectangle {
      constructor (height, width) {
        this.height = height
        this.width = width
      }
    }
    const square0 = new Rectangle(1, 2)
    const square1 = new Rectangle(3, 4)
    console.log(square0.height)
    console.log(square1.height)
  }
}
</script>

<style scoped>

</style>
