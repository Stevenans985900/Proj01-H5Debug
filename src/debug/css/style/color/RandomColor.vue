<template>
  <div class="zz-page">
    <div class="rc-card" :style="cardStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'RandomColor',
  data () {
    return {
      cardStyle: {
        background: ''
      }
    }
  },
  methods: {
    getRandomColor () {
      return '#' + (Math.random() * 0xffffff << 0).toString(16)
    }
  },
  /**
   * 随机颜色生成测试
   * ref:
   * https://www.cnblogs.com/rubylouvre/archive/2009/09/24/1572977.html
   */
  mounted () {
    this.cardStyle.background = this.getRandomColor()
  }
}
</script>

<style scoped>
  .rc-card {
    width: 2rem;
    height: 2rem;
  }
</style>
