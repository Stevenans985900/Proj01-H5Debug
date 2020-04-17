<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'"
                   :title="'2.'">
    </zz-border-box>
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.'">
      <div class="bd-ts1">
      </div>
    </zz-border-box>
  </div>
</template>

<script>
import SimpleTitle from '../../components/zui/title/SimpleTitle'

/**
 * H5工程@HTML/label
 * ---
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see bDemo.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see bDemo.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see bDemo.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/ts/demo1
 */

const bDemo = {
  /**
   * API场景01
   */
  tsScene01 () {
    console.warn('tsScene01')
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
  name: 'BDemo',
  components: {SimpleTitle},
  created () {
  },
  mounted () {
    this.tsScene01()
    // this.useScene01()
    // this.ivScene01()
  },
  methods: bDemo
}
</script>

<style scoped lang="scss">
  .bd-ts1 {
  }
</style>
