<template>
  <div class="sl0-main-box">
    <div @click="onItemClick(index)" class="sl0-item-box" v-for="(item,index) in singleList" :key="index">
      <div class="sl0-item-title">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleList',
  props: ['singleList'],
  methods: {
    /**
     * Item事件点击处理
     */
    onItemClick (curIndex) {
      console.log(curIndex)
      this.$router.push({
        path: this.singleList[curIndex].path
      })
    }
  }
}
</script>

<style scoped>
  .sl0-main-box {
    box-sizing: border-box;
    width: 100%;
  }

  .sl0-item-box {
    box-sizing: border-box;
    width: 100%;
    padding: 1vw;
  }

  .sl0-item-title {
    padding: 1vw;
    text-decoration: underline;
    color: blue;
    border: 0.2vw solid #EEE;
    background: #EFE;
  }
</style>
