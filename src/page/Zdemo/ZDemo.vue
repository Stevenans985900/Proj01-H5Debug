<template>
  <div class="zz-page">
    <SimpleTitle :title="'dev template demo'"></SimpleTitle>
    <!-- 1.字符串模板 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.String</div>
      <div class="zd-str-sty1">
        String
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
import SimpleTitle from '../../components/zui/title/SimpleTitle'
import ZZBorderBox from '../../components/zui/box/ZZBorderBox'
/**
 * H5工程@HTML/label
 * ---
 *
 * ref
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * 场景归类
 * API
 * s01.API场景01
 * USE
 * u01.使用场景01
 * Issue
 * i01.问答场景01
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/index/demo
 *
 * Ref:
 * ---
 */
export default {
  name: 'ZDemo',
  components: {ZZBorderBox, SimpleTitle},
  created () {
  },
  mounted () {
    this.tsScene01()
    // this.useScene01()
    // this.ivScene01()
  },
  methods: {
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
}
</script>

<style scoped>
  .zd-str-sty1 {
  }
</style>
