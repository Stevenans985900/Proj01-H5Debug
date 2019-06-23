<template>
  <div class="zfb-fixed-box" :class="boxClazz" :style="boxStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  /**
   * ZZFixedBox/Fixed布局组件
   * feature:
   * #1.支持固定布局模型
   */
  name: 'ZZFixedBox',
  /**
   * 组件定制参数
   * width：组件宽度
   * height：组件高度
   * top：上
   * bottom：下
   */
  props: ['width', 'height', 'top', 'bottom'],
  data () {
    return {
      boxClazz: {
      },
      boxStyle: {
        width: this.width ? this.width : 'auto',
        height: this.height ? this.height : 'auto',
        top: this.top ? this.top : 'auto',
        bottom: this.bottom ? this.bottom : 'auto'
      }
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
  .zfb-fixed-box {
    position: fixed;
  }
</style>
