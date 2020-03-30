<template>
  <div class="zbb-border-box" :style="boxStyle">
    <div v-if="title" class="zbb-title" :style="titleStyle">{{title}}</div>
    <slot name="title"></slot>
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
  props: {
    title: { // 标题
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '2rem'
    },
    marginBottom: {
      type: String,
      default: '0.5rem'
    },
    borderWidth: {
      type: String,
      default: '0.1rem'
    },
    borderColor: {
      type: String,
      default: '#F9F9F9'
    },
    borderColorMode: {
      type: String,
      default: 'random'
    }
  },
  data () {
    return {
      color: '#F9F9F9', // 颜色
      boxStyle: {},
      titleStyle: {
      }
    }
  },
  computed: {
    getBoxStyle () {
      return {
        height: this.height,
        marginBottom: this.marginBottom,
        border: this.color + ' ' + this.borderWidth + ' solid'
      }
    },
    getTitleStyle () {
      return {
        color: this.color,
        borderBottom: this.color + ' solid 1px'
      }
    }
  },
  methods: {
    // 获取随机颜色
    getRandomColor () {
      let color = (Math.random() * 0xffffff << 0).toString(16)
      while (color.length < 6) {
        color = '0' + color
      }
      return '#' + color
    }
  },
  created () {
    if (this.borderColorMode === 'random') {
      this.color = this.getRandomColor()
    } else {
      this.color = this.borderColor
    }
    // ！二级数据需要手动更新
    this.boxStyle = this.getBoxStyle
    this.titleStyle = this.getTitleStyle
  },
  beforeMount () {
  },
  /**
   * modify elm style
   */
  mounted () {
  }
}
</script>

<style scoped>
  .zbb-border-box {
    display: block;
  }

  .zbb-title {
    line-height: 30px;
    font-weight: bold;
  }
</style>
