<template>
  <div class="zz-page tg-main-box">
    <!-- 1.文本基础属性 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.文本基础属性</div>
      <div class="text-basic-sty1">
        The color property is used to set the color of the text.
      </div>
    </ZZBorderBox>
    <!-- 2.文本基础属性-多行 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">2.文本基础属性</div>
      <div class="text-basic-sty2">
        层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）
        或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，
        还可以配合各种脚本语言动态地对网页各元素进行格式化。
      </div>
    </ZZBorderBox>
    <!-- 3.文本禁止选择 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">3.文本禁止选择</div>
      <div class="text-no-select">
        层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）
        或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，
        还可以配合各种脚本语言动态地对网页各元素进行格式化。
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
 * s01.颜色(color)：支持RGB，HEX，'颜色'
 * s02.对齐方式(text-align)：left/right/center/justify
 * s03.文本装饰(text-decoration)：overline/underline/line-through
 * s04.文本转换(text-transform)：大写(uppercase)/小写(lowercase)
 * s05.首行文本缩进(text-indent)
 * s06.字符间隔(letter-spacing)
 * s07.行高(line-height)、高(height)、文本方向(direction)、背影效果(text-shadow)
 * --- http://www.divcss5.com/rumen/r129.shtml
 * u01.文本禁止选择
 * u02.文本字符转义(空格)
 * u03.文本省略
 * u04.文本对齐
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/css/style/text/general
 */
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox'

export default {
  name: 'TextGeneral',
  components: {ZZBorderBox},
  mounted () {
  }
}
</script>

<style scoped>
  @import "./../../../../common/css/common.css";

  .tg-main-box {
    font-size: 0.30rem;
  }

  .text-basic-sty1 {
    color: gold;
    text-align: right;
    text-decoration: line-through;
    font-size: 0.32rem;
  }

  .text-basic-sty2 {
    text-indent: 5vw;
    text-shadow: 1px 1px red;
  }
</style>
