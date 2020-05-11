<template>
  <Flexbox justify="center" class="zz-page">
    <span style="color: #9C9C9C;">
      您访问的页面不存在，即将跳转主页 {{downTimer}}秒
    </span>
  </Flexbox>
</template>

<script>
import {Flexbox} from 'vux'

export default {
  name: 'E404',
  components: {Flexbox},
  data () {
    return {
      downTimer: 3
    }
  },
  mounted () {
    const timer = setInterval(() => {
      if (this.downTimer > 0) {
        this.downTimer--
      } else {
        clearInterval(timer)
        this.$router.replace('/z')
      }
    }, 1000)
  }
}
</script>

<style scoped lang="scss">

</style>
