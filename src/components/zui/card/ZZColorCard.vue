<template>
  <div ref="zccElm" class="zcc-color-box" :style="cardStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  /**
   * ZZColorCard/颜色卡组件
   * feature:
   * #1.支持随机生成颜色
   */
  name: 'ZZColorCard',
  /**
   * 组件定制参数
   * bkColorMode：颜色模式，优先级高
   * ---random模式: 背景颜色随机生成
   */
  props: ['width', 'height', 'bkColorMode'],
  data () {
    return {
      cardStyle: {
        width: this.width ? this.width : '1rem',
        height: this.height ? this.height : '1rem',
        lineHeight: this.height ? this.height : '1rem',
        background: this.bkColorMode === 'random' ? '#' + (Math.random() * 0xffffff << 0).toString(16) : ''
      }
    }
  },
  computed: {},
  mounted () {
  }
}
</script>

<style scoped>
  .zcc-color-box {
    display: inline-block;
  }
</style>
