<template>
  <div class="zz-page">
    <div>{{title}}</div>
    <div class="spx-1px-sty1"></div>
    <div class="spx-1px-sty2"></div>
    <div class="spx-1px-sty3"></div>
  </div>
</template>

<script>
export default {
  name: 'Screen1px',
  data () {
    return {
      title: 'Screen1px',
      width: 0,
      height: 0
    }
  }
}
</script>

<style scoped>
  .spx-1px-sty1 {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background: darkkhaki;
  }

  .spx-1px-sty2 {
    width: 100%;
    /*height:1px;*/
    /*margin-top: 10px;*/
    /*-webkit-transform: scaleY(0.5);*/
    /*-webkit-transform-origin:0 0;*/
    /*overflow: hidden;*/
    /*background: darkkhaki;*/

    margin-top: 10px;
    height: 1px;
    background: none;
    box-shadow: 0 0.5px 0 #000;
  }
</style>
