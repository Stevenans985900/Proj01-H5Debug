<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.背景图片100%'">
      <div class="bit-ts1">
        <flexbox>
          <flexbox-item :span="1/4" class="color-box1">100%</flexbox-item>
        </flexbox>
      </div>
    </zz-border-box>
  </div>
</template>

<script>
import Flexbox from 'vux/src/components/flexbox/flexbox'
import FlexboxItem from 'vux/src/components/flexbox/flexbox-item'
/**
 * H5工程@HTML/label
 * ---
 *
 * scene
 * #s1.背景图片拉伸设置
 * ---
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
 * --- http://localhost:8800/#/css/style/bkg/img
 */

export default {
  name: 'BkgImgTs',
  components: {FlexboxItem, Flexbox},
  data () {
    return {
      data1: 10
    }
  }
}
</script>

<style scoped lang="scss">
  @import "bkg-img-ts.scss";
</style>
