<template>
  <div></div>
</template>

<script>
export default {
  name: 'ForBasic',
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
   * Js基础-for循环
   * for
   */
  mounted: function () {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
