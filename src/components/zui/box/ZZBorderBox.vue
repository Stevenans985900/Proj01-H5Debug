<template>
  <div ref="zbbElm" class="zbb-border-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZZBorderBox',
  /**
   * 组件定制参数
   * height：组件高度
   * marginBottom：底部距离
   * borderWidth：border宽度
   * borderColor：border color
   * borderColorMode：border颜色模式，优先级高
   * ---random模式: border颜色随机生成
   */
  props: ['height', 'marginBottom', 'borderWidth', 'borderColor', 'borderColorMode'],
  beforeMount () {
  },
  /**
   * modify elm style
   */
  mounted () {
    // height
    if (this.height) {
      this.$refs.zbbElm.style.height = this.height
    }
    // marginBottom
    if (this.marginBottom) {
      this.$refs.zbbElm.style.marginBottom = this.marginBottom
    }
    // borderColor
    if (!this.borderWidth) {
      this.borderWidth = '0.1rem'
    }
    if (this.borderColorMode === 'random') {
      let borderColor = (Math.random() * 0xffffff << 0).toString(16)
      while (borderColor.length < 6) {
        borderColor = '0' + borderColor
      }
      let borderSty = '#' + borderColor + ' ' + this.borderWidth + ' solid'
      // console.log(borderSty)
      this.$refs.zbbElm.style.border = borderSty
    } else if (this.borderColor) {
      this.$refs.zbbElm.style.border = this.borderColor + ' ' + this.borderWidth + ' solid'
    }
  }
}
</script>

<style scoped>
  .zbb-border-box {
    display: block;
  }
</style>
