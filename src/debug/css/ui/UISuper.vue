<template>
  <div class="zz-page">
    <SimpleTitle :title="'移动UI框架'"></SimpleTitle>
    <!-- 1.VUX -->
    <ZZBorderBox :height="'1.2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.VUX</div>
      <div class="uis-str-sty1">
        https://github.com/airyland/vux
      </div>
    </ZZBorderBox>
    <!-- 2.Vonic -->
    <ZZBorderBox :height="'1.2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">2.Vonic</div>
      <div class="uis-str-sty1">
        https://github.com/wangdahoo/vonic
      </div>
    </ZZBorderBox>
    <!-- 3.Mint-ui -->
    <ZZBorderBox :height="'1.2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">3.Mint-ui</div>
      <div class="uis-str-sty1">
        https://github.com/ElemeFE/mint-ui
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
import SimpleTitle from '../../../components/zui/title/SimpleTitle'
import ZZBorderBox from '../../../components/zui/box/ZZBorderBox/ZZBorderBox'
/**
 * H5工程@CSS/ui/super
 * ---WEB frontend
 * ---element
 * --- https://github.com/ElemeFE/element
 * ---iview
 * --- https://github.com/iview/iview
 *
 * @VueDebug /src/debug/frame
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
 * --- http://localhost:8800/#/css/ui/super
 *
 * Ref:
 * ---
 */
export default {
  name: 'UISuper',
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
     * API场景06
     * cube-ui
     * --- https://github.com/didi/cube-ui
     */
    tsScene06 () {
      console.warn('tsScene06')
    },
    /**
     * API场景05
     * muse-ui
     * --- https://github.com/museui/muse-ui
     */
    tsScene05 () {
      console.warn('tsScene05')
    },
    /**
     * API场景04
     * Vant
     * --- https://github.com/youzan/vant
     */
    tsScene04 () {
      console.warn('tsScene04')
    },
    /**
     * API场景03
     * Mint-ui
     * --- https://github.com/ElemeFE/mint-ui
     */
    tsScene03 () {
      console.warn('tsScene03')
    },
    /**
     * API场景02
     * Vonic
     * --- https://github.com/wangdahoo/vonic
     */
    tsScene02 () {
      console.warn('tsScene02')
    },
    /**
     * API场景01
     * VUX
     * --- https://github.com/airyland/vux
     */
    tsScene01 () {
      console.warn('tsScene01')
    },

    /**
     * 使用场景05
     * color-ui
     * --- http://demo.color-ui.com
     */
    useScene05 () {
      console.warn('useScene05')
    },
    /**
     * 使用场景04
     * frozenUI
     * --- http://frozenui.github.io/
     */
    useScene04 () {
      console.warn('useScene04')
    },
    /**
     * 使用场景03
     * uni
     * --- https://uniapp.dcloud.io/
     */
    useScene03 () {
      console.warn('useScene03')
    },
    /**
     * 使用场景02
     * weui
     * --- https://github.com/Tencent/weui
     */
    useScene02 () {
      console.warn('useScene02')
    },
    /**
     * 使用场景01
     * MUI
     * --- https://github.com/dcloudio/mui
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
  .uis-str-sty1 {
    margin-left: 0.3rem;
  }
</style>
