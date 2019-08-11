<template>
    <div class="zz-page">
      <TextGeneral></TextGeneral>
    </div>
</template>

<script>
// style@position定位
// 基本定位布局样式
import GeneralLayout from './layout/GeneralLayout'
import RandomColor from './color/RandomColor'
import TextEllipsis from './text/TextEllipsis'
import TextGeneral from './text/TextGeneral'
export default {
  name: 'StyleIndex',
  components: {TextGeneral, TextEllipsis, RandomColor, GeneralLayout},
  /**
   * Router
   * ---http://localhost:8800/#/css/style
   */
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
