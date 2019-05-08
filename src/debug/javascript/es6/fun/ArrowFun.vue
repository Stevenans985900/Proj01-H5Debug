<template>
  <div>箭头函数</div>
</template>

<script>
export default {
  name: 'ArrowFun',
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
   * router
   * --- http://localhost:8800/#/H5Super/JsSuper/ES6/ArrowFun
   * ref:
   * ---http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0
   */
  mounted: () => {
    console.log('mounted')
    console.log(this)
    _test.testAPI01()
    _test.testAPI02()
    _test.testAPI02()
  }
}

let _test = {
  testAPI01 () {
    console.log(this)
  },
  testAPI02: function () {
    console.log(this)
  },
  testAPI03: (res) => {
    console.log(this)
    console.log(res)
  }
}
</script>

<style scoped>

</style>
