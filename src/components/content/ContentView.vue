<template>
    <div class="cv-main-box">
      <div @click="onItemClick(index)" class="cv-item-box" v-for="(item, index) in childList" :key="index">
        <div class="cv-item-title">{{item.name}}</div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'ContentView',
  props: ['childList'],
  data () {
    return {
    }
  },
  methods: {
    /**
     * Item事件点击处理
     */
    onItemClick (index) {
      // console.log(index)
      this.$router.push(this.childList[index].path)
    }
  },
  /**
   * mounted
   */
  mounted: function () {
    // console.log('mounted')
  }
}
</script>

<style scoped>
  .cv-main-box{
    width: 100%;
  }

  .cv-item-box {
    margin: 10px;
  }

  .cv-item-title {
    padding: 8px;
    text-decoration: underline;
    color: blue;
    border: 1px solid #EEE;
    background: #ffb286;
  }
</style>
