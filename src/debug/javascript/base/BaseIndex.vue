<template>
  <div class="zz-page">
    <NavigatorProps></NavigatorProps>
  </div>
</template>

<script>
import MathRandom from './math/random/MathRandom'
import NavigatorProps from './window/navigator/NavigatorProps'

// javascript base feature test
export default {
  name: 'BaseIndex',
  components: {NavigatorProps, MathRandom},
  /**
   * Router
   * ---http://localhost:8800/#/js/base
   */
  mounted () {
  }
}
</script>

<style scoped>

</style>
