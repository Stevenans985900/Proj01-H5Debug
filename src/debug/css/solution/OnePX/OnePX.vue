<template>
  <div class="zz-page opx-page">
    <SimpleTitle :title="'移动H5 1px问题'"></SimpleTitle>
    <!-- 0.1px移动显示问题 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">0.String</div>
      <div class="op-str-sty1">
        String
      </div>
    </ZZBorderBox>
    <!-- 1.用小数来写px值 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.String</div>
      <div class="border">
        String
      </div>
    </ZZBorderBox>
    <!-- 3.background渐变 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">3.String</div>
      <div class="ui-border-ts">
        String
      </div>
    </ZZBorderBox>
    <!-- 4.:before, :after与transform -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">4.String</div>
      <div class="radius-border">
        String
      </div>
    </ZZBorderBox>
    <!-- 5.flexible.js viewport 推荐方案 -->
    <!-- px像素提升代理带来渲染性能的降低 -->
    <!-- s1.一刀切方案，viewport设置固定值0.5，XXXpx = window.innerWidth / 0.5 -->
    <!-- s2.根据window.devicePixelRatio动态设置，scale = 1 / window.devicePixelRatio -->
    <!-- https://github.com/amfe/lib-flexible -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">5.String</div>
      <div>
        String
      </div>
    </ZZBorderBox>
    <!-- 6.SVG image -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">6.String</div>
      <svg width="300" height="200">
        <rect
          x="10" y="10"
          height="60" width="100"
          rx="5" ry="5"
          stroke="red"
          fill="gray"></rect>
      </svg>
    </ZZBorderBox>
    <!-- 7.DIV background -->
    <!-- https://developers.weixin.qq.com/community/develop/doc/000a6c821c8d801127670c69856c00 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">7.String</div>
      <div class="op-str-sty7">
        String
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
import SimpleTitle from '../../../../components/zui/title/SimpleTitle'
import ZZBorderBox from '../../../../components/zui/box/ZZBorderBox'
/**
 * H5工程@CSS/solution/1px
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
      console.warn('window.innerHeight', window.innerHeight)
      console.warn('window.innerWidth', window.innerWidth)
      console.warn('window.devicePixelRatio', window.devicePixelRatio)
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

<style scoped lang="scss">
  .opx-page{
    overflow-y: scroll;
  }

  svg line {
    shape-rendering: crispEdges;
  }

  /* 未通过 */
  .border { border: 1px solid #999 }
  @media screen and (-webkit-min-device-pixel-ratio: 1.5) {
    .border { border: 0.5px solid #999 }
  }
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border { border: 0.5px solid #999 }
  }
  @media screen and (-webkit-min-device-pixel-ratio: 3) {
    .border { border: 0.333333px solid #999 }
  }

  /* 未通过 */
  @media screen and (-webkit-min-device-pixel-ratio: 1.5){
    .ui-border-ts {
      background-position: left top;
      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.5,transparent),color-stop(0.5,#e0e0e0),to(#e0e0e0));
    }
  }
  @media screen and (-webkit-min-device-pixel-ratio: 2){
    .ui-border-ts {
      background-position: left top;
      background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.5,transparent),color-stop(0.5,#e0e0e0),to(#e0e0e0));
    }
  }

  /* PASS */
  .radius-border{
    position: relative;
  }
  @media screen and (-webkit-min-device-pixel-ratio: 2){
    .radius-border:before{
      content: "";
      pointer-events: none; /* 防止点击触发 */
      box-sizing: border-box;
      position: absolute;
      width: 200%;
      height: 200%;
      left: 0;
      top: 0;
      border-radius: 8px;
      border:1px solid #999;
      -webkit-transform:(scale(0.5));
      -webkit-transform-origin: 0 0;
      transform:(scale(0.5));
      transform-origin: 0 0;
    }
  }

  .op-str-sty1 {
    padding-left: 0.3rem;
    border-top: #0000FF solid 1px;
    /*border-bottom: #0000FF solid 0.01rem;*/
    border-bottom: #0000FF solid 0.1vw;
  }

  .op-str-sty7{
    border: #0000FF solid 2px;
    -webkit-transform: scale(1, 0.5);
    transform: scale(1, 0.5);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }
</style>
