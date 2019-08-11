<template>
  <div class="zz-page cur-page">
    <!-- 1.文本禁止选择 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.文本禁止选择</div>
      <div class="text-no-select">
        层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）
        或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，
        还可以配合各种脚本语言动态地对网页各元素进行格式化。
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox'

export default {
  name: 'TextGeneral',
  components: {ZZBorderBox},
  /**
   * CSS文本测试
   * ref:
   * ---空格
   */
  mounted () {
  }
}
</script>

<style scoped>
  @import "./../../../../common/css/common.css";

  .cur-page {
    font-size: 0.30rem;
  }
</style>
