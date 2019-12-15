<template>
  <div class="zz-page">
    <!-- 1.文本对齐属性 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.文本对齐属性</div>
      <div class="text-align-sty1">
        对齐方式(text-align)：left/right/center/justify
      </div>
    </ZZBorderBox>
    <!-- 2.span横向排列 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">2.span横向排列</div>
      <div class="text-align-sty2">
        <span class="ta-align-row" style="background: #FFC0CB;">CSS文本1</span>
        <span class="ta-align-row" style="background: #EEEEEE;">CSS文本2</span>
        <span class="ta-align-row" style="background: #00FFFF;">CSS文本3</span>
      </div>
    </ZZBorderBox>
    <!-- 3.div纵向排列 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">3.div纵向排列</div>
      <div class="text-align-sty3">
        <span style="background: #FFC0CB;display: block;">CSS文本1</span>
        <span style="background: #EEEEEE;display: block;">CSS文本2</span>
        <span style="background: #00FFFF;display: block;">CSS文本3</span>
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
/**
 * H5工程@CSS/text
 * ---
 *
 * ref
 * ---原生API
 * --- https://www.w3schools.com/css/css_text.asp
 * ---优质博客
 * ---框架
 *
 * 场景归类
 * s01.对齐方式(text-align)：left/right/center/justify
 * --- http://www.divcss5.com/rumen/r129.shtml
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/css/style/text/align
 */
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox'

export default {
  name: 'TextAlign',
  components: {ZZBorderBox}
}
</script>

<style scoped>
  .text-align-sty1 {
    color: gold;
    text-align: right;
    font-size: 0.32rem;
  }

  .text-align-sty2 {
    color: gold;
    text-align: left;
    font-size: 0;
  }

  .ta-align-row {
    /* 横向排列间距问题解决方式 */
    /* 1.使用float布局 */
    /*float: left;*/
    /* 2.父级元素字体大小设置为0，子元素字体大小设置正常值 */
    font-size: 0.32rem;
  }

  .text-align-sty3 {
    color: gold;
    text-align: left;
    font-size: 0.32rem;
  }
</style>
