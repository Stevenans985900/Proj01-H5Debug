<template>
  <div class="zz-page">
    <div>CSS selector</div>
    <div class="cs-root">
      <div id="csRootChild1"></div>
      <p>PPP1</p>
      <p>PPP2</p>
      <div options="select" style="height: 10px;"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
/**
 * H5工程@css/selector
 *
 * 性能
 * ---执行顺序
 * --- 样式系统从最右边的选择符开始向左进行匹配规则。只要当前选择符的左边还有其他选择符，样式系统就会继续向左移动，
 * --- 直到找到和规则匹配的元素，或者因为不匹配而退出。
 * --- https://www.cnblogs.com/aaronjs/p/3156809.html
 * ---搜索次数
 * ---优先级
 * --- 比较同一级别的个数，数量多的优先级高，如果相同即比较下一级别的个数
 * --- important > 内联 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符 通配符 > 继承
 * --- https://www.cnblogs.com/aaronjs/p/3156809.html
 * ---其他
 * --- https://www.zhihu.com/question/265827619
 * --- https://www.cnblogs.com/HeavenBin/p/7398738.html
 搜索个数从少到多的排序：
 1.id选择器（#myid）
 2.类选择器（.myclassname）
 3.标签选择器（div,h1,p）
 4.相邻选择器（h1+p）
 5.子选择器（ul < li）
 6.后代选择器（li a）
 7.通配符选择器（*）
 8.属性选择器（a[rel="external"]）
 9.伪类选择器（a:hover,li:nth-child）
 *
 * 选择器使用原则：
 * ---不违反大的规则，优先使用性能高的选择器
 * ---
 *
 * ref:
 * --- https://www.zhihu.com/question/265827619
 * --- https://www.runoob.com/cssref/css-selectors.html
 *
 * issue
 * #1.div p 和 div>p 有什么区别？
 * --- https://www.runoob.com/note/13493
 *
 * Router
 * --- http://localhost:8800/#/css/selector
 */

export default {
  name: 'basic'
}
</script>

<style scoped lang="scss">
  @import "CssSelector.scss";
</style>
