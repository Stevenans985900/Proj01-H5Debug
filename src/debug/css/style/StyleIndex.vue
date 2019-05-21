<template>
    <div class="zz-page">
      <GeneralLayout></GeneralLayout>
    </div>
</template>

<script>
// style@position定位
// 基本定位布局样式
import GeneralLayout from './layout/GeneralLayout'
export default {
  name: 'StyleIndex',
  components: {GeneralLayout},
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
