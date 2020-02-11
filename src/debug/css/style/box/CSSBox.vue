<template>
  <div class="zz-page">
    <SimpleTitle :title="'CSS box model'"></SimpleTitle>
    <!-- 1.CSS盒子-默认 -->
    <ZZBorderBox :height="'4rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.CSS盒子-默认</div>
      <div class="cb-str-sty1">
        <div class="cb-str-sty1-inner">CSS默认盒子</div>
      </div>
    </ZZBorderBox>

    <!-- 2.CSS盒子-box-sizing: content-box -->
    <ZZBorderBox :height="'4rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">2.CSS盒子-box-sizing: content-box</div>
      <div class="cb-str-sty2">
        <div class="cb-str-sty2-inner">CSS content-box 盒子</div>
      </div>
    </ZZBorderBox>

    <!-- 3.CSS盒子-box-sizing: border-box -->
    <ZZBorderBox :height="'4rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">3.CSS盒子-box-sizing: border-box</div>
      <div class="cb-str-sty3">
        <div class="cb-str-sty3-inner">CSS border-box 盒子</div>
      </div>
    </ZZBorderBox>

    <!-- 4.CSS盒子-页面100%宽度场景 -->
    <!-- 设置width为100%或固定值box-sizing有效，auto宽度的box-sizing是border-box -->
    <!-- width && box-sizing ? box-sizing -->
    <!-- width ? content-box -->
    <!-- auto && box-sizing ? border-box -->
    <!-- auto ? border-box -->
    <ZZBorderBox :height="'4rem'" :marginBottom="'0.5rem'" :borderWidth="'0rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">4.CSS盒子-页面100%宽度场景</div>
      <div class="cb-str-sty4">
        <div class="cb-str-sty4-inner">CSS border-box 盒子</div>
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
import SimpleTitle from '../../../../components/zui/title/SimpleTitle'
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox'
/**
 * H5工程@CSS/box/css-box
 * ---
 *
 * ref
 * ---原生API
 * --- https://www.w3schools.com/css/css_boxmodel.asp
 * --- https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
 * --- https://www.w3schools.com/css/css3_box-sizing.asp
 * --- zh
 * --- https://www.runoob.com/css/css-boxmodel.html
 * ---优质博客
 * --- https://www.cnblogs.com/qianguyihao/p/7256371.html
 * ---框架
 *
 * 1.盒子组成
   Margin(外边距) - 清除边框外的区域，外边距是透明的。
   Border(边框) - 围绕在内边距和内容外的边框。
   Padding(内边距) - 清除内容周围的区域，内边距是透明的。
   Content(内容) - 盒子的内容，显示文本和图像。
 * 2.盒子总宽高
   最终元素的总宽度计算公式是这样的：
   总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距
   元素的总高度最终计算公式是这样的：
   总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距
 * 3.box-sizing
   content-box
     width = 内容的宽度
     height = 内容的高度
   border-box
     width = border + padding + 内容的宽度
     height = border + padding + 内容的高度
 * 场景归类
 * API
 * s01.API场景01
 * USE
 * u01.使用场景01
 * Issue
 * i01.问答场景01
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/css/style/box/css-box
 *
 * Ref:
 * ---
 */
export default {
  name: 'CSSBox',
  components: {ZZBorderBox, SimpleTitle},
  created () {
  },
  mounted () {
    this.tsScene01()
    // this.useScene01()
    // this.ivScene01()
  },
  methods: {
    /**
     * API场景01
     */
    tsScene01 () {
      console.warn('tsScene01')
    },
    /**
     * 使用场景01
     */
    useScene01 () {
      console.warn('useScene01')
    },
    /**
     * 问答场景01
     */
    ivScene01 () {
      console.warn('ivScene01')
    }
  }
}
</script>

<style scoped>
  .cb-str-sty1 {
    width: 5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border: #FFA500 solid 0.2rem;
    background: #FFC0CB;
  }

  .cb-str-sty1-inner{
    width: 5rem;
    height: 1rem;
    background: green;
  }

  .cb-str-sty2 {
    box-sizing: content-box;
    width: 5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border: #FFA500 solid 0.2rem;
    background: #FFC0CB;
  }

  .cb-str-sty2-inner{
    width: 5rem;
    height: 1rem;
    background: green;
  }

  .cb-str-sty3 {
    box-sizing: border-box;
    width: 5rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border: #FFA500 solid 0.2rem;
    background: #FFC0CB;
  }

  .cb-str-sty3-inner{
    width: 5rem;
    height: 1rem;
    background: green;
  }

  .cb-str-sty4 {
    box-sizing: border-box;
    /*box-sizing: content-box;*/
    width: 100%;
    padding: 0.5rem;
    border: #FFA500 solid 0.2rem;
    background: #FFC0CB;
  }

  .cb-str-sty4-inner{
    width: 5rem;
    height: 1rem;
    background: green;
  }
</style>
