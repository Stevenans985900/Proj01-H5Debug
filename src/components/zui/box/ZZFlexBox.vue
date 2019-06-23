<template>
  <div ref="zfbElm" class="zfb-flex-box" :class="boxClazz" :style="boxStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  /**
   * ZZFlexBox/Flex布局组件
   * feature:
   * #1.支持各种普通布局模型
   */
  name: 'ZZFlexBox',
  /**
   * 组件定制参数
   * width：组件宽度
   * height：组件高度
   * flexMode：flex模式
   * ---flow: 流式布局，行满自动换行
   * ---center: 垂直-居中
   */
  props: ['width', 'height', 'flexMode'],
  data () {
    return {
      boxClazz: {
        'zfb-flex-wrap': this.flexMode === 'flow',
        'zfb-flex-center': this.flexMode === 'center'
      },
      boxStyle: {
        width: this.width ? this.width : 'auto',
        height: this.height ? this.height : 'auto'
      }
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
  .zfb-flex-box {
    width: inherit;
    display: flex;
  }

  /* flexMode flow */
  .zfb-flex-wrap {
    flex-wrap: wrap;
  }

  /* flexMode flow */
  .zfb-flex-center {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
