<template>
  <div class="zz-page">
    <SimpleTitle :title="'1.feature 001'"></SimpleTitle>
    <!-- 1.字符串模板 -->
    <zz-border-box :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.String</div>
      <div class="zd-str-sty1">
        String
      </div>
    </zz-border-box>
    <SimpleTitle :title="'2.feature 002'"></SimpleTitle>
    <!-- 1.字符串模板 -->
    <zz-border-box :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.String</div>
      <div class="zd-str-sty1">
        String
      </div>
    </zz-border-box>
  </div>
</template>

<script>
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
 * @see Instance.methods.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see Instance.methods.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see Instance.methods.ivScene01
 *
 * issue
 * #1.NG
 *
 *
 * Ref:
 * ---
 *
 * Router
 * --- http://localhost:8800/#/ts/demo2
 */
import SimpleTitle from '../../components/zui/title/SimpleTitle'

let Instance
console.log(Instance)
export default Instance = {
  name: 'ZDemo',
  components: {SimpleTitle},
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
