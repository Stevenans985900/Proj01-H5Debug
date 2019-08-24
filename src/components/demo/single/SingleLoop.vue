<template>
  <div class="zz-page">
    <div class="sl01-main-box">
      <div @click="onItemClick(index)" class="sl0-item-box" v-for="(item,index) in singleList" :key="index">
        <div class="sl0-item-title">{{item.name}}</div>
      </div>
    </div>
    <SingleLoop v-if="subList && subList.length > 0" :singleList="subList"/>
    <div @click="onCardBack" class="sl01-back">
      <img class="sl01-img" src="../../../assets/icon/ic_back.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleLoop',
  props: ['singleList'],
  data () {
    return {
      subList: [],
      isBack: false
    }
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    /**
     * 构建卡片返回
     */
    onCardBack () {
      console.log('onCardBack')
      this.subList = []
    },
    /**
     * Item事件点击处理
     */
    onItemClick (curIndex) {
      console.log(curIndex)
      // 渲染下一级
      this.subList = this.singleList[curIndex].list
      // ???不支持跳转当前页面
      // this.$router.push({
      //   name: 'PageIndex',
      //   params: this.singleList[curIndex].list
      // })
    }
  }
}
</script>

<style lang="less" scoped>
  /* 半径 */
  @btnRadius: 10vw;

  .sl01-main-box {
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

  .sl01-back {
    position: fixed;
    bottom: 6vw;
    left: 3vw;
    width: @btnRadius;
    height: @btnRadius;
    border-radius: @btnRadius/2;
  }

  .sl01-img {
    width: @btnRadius;
    height: @btnRadius;
  }
</style>
