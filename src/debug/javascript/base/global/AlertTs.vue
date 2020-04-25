<template>
  <div class="zz-page">
    alert
  </div>
</template>

<script>
/**
 * js/alert
 * --- 确认
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see alertTs.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see alertTs.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see alertTs.ivScene01
 *
 * ref:
 * --- https://developer.mozilla.org/zh-CN/docs/Web/API/Window/alert
 * ---BLOG
 * --- https://www.w3school.com.cn/jsref/met_win_alert.asp
 *
 * issue
 * #1.
 * ---
 *
 * Router
 * --- http://localhost:8800/#/js/global/alert
 */

const alertTs = {
  /**
   * API场景03
   */
  tsScene03 () {
    console.warn('tsScene03')

    // https://www.cnblogs.com/sangzs/p/8615908.html
    let res = prompt('输入你的名字：', '默认名字')
    alert(res)
  },
  /**
   * API场景02
   */
  tsScene02 () {
    console.warn('tsScene02')

    // https://blog.csdn.net/henu1710252658/article/details/80043747
    const a = confirm('是否进行下一题！')
    if (a) {
      alert('确定')
    } else {
      alert('取消')
    }
  },

  /**
   * API场景01
   */
  tsScene01 () {
    console.warn('tsScene01')

    alert('确定')
  },

  /**
   * 使用场景01
   */
  useScene01 () {
    console.warn('useScene01')
  },
  /**
   * 问答场景01
   */
  ivScene01 () {
    console.warn('ivScene01')
  }
}

export default {
  name: 'AlertTs',
  data () {
    return {
      data1: 10
    }
  },
  methods: alertTs,
  mounted () {
    this.tsScene03()
    // this.useScene01()
    // this.ivScene01()
  }
}
</script>

<style scoped lang="scss">

</style>
