<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.HackerJS测试'">
      <div class="bd-ts1">
        <span @click="onElmClick"
           id="event_007">Bing007</span>
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
 * --- http://localhost:8800/#/js/hacker/inject
 */
import inject from './js/inject'

export default {
  name: 'InjectPage',
  data () {
    return {
      data1: 10
    }
  },
  methods: {
    onElmClick () {
      console.log('Bing 007 响应')
    }
  },
  created () {
    console.log('created')
    inject.runTask('event_007')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped lang="scss">

</style>
