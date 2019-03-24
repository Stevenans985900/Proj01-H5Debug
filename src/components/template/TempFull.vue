<template>
  <div class="zz-page">{{title}}</div>
</template>

<script>
export default {
  name: 'TempFull',
  props: [],
  components: {},
  data () {
    return {
      title: 'TempFull component'
    }
  },
  /**
   * 方法
   */
  methods: {
    calc (params) {
      return params
    }
  },
  computed: {
    /**
     * 计算属性默认只有getter
     */
    sumInteger: function () {
      return this.title + this.title
    }
  },
  watch: {
    // watch data
    tempA: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    }
  },
  /**
   * Life circle
   */
  beforeCreate: function () {
  },
  created: function () {
  },
  beforeMount: function () {
  },
  /**
   * 前端H5tech栈全量模板
   */
  mounted: function () {
    console.log('mounted')
  },
  beforeUpdate: function () {
  },
  updated: function () {
  },
  activated: function () {
  },
  deactivated: function () {
  },
  beforeDestroy: function () {
  },
  destroyed: function () {
  },
  errorCaptured: function () {
  }
}
</script>

<style scoped>

</style>
