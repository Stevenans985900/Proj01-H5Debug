<template>
  <div class="zz-page">
    array
  </div>
</template>

<script>
/**
 * H5工程@js/base/type/array
 *
 * ref
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
 * --- https://www.w3schools.com/JS/js_arrays.asp
 * --- https://www.w3school.com.cn/jsref/jsref_obj_array.asp
 * --- http://www.runoob.com/js/js-obj-array.html
 * ---优质博客
 * --- https://www.jb51.net/article/141330.htm
 * ---框架
 *
 * 场景归类
 * 1.遍历方法
 * 2.操作方法
 * ---(push/unshift)
 * ---(pop/shift)
 * 3.存在元素判断
 *
 * issue
 * #1.NG
 *
 * Router
 * ---http://localhost:8800/#/js/base/type/array
 */
export default {
  name: 'ArrayBasic',
  data () {
    return {
      title: 'template component'
    }
  },
  methods: {
    /**
     * 1.数组遍历方法
     * ref:
     * --- https://blog.csdn.net/qq_30100043/article/details/69568755
     * --- https://www.cnblogs.com/dailc/p/6103091.html
     * --- https://segmentfault.com/a/1190000010203337
     */
    tsForArr () {
    },
    /**
     * 2.数组操作方法
     * ---push/pop 从最后一个操作
     * ---unshift/shift 从第一个操作
     */
    tsOptionArr () {
      // join() 方法用于把数组中的所有元素放入一个字符串
      // 表达式 arrayObject.join(separator)
      console.warn('push/pop')
      let arr5 = ['A', 'B', 'C', 'D', 'E', 'F']
      let arr5Str = arr5.join(',')
      console.log(arr5Str)

      return
      /* eslint-disable */

      console.warn('push/pop')
      let arr = ['A', 'B', 'C', 'D', 'E', 'F']
      console.log(arr)
      let tempA = arr.pop()
      console.log(tempA)
      console.log(arr)
      arr.push(tempA)
      console.log(arr)

      console.warn('concat')
      let tempArr1 = ['1', '2', '3']
      let tempArr2 = ['a', 'b', 'c']
      console.log(tempArr1)
      console.log(tempArr2)
      tempArr1 = tempArr1.concat(tempArr2)
      console.log(tempArr1)

      console.warn('unshift/shift')
      console.log(arr)
      tempA = arr.shift()
      console.log(tempA)
      console.log(arr)
      arr.unshift(tempA)
      console.log(arr)

      // 构造方法
      // [] new new Array(size)
      console.warn('new/[]')
      let arr0 = new Array()
      arr0[0] = 'a'
      console.log(arr0)
      console.log(arr0.length)
      let arr1 = new Array(100)
      console.log(arr1.length)
    },
    /**
     * 3.数组判断
     */
    tsExistArr () {
      let arr = ['A', 'B', 'C', 'D', 'E', 'F']
      console.log('indexOf')
      console.log(arr.indexOf('E'))
      console.log(arr.indexOf('EE'))
    },
    /**
     * 4.数组排序
     * --- sort
     */
    tsSortArr () {

    },
    /**
     * 5.高级用法
     */
    tsAdvanceArr () {

    },
    /**
     * 6.TypedArray 类型
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
     Int8Array();
     Uint8Array();
     Uint8ClampedArray();
     Int16Array();
     Uint16Array();
     Int32Array();
     Uint32Array();
     Float32Array();
     Float64Array();
     */
    tsTypedArrayArr () {

    },
    calc (params) {
      return params
    }
  },
  /**
   * Js基础-数组操作
   * for
   */
  mounted: function () {
    console.log('mounted')
    this.tsOptionArr()
  }
}
</script>

<style scoped>

</style>
