<template>
  <div class="zz-page">
    <ThreejsDemo>
    </ThreejsDemo>
  </div>
</template>

<script>
/**
 * three
 * ---https://threejs.org/
 * -npm
 * ---https://github.com/mrdoob/three.js
 * --- npm install three
 * ---https://github.com/mrdoob/stats.js
 * --- npm install stats.js
 *
 * issue
 * #1.VUE加载性能问题：examples/webgl_buffergeometry_uint.html
 *
 * Router
 * --- http://localhost:8800/#/js/frame/three
 */
import ThreejsDemo from './test/ThreejsDemo'
export default {
  name: 'LabelIndex',
  components: {ThreejsDemo},
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
