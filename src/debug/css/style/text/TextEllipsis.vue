<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'"
                   :title="'5.span单行省略'">
      <div class="te-ts5">
        <span class="ts5-tv text-ellipse">
          层叠样式表(英文全称：Cascading Style Sheets)
        </span>
      </div>
    </zz-border-box>
    <!-- 1.单行省略用法 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.单行省略用法</div>
      <div class="tet-ellipse-sty1">
        层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）
        或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，
        还可以配合各种脚本语言动态地对网页各元素进行格式化。
      </div>
    </ZZBorderBox>
    <!-- 2.2行省略用法 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.2行省略用法</div>
      <div class="tet-ellipse-sty2">
        层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）
        或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，
        还可以配合各种脚本语言动态地对网页各元素进行格式化。
      </div>
    </ZZBorderBox>
    <!-- 3.多行省略用法 -->
    <ZZBorderBox :height="'3rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">3.多行省略用法</div>
      <div class="tet-ellipse-sty3">
        层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）
        或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，
        还可以配合各种脚本语言动态地对网页各元素进行格式化。
      </div>
    </ZZBorderBox>
    <!-- 4.多行省略用法 -->
    <ZZBorderBox :height="'2.5rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">4.多行省略用法</div>
      <div class="tet-ellipse-sty4">
        层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）
        或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，
        还可以配合各种脚本语言动态地对网页各元素进行格式化。
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
/**
 * CSS文本省略
 *
 *
 * ref
 * ---原生API
 * ---优质博客
 * --- https://www.cnblogs.com/xiaosuibu/p/8196067.html
 * --- https://blog.csdn.net/github_38928905/article/details/81127492
 * ---http://www.divcss5.com/rumen/r532.shtml
 * ---https://www.cnblogs.com/wetest/p/7365676.html
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/css/style/text/ellipsis
 */
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox/ZZBorderBox'

export default {
  name: 'TextEllipsis',
  components: {ZZBorderBox},
  mounted () {
  }
}
</script>

<style scoped lang="scss">
 @import "text-ellipsis.scss";
</style>
