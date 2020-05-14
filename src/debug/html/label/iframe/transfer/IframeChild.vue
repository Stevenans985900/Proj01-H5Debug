<template>
  <div class="zz-page">
    <div class="ic-float">
      <img :src="require('./../../../../../assets/iv/iv_home.svg')"
           id="goHomeElm"
           @click="onGoHome"
           class="ic-home"/>
    </div>
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
 * --- https://www.cnblogs.com/kingboy2008/archive/2011/05/10/2055545.html // iframe去边框，无边框，使用大全
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/html/label/iframe/transfer/child
 */

export default {
  name: 'IframeChild',
  methods: {
    onGoHome () {
      console.log('onGoHome...')
    }
  },
  /**
   * iframe feature
   */
  mounted () {
    console.log('From parent: ', parent.onChildMsg({
      c1: '01',
      c2: '02',
      c3: '03'
    }))
  }
}
</script>

<style>
</style>

<style scoped>
  .ic-float {
    position: fixed;
    z-index: 10000;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    /*background: #FFA500;*/
  }

  .ic-home {
    width: 100%;
    height: 100%;
  }
</style>
