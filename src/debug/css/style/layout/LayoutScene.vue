<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.div堆叠'">
      <div class="bd-ts1">
        <div style="position: relative;">
          <div style="position: absolute;width: 10vw;height: 20vw;background: #FFA500;"></div>
        </div>
        <div style="position: relative;">
          <div style="position: absolute;width: 20vw;height: 10vw;background: #008000;"></div>
        </div>
        <div style="position: relative;">
          <div style="position: absolute;width: 15vw;height: 15vw;background: #FFC0CB;"></div>
        </div>
      </div>
    </zz-border-box>
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.div堆叠'">
      <div class="bd-ts1">
      </div>
    </zz-border-box>
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.div堆叠'">
      <div class="bd-ts1">
      </div>
    </zz-border-box>
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.div堆叠'">
      <div class="bd-ts1">
      </div>
    </zz-border-box>
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.div堆叠'">
      <div class="bd-ts1">
      </div>
    </zz-border-box>
  </div>
</template>

<script>
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
 * ref:
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/style/layout/scene
 */

export default {
  name: 'LayoutScene',
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped lang="scss">

</style>
