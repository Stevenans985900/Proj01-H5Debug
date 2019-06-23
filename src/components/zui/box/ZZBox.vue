<template>
  <div class="zb-box" :class="boxClazz" :style="boxStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  /**
   * ZZBox/盒子布局组件
   * feature:
   * #1.支持盒子布局模型
   */
  name: 'ZZBox',
  /**
   * 组件定制参数
   * width：组件宽度
   * height：组件高度
   * top：上
   * bottom：下
   */
  props: ['width', 'height', 'margin', 'padding'],
  data () {
    return {
      boxClazz: {
      },
      boxStyle: {
        width: this.width ? this.width : 'auto',
        height: this.height ? this.height : 'auto',
        margin: this.margin ? this.margin : 'auto',
        padding: this.padding ? this.padding : 'auto'
      }
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
  .zb-box {
    box-sizing: border-box;
  }
</style>
