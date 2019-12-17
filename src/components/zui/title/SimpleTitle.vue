<template>
    <div class="st-card-box">
      <div class="st-text">{{title}}</div>
    </div>
</template>

<script>
/**
 * 简单标题
 */
export default {
  name: 'SimpleTitle',
  props: ['title']
}
</script>

<style scoped>
  .st-card-box{
    width: 100%;
  }
 .st-text{
   text-align: center;
   line-height: 1rem;
   font-size: 0.40rem;
   border-bottom: #EEEEEE solid 0.02rem;
   color: #21FA2F;
 }
</style>
