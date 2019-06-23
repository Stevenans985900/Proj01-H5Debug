<template>
  <div class="zz-page">
    <!-- 1.单行省略用法 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.单行省略用法</div>
      <div class="tet-ellipse-sty1">
        层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）
        或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，
        还可以配合各种脚本语言动态地对网页各元素进行格式化。</div>
    </ZZBorderBox>
  </div>
</template>

<script>
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox'

export default {
  name: 'TextEllipsis',
  components: {ZZBorderBox},
  /**
   * CSS文本省略
   * ref:
   * ---https://blog.csdn.net/github_38928905/article/details/81127492
   * ---http://www.divcss5.com/rumen/r532.shtml
   * ---https://www.cnblogs.com/wetest/p/7365676.html
   */
  mounted () {
  }
}
</script>

<style scoped>
  .tet-ellipse-sty1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
