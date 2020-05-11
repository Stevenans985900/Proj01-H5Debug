<template>
  <div>
  </div>
</template>

<script>
/**
 * H5工程@HTML/label
 * ---
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see tsUrl.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see tsUrl.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see tsUrl.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * ---优质博客
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/window/url
 */

const tsUrl = {
  /**
   * API场景01
   */
  tsScene01 () {
    console.warn('tsScene01')
  },
  /**
   * 使用场景01
   * --- 修改url参数
   * --- https://blog.csdn.net/WuLex/article/details/89194384
   */
  useScene01 () {
    console.warn('useScene01')

    // 替换指定传入参数的值,paramName为参数,replaceWith为新值
    // function replaceParamVal (paramName, replaceWith) {
    //   var oUrl = this.location.href.toString()
    //   var re = eval('/(' + paramName + '=)([^&]*)/gi')
    //   var nUrl = oUrl.replace(re, paramName + '=' + replaceWith)
    //   this.location = nUrl
    //   window.location.href = nUrl
    // }
    // replaceParamVal('userId', '333')
    // http://www.aazj.cn/pc/meeting/card.html?skinColor=30&gid=-1&userId=566&modid=1133&puid=9
  },
  /**
   * 使用场景02
   * --- 动态修改url参数
   * --- https://blog.csdn.net/WuLex/article/details/89194384
   */
  useScene02 () {
    console.warn('useScene01')

    // 有效
    // www.baidu.com
    function changeURLArg (url, arg, argVal) {
      var pattern = arg + '=([^&]*)'
      var replaceText = arg + '=' + argVal
      if (url.match(pattern)) {
        var tmp = '/(' + arg + '=)([^&]*)/gi'
        tmp = url.replace(eval(tmp), replaceText)
        return tmp
      } else {
        if (url.match('[\?]')) {
          return url + '&' + replaceText
        } else {
          return url + '?' + replaceText
        }
      }
    }
    window.location.href = changeURLArg(window.location.href, 'name', 123)
  },
  /**
   * 问答场景01
   */
  ivScene01 () {
    console.warn('ivScene01')
  }
}

export default {
  name: 'WinURL',
  data () {
    return {}
  },
  methods: tsUrl,
  mounted () {
  }
}
</script>

<style scoped lang="scss">

</style>
