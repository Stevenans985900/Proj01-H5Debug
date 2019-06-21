<template>
  <div class="zz-page">
    <MathRandom></MathRandom>
  </div>
</template>

<script>
import MathRandom from './math/random/MathRandom'

// javascript base feature test
export default {
  name: 'BaseIndex',
  components: {MathRandom},
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
