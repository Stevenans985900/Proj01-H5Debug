<template>
  <div class="zz-page">{{title}}</div>
</template>

<script>
export default {
  name: 'Template',
  components: {},
  data () {
    return {
      title: 'template component'
    }
  },
  methods: {
    calc (params) {
      return params
    }
  },
  /**
   * 前端H5tech栈简化模板
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
