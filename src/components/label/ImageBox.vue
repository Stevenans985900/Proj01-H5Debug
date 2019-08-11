<template>
  <div ref="ib0Box" class="ib0-box" :style="boxStyle">
    <img class="ib0-img" :src="params.imgSrc"/>
  </div>
</template>

<script>
/**
 * ImageBox/封装img标签
 * feature:
 * #1.支持base64/SVG/PNG加载
 */
export default {
  name: 'ImageBox',
  props: ['params'],
  data () {
    return {
      boxStyle: {
        width: this.params.width ? this.params.width : 'auto',
        height: this.params.height ? this.params.height : 'auto'
      }
    }
  },
  mounted () {
    if (this.params.imageType === 'svgStr') {
      this.$refs.ib0Box.innerHTML = this.params.imgSvgSrc
    }
  }
}
</script>

<style scoped>
  .ib0-box {
  }

  .ib0-img {
    width: 100%;
    height: 100%;
  }
</style>
