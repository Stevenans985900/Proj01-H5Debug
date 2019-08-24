<template>
  <div class="zz-page">
    <TestCard :title="'Q.span元素间距问题'">
      <div>
        <span style="background: #FFA500;display: inline-block;">Span01</span>
        <span style="background: #FFC0CB;display: inline-block;">Span02</span>
      </div>
      <div style="margin-top: 1vw;">
        <span style="display: block;background: #FFA500;">Span01</span>
        <span style="display: block;background: #FFC0CB;">Span02</span>
      </div>
    </TestCard>
    <TestCard :title="'S1.使用浮动布局'">
      <div style="width: 100%;">
        <span style="float: left;background: #FFA500;">Span01</span>
        <span style="float: left;background: #FFC0CB;">Span02</span>
      </div>
      <div style="margin-top: 4vw;">
        <span style="display: block;background: #FFA500;">Span01</span>
        <span style="display: block;background: #FFC0CB;">Span02</span>
      </div>
    </TestCard>
    <TestCard :title="'S2.使用flex布局'">
      <div style="width: 100%;display: flex">
        <span style="background: #FFA500;">Span01</span>
        <span style="background: #FFC0CB;">Span02</span>
      </div>
      <div style="margin-top: 1vw;">
        <span style="display: block;background: #FFA500;">Span01</span>
        <span style="display: block;background: #FFC0CB;">Span02</span>
      </div>
    </TestCard>
  </div>
</template>

<script>
import TestCard from '../../../../../components/zui/test/TestCard'

/**
 * H5工程@HTML/label/div/is01
 * ---span(inline-block)元素间距问题
 *
 * ref
 * ---原生API
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
 * --- http://localhost:8800/#/html/label/div/is01
 */
export default {
  name: 'i01DivSpan',
  components: {TestCard}
}
</script>

<style lang="less" scoped>
  @import "../../../../../common/css/theme.less";
</style>
