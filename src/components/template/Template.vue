<template>
  <div class="zz-page">{{name}}</div>
</template>

<script>
export default {
  name: 'Template',
  data () {
    return {
      name: 'template component'
    }
  },
  methods: {
    calc (vA, vB) {
      return vA + vB
    }
  },
  mounted: function () {
    console.log('mounted')
  },
  destroyed: function () {
    // console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
