<template>
  <div class="zz-page">
    <div>
      <button @click="onUploadEvent">选择文件</button>
      <input type="file" multiple @change="onInputChange(this)"
             style="display: none;"
             ref="elmInput" accept=".png,.jpg"/>
    </div>
    <div>
      <div>剪切板复制</div>
      <span class="copy-btn"
            v-clipboard:copy="'ABC'"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">复制</span>
    </div>
  </div>
</template>

<script>
/**
 * html/input
 * --- AA
 *
 * ---常见场景
 * ---1.修改placeholder
 * --- https://jingyan.baidu.com/article/19192ad8eada35e53e570721.html
 * ---
 * ---2.复制内容到剪切板
 * --- cnpm install vue-clipboard2 --save
 * --- https://www.cnblogs.com/similar/p/10757540.html
 * --- 使用input的select( document.execCommand('Copy') )
 * --- http://yige.org/htmldom/met_text_select.php
 * ---
 * ---3.文件场景
 * --- input file
 * --- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file
 *
 * ref:
 * --- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input
 *
 * Router
 * --- http://localhost:8800/#/html/label/input
 *
 * issue
 * #1.input type="number"时 maxlength 属性不起作用
 * --- 规避方案：使用tel
 * --- https://blog.csdn.net/u012982629/article/details/80588438
 *
 * #2.input文本内容动态改变后的光标位置问题
 * --- 规避方案：动态设置elm.selectionStart
 * --- https://segmentfault.com/q/1010000011036750
 *
 */

export default {
  name: 'InputTest',
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    // 使用按钮事件触发选择文件
    // https://segmentfault.com/q/1010000008850820/a-1020000015357968
    onUploadEvent () {
      this.$refs.elmInput.click()
    },
    // 选择文件
    onInputChange (params) {
      console.log(this.$refs.elmInput.value)
      console.log(this.$refs.elmInput.files)
    },
    // 复制成功时的回调函数
    onCopy (e) {
      this.$message.success('内容已复制到剪切板！')
    },
    // 复制失败时的回调函数
    onError (e) {
      this.$message.error('抱歉，复制失败！')
    }
  }
}
</script>

<style scoped>
  .copy-btn {
    font-size: 30px;
  }
</style>
