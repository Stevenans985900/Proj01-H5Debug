<template>
  <div class="zz-page">
    <SimpleTitle :title="'Browser window对象'"></SimpleTitle>
    <!-- 1.字符串模板 -->
    <ZZBorderBox :height="'2rem'" :marginBottom="'0.5rem'" :borderWidth="'0.1rem'"
                 :borderColorMode="'random'">
      <div style="font-weight: bold">1.Window</div>
      <div class="zd-str-sty1">
        {{JSON.stringify(mWindow.navigator)}}
      </div>
    </ZZBorderBox>
  </div>
</template>

<script>
import SimpleTitle from '../../../../../components/zui/title/SimpleTitle'
import ZZBorderBox from '../../../../../components/zui/box/ZZBorderBox/ZZBorderBox'
/**
 * H5工程@js/browser/window
 * ---window对象
 *
 * ref
 * ---原生API
 * --- https://developer.mozilla.org/zh-CN/docs/Web/API/Window
 * --- https://www.w3schools.com/js/js_window.asp
 * ---ZH
 * --- https://www.w3cschool.cn/javascript/js-window.html
 * --- https://www.w3school.com.cn/jsref/dom_obj_window.asp
 * ---优质博客
 * ---框架
 *
 * 场景归类
 * API
 * s01.API场景01
 * USE
 * u01.使用场景01
 * Issue
 * i01.问答场景01
 *
 * issue
 * #1.NG
 *
 * Router
 * --- http://localhost:8800/#/js/browser/window
 *
 * Ref:
 * ---
 */
export default {
  name: 'ZDemo',
  components: {ZZBorderBox, SimpleTitle},
  data () {
    return {
      mWindow: window
    }
  },
  created () {
  },
  mounted () {
    this.tsScene02()
    // this.useScene01()
    // this.ivScene01()
  },
  methods: {
    /**
     * API场景09
     * window event
     */
    tsScene09 () {
      console.warn('tsScene09')
      window.onblur = () => {
        console.warn('onblur')
      }
    },
    /**
     * API场景08
     * window document
     */
    tsScene08 () {
      console.warn('tsScene08')
      console.warn('window.document', window.document)
      console.warn('window.document.cookie', window.document.cookie)
    },
    /**
     * API场景07
     * window定时
     */
    tsScene07 () {
      console.warn('tsScene07')
      // setTimeout(function, milliseconds）
      // 执行的功能，等待的毫秒指定次数后。
      //
      // setInterval(function, milliseconds）
      // 连续地同的setTimeout（），但重复功能的执行。
      window.setTimeout(() => {
        window.alert('Timeout')
      }, 3000)
    },
    /**
     * API场景06
     * window alert
     */
    tsScene06 () {
      console.warn('tsScene06')
      window.alert('alert BB')
    },
    /**
     * API场景05
     * window navigator
     */
    tsScene05 () {
      console.warn('tsScene05')
      // 导航
      // navigator.appName
      // navigator.appCodeName
      // navigator.platform
      console.warn('window.navigator', window.navigator)
      console.warn('window.navigator.cookieEnabled', window.navigator.cookieEnabled)
      console.warn('window.navigator.appName', window.navigator.appName)
      console.warn('window.navigator.appVersion', window.navigator.appVersion)
      console.warn('window.navigator.userAgent', window.navigator.userAgent)
      console.warn('window.navigator.language', window.navigator.language)
      console.warn('window.navigator.vendor', window.navigator.vendor)
    },
    /**
     * API场景04
     * window history
     */
    tsScene04 () {
      console.warn('tsScene04')
      // 浏览历史操作
      // history.back() - 同样在浏览器中单击后退
      // history.forward() - 同样在浏览器中点击前进
      console.warn('window.history', window.history)
    },
    /**
     * API场景03
     * window location
     */
    tsScene03 () {
      console.warn('tsScene03')
      // 域名信息
      // window.location.href 返回当前页面的href（URL）
      // window.location.hostname 返回虚拟主机的域名
      // window.location.pathname 返回当前页面的路径和文件名
      // window.location.protocol 返回使用的Web协议（http：或https :)
      // window.location.assign() 加载一个新的文档
      console.warn('window.location', window.location)
    },
    /**
     * API场景02
     * window尺寸参数
     */
    tsScene02 () {
      console.warn('tsScene02')
      // 窗口屏幕信息
      // @see lib.dom.d.ts (interface Screen)
      console.warn('window.screen', window.screen)

      // 获取窗口宽高，IE9
      console.warn('window.innerHeight', window.innerHeight)
      console.warn('window.innerWidth', window.innerWidth)
      console.warn('window.devicePixelRatio', window.devicePixelRatio)

      // 从document取文档区域宽高
      // console.warn('document.documentElement.clientHeight', document.documentElement.clientHeight)
      // console.warn('document.documentElement.clientWidth', document.documentElement.clientWidth)
      // console.warn('document.body.clientHeight', document.body.clientHeight)
      // console.warn('document.body.clientWidth', document.body.clientWidth)

      // 可靠的获取宽高
      // 兼容所有浏览器
      // let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      // let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    /**
     * API场景01
     * 浏览器window对象模型
     */
    tsScene01 () {
      console.warn('tsScene01')
      console.warn('window', window)
    },

    /**
     * 使用场景01
     */
    useScene01 () {
      console.warn('useScene01')
    },

    /**
     * 问答场景01
     */
    ivScene01 () {
      console.warn('ivScene01')
    }
  }
}
</script>

<style scoped>
  .zd-str-sty1 {
  }
</style>
