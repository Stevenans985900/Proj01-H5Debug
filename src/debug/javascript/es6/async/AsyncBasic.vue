<template>
  <div>Async基本特性</div>
</template>

<script>
export default {
  name: 'AsyncBasic',
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
   * --- http://localhost:8800/#/H5Super/JsSuper/ES6/AsyncBasic
   * async API测试页面
   *  Intent:
   *   1.了解async的用途；
   *      ES7 提出的async 函数，终于让 JavaScript 对于异步操作有了终极解决方案。No more callback hell；
   *   2.async的基本用法与API；
   *      @see testAPI01 基本API
   *      @see testAPI02 参数传递
   *   3.应用场景
   *      配合Promise执行异步操作；
   *   6.async的工作机制；
   *      一句话，async函数就是Generator函数的语法糖；
   *
   *   7.兼容性
   *      async IE不支持
   *   ref:
   *      MDN async
   *      https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
   *      http://www.ruanyifeng.com/blog/2015/05/async.html
   *      https://segmentfault.com/a/1190000010244279
   *      async/await的执行顺序
   *      https://www.jb51.net/article/124321.htm
   *
   */
  mounted: function () {
    console.log('mounted')
    console.log(_test)
  }
}
const _test = {
  /**
   * 基本用法
   *  s1.async/await基本用法；
   *
   */
  testAPI01 () {
    // debugger;
    // let pr0 = new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     resolve('resolve task finish...')
    //     console.log('resolve task finish...')
    //   }, 1000)
    // })
    //
    // let pr1 = new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     reject('reject task finish...')
    //     console.log('reject task finish...')
    //   }, 2000)
    // })

    // // 结果是promise对象
    // let res = runAsyncTask()
    // // async的异步任务不会阻塞到这里
    // console.log('testAPI01 task finish...' + res)
    //
    // /**
    //  * 执行异步操作
    //  * @returns {Promise<void>}
    //  */
    // async runAsyncTask()
    // {
    //   // 在这里等待异步任务执行完成
    //   let res0 = await pr0
    //   console.log(res0)
    //   try {
    //     // promise执行结果返回到这里res1
    //     let res1 = await pr1
    //     console.log(res1)
    //   } catch (ev) {
    //     console.log(ev)
    //   }
    //   console.log('async task finish...')
    // }
  }
}
</script>

<style scoped>

</style>
