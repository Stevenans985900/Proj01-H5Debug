<template>
  <div class="ic-page">
    <div class="if-float">
      <img :src="require('./../../../../assets/iv/iv_home.svg')"
           id="goHomeElm"
           @click="onGoHome"
           class="ic-home"/>
    </div>
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" allowtransparency="yes"
            width="100%" height="100%;"
            style="position: relative;"
            id="mIfm"
            src="http://www.baidu.com"></iframe>
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
 * --- http://localhost:8800/#/html/label/iframe
 */

export default {
  name: 'IframeTest',
  /**
   * iframe feature
   */
  mounted () {
    window.onChildMsg = function (msg) {
      console.log('From child: ', msg)
    }
  }
}
</script>

<style>
  .zz-page{
    position: fixed;
    overflow-y: hidden;
  }
</style>

<style scoped>
  .ic-page {
    /*position: fixed;*/
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: white;
    overflow: hidden;
    font-size: 0.36rem;
  }

  .it-iframe-sty {
    width: 100%;
    height: 100%;
  }

  .if-float {
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
