<template>
  <div class="fb01-box">
    <img @click="onButtonClick" class="fb01-img" src="../../../assets/icon/issue.svg"/>
  </div>
</template>

<script>
export default {
  name: 'FloatBtn',
  props: ['issueList'],
  methods: {
    onButtonClick () {
      this.$router.push({
        name: 'IssuePage',
        params: this.issueList
      })
    }
  }
}
</script>

<style lang="less" scoped>
  /* 半径 */
  @btnRadius: 10vw;

  .fb01-box {
    position: fixed;
    bottom: 6vw;
    right: 3vw;
    width: @btnRadius;
    height: @btnRadius;
    border-radius: @btnRadius/2;
    background: #ffb286;
  }

  .fb01-img {
    width: @btnRadius;
    height: @btnRadius;
  }
</style>
