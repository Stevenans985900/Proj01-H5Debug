<template>
  <div class="zz-page">
    <SimpleTitle :title="'移动H5 1px问题'"></SimpleTitle>
    <!-- 1.字符串模板 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.String</div>
      <div class="op-str-sty1">
        String
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
import SimpleTitle from '../../../../components/zui/title/SimpleTitle'
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox'
/**
 * H5工程@HTML/label
 * ---
 *
 * ref
 * ---原生API
 * ---优质博客
 * --- https://www.cnblogs.com/lunarorbitx/p/5287309.html
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
 * --- http://localhost:8800/#/css/solution/1px
 *
 * Ref:
 * ---
 */
export default {
  name: 'OnePX',
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
  .op-str-sty1 {
  }
</style>
