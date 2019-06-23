<template>
  <div class="zz-page">
    <ImageSrc></ImageSrc>
  </div>
</template>

<script>
// HTML标签测试
// -DIV标签
import DivTest from './div/DivTest'
// -DIV标签元素(Element)属性
import DivElementProps from './div/DivElementProps'
// -<textarea> 标签测试
import TextareaTest from './textarea/TextareaTest'
import ImageSrc from './image/ImageSrc'

export default {
  name: 'LabelIndex',
  components: {ImageSrc, TextareaTest, DivTest, DivElementProps},
  /**
   * Router
   * ---http://localhost:8800/#/html/label
   */
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
