<template>
  <div class="zz-page">
    array
  </div>
</template>

<script>
/**
 * H5工程@js/base/type/array
 * ---js数组
 *
 * 场景归类
 * s01.基本属性
 * s02.主要方法
 * ---(push/unshift)
 * ---(pop/shift)
 * u01.删除指定元素
 * u02.存在元素判断
 * u04.数组排序
 * u05.常用数组编辑
 * u06.数组遍历
 * u07.数组去重
 * u8.数组遍历性能
 *
 * issue
 * #1.NG
 *
 * Router
 * ---http://localhost:8800/#/js/base/type/array/base
 *
 * ref
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
 * --- https://www.w3schools.com/JS/js_arrays.asp
 * --- https://www.w3school.com.cn/jsref/jsref_obj_array.asp
 * --- http://www.runoob.com/js/js-obj-array.html
 * ---优质博客
 * --- https://www.jb51.net/article/141330.htm
 */
import * as ArrayUtils from './ArrayUtils.js'

export default {
  name: 'ArrayBasic',
  data () {
    return {
      title: 'template component'
    }
  },
  /**
   * Js基础-数组操作
   * for
   */
  mounted: function () {
    console.warn('mounted')
    this.useScene08()
    // this.tsScene01()
  },
  methods: {
    /**
     * u8.数组遍历性能
     * ref
     * --- https://www.cnblogs.com/wisewrong/p/9642264.html
     */
    useScene08 () {
      let arr1 = Array.from(new Array(100000), (x, index) => {
        return index
      })
      let arr2 = Array.from(new Array(50000), (x, index) => {
        return index + index
      })
      const arr3 = arr1.concat(arr2)
      let start = new Date().getTime()
      console.log('开始数组去重 ' + arr3.length)
      const resArr = ArrayUtils.delRepeatArr02(arr3)
      console.log('去重后的长度 ', resArr.length)
      let end = new Date().getTime()
      console.log('耗时', end - start)
    },
    /**
     * u07.数组去重
     * ---1.使用indexOf、includes存在时不加入
     * ---2.存在重复元素Array.filter
     * ref
     * --- https://www.cnblogs.com/wisewrong/p/9642264.html
     */
    useScene07 () {
      //
      let tsArr01 = ['A', 'B', 'C', 'D', 'E', 'B', 'C', 'D', 'E']
      const resArr = ArrayUtils.delRepeatArr06(tsArr01)
      console.log(resArr)
    },
    /**
     * u06.数组遍历
     * ref:
     * --- https://blog.csdn.net/qq_30100043/article/details/69568755
     * --- https://www.cnblogs.com/dailc/p/6103091.html
     * --- https://segmentfault.com/a/1190000010203337
     */
    useScene06 () {
      let tsArr01 = ['A', 'BB', 'C', 'DDD', 'EE', 'BBB', 'C', 'D', {}]
      // for of
      for (let item of tsArr01) {
        console.log(item)
      }
    },
    /**
     * u05.常用数组编辑
     */
    useScene05 () {
      // 添加元素，向数组的末尾添加一个或更多元素，并返回新的长度
      // console.log(tsArr02.push('D'))
      // 取出最后一个元素，删除并返回数组的最后一个元素
      // console.log(tsArr02.pop())
      // 删除并返回数组的第一个元素，修改数组，与pop相对
      // console.log(tsArr01.shift())
      // console.log(tsArr01)
      // 向数组的开头添加一个或更多元素，并返回新的长度，修改数组
      // console.log(tsArr01.unshift('N', 'M'))
      // console.log(tsArr01)
      // 删除元素，并向数组添加新元素，修改数组，可增删数组，更灵活
      // console.log(tsArr01.splice(1, 1, 'N', 'M'))
      // console.log(tsArr01)
      // 从某个已有的数组返回选定的元素
      // console.log(tsArr01.slice(1, 3))
      // console.log(tsArr01)
      // 连接两个或更多的数组，返回组合数组
      // console.log(tsArr01.concat(tsArr02))
      // 转为字符串，元素通过指定的分隔符进行分隔
      // console.log(tsArr01.join(','))
    },
    /**
     * u04.数组排序
     */
    useScene04 () {
      let tsArr01 = ['A', 'BB', 'C', 'DDD', 'EE', 'BBB', 'C', 'D', 'E']
      // 颠倒数组中元素的顺序，修改源数据
      // console.log(tsArr01.reverse())
      // 对数组的元素进行排序，默认升序，修改源数据
      // console.log(tsArr01.sort())
      // 对数组的元素进行排序，自定义，修改源数据
      // 自定义compare
      const compare = function () {
        return function (obj2, obj1) {
          if (obj1.length < obj2.length) {
            return -1
          } else if (obj1.length > obj2.length) { // 取降序
            return 1
          } else {
            return 0
          }
        }
      }
      console.log(tsArr01.sort(compare()))
    },
    /**
     * u02.存在元素判断
     * ---使用indexOf、includes
     */
    useScene02 () {
      let tsArr01 = ['A', 'B', 'C', 'D', 'E']
      console.log(tsArr01.includes('B')) // 是否包含
      console.log(tsArr01.indexOf('B')) // 是第几个包含
    },
    /**
     * u01.删除指定元素
     * ---使用delete方法删除掉数组中的元素后，会把该下标出的值置为undefined,数组的长度不会变
     * ref
     * --- https://www.jb51.net/article/134312.htm
     */
    useScene01 () {
      let tsArr01 = ['A', 'B', 'C', 'D', 'E']
      tsArr01.remove = (obj) => {
        let index = this.indexOf(obj)
        if (index > -1) {
          this.splice(index, 1)
        }
      }
      tsArr01.remove('C')
      console.log(tsArr01)
    },
    /**
     * s02.主要方法
     * ---定义、基本属性、基本使用
     * ref
     * --- https://www.w3school.com.cn/jsref/jsref_obj_array.asp
     */
    tsScene02 () {
      console.warn('tsScene02')
      // #1.构造方法
      // []
      // new Array()
      // new Array(size)
      // new Array(element0, element1, ..., elementn)
      // eslint-disable-next-line
      let tsArr01 = new Array('AA', 'B', 'CCC', 'AA', 'E', 'C')
      let tsArr02 = new Array(5)

      // #2.属性
      // constructor 返回对创建此对象的数组函数的引用。
      // length 设置或返回数组中元素的数目。
      // prototype 使您有能力向对象添加属性和方法。
      console.log(tsArr01)
      console.log(tsArr02.length)
      // 正向搜索元素
      console.log(tsArr01.indexOf('AA'))
      // 反向搜索元素
      console.log(tsArr01.lastIndexOf('AA'))

      // #3.数据编辑
      // 添加元素，向数组的末尾添加一个或更多元素，并返回新的长度
      // console.log(tsArr02.push('D'))
      // 取出最后一个元素，删除并返回数组的最后一个元素
      // console.log(tsArr02.pop())
      // 删除并返回数组的第一个元素，修改数组，与pop相对
      // console.log(tsArr01.shift())
      // console.log(tsArr01)
      // 向数组的开头添加一个或更多元素，并返回新的长度，修改数组
      // console.log(tsArr01.unshift('N', 'M'))
      // console.log(tsArr01)
      // 删除元素，并向数组添加新元素，修改数组，可增删数组，更灵活
      // console.log(tsArr01.splice(1, 1, 'N', 'M'))
      // console.log(tsArr01)
      // 从某个已有的数组返回选定的元素
      // console.log(tsArr01.slice(1, 3))
      // console.log(tsArr01)
      // 连接两个或更多的数组，返回组合数组
      // console.log(tsArr01.concat(tsArr02))
      // 转为字符串，元素通过指定的分隔符进行分隔
      // console.log(tsArr01.join(','))

      // #4.排序
      // 颠倒数组中元素的顺序，修改源数据
      // console.log(tsArr01.reverse())
      // 对数组的元素进行排序，默认升序，修改源数据
      // console.log(tsArr01.sort())
      // 对数组的元素进行排序，自定义，修改源数据
      // 自定义compare
      // const compare = function () {
      //   return function (obj2, obj1) {
      //     if (obj1.length < obj2.length) {
      //       return -1
      //     } else if (obj1.length > obj2.length) { // 取降序
      //       return 1
      //     } else {
      //       return 0
      //     }
      //   }
      // }
      // console.log(tsArr01.sort(compare()))

      // #5.其他
      // 把数组转换为字符串，并返回结果
      // console.log(tsArr01.toString())
      // 把数组转换为本地数组，并返回结果
      // console.log(tsArr01.toLocaleString())
      // 返回数组对象的原始值
      // console.log(tsArr01.valueOf())

      // #6.迭代方法 every/some/map/filter
      const verifyFun = (item) => {
        return item === 'AA'
      }
      // 对数组中的每个元素都执行一次指定的函数（callback），直到此函数返回 false，否则返回true
      console.log(tsArr01.every(verifyFun)) // false
      // 对数组中的每个元素都执行一次指定的函数（callback），直到此函数返回 true，如果发现这个元素，some 将返回 true，
      // 如果回调函数对每个元素执行后都返回 false ，some 将返回 false。它只对数组中的非空元素执行指定的函数，
      // 没有赋值或者已经删除的元素将被忽略
      console.log(tsArr01.some(verifyFun)) // true
      // 对数组中的每个元素都执行一次指定的函数（callback），并且创建一个新的数组
      console.log(tsArr01.map(verifyFun)) // [true, false, false, true, false, false]
      // var filteredArray = array.filter(callback[, thisObject])
      // 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
      console.log(tsArr01.find(verifyFun)) // AA
      // 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
      console.log(tsArr01.findIndex(verifyFun)) // 0
      // un test
      // 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键
      const iterator1 = tsArr01.keys()
      console.warn(iterator1.next().value)
      console.log(iterator1.next().value)
      // 返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
      const iterator2 = tsArr01.entries()
      console.log(iterator2.next().value)
      console.log(iterator2.next().value)

      // #7.类型比较
      // const tsArr70 = []
      // const tsArr71 = []
      // console.log(tsArr70 === tsArr71) // false
      // 引用类型比较
      // const tsNewArr01 = Array.from(tsArr01)
      // console.log(tsArr01)
      // console.log(tsNewArr01)
      // console.log('ABC' === 'ABC')
      // console.log(tsArr01 === tsNewArr01)
      // eslint-disable-next-line no-self-compare
      // console.log(tsArr01 === tsArr01) // 类似JAVA是引用比较，同一对象才相等，false

      // result
      // console.log(tsArr01)
      // console.log(tsArr02)
    },
    /**
     * s01.基本属性
     * ---定义、基本属性、基本使用
     * ref
     * --- https://www.runoob.com/js/js-obj-array.html
     */
    tsScene01 () {
      console.warn('tsScene01')
      // #1.声明一个数组
      let tsArr01 = []
      // eslint-disable-next-line
      let tsArr02 = new Array('A', 'B', 'C')
      // #2.赋值
      tsArr01[1] = 'AA'
      tsArr02[3] = {}
      // #3.方法和属性
      console.log(tsArr01.length) // 长度
      console.log(tsArr02.includes('B')) // 是否包含
      console.log(tsArr02.indexOf('B')) // 是第几个包含
      // #4.创建新原型方法
      // eslint-disable-next-line
      Array.prototype.remove = function (obj) {
        let index = this.indexOf(obj)
        if (index > -1) {
          this.splice(index, 1)
        }
      }
      tsArr02.remove('B') // 自定义移除方法
      console.log(tsArr02)
    }
  }
}
</script>

<style scoped>

</style>
