<template>
  <div class="zz-page">
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'4.radio单选'">
      <div class="it-ts1">
        <input type="radio"
               name="radioGroup4"
               @change="onChange4"
               value="1"
               ref="elmInput40"/>
        <input type="radio"
               name="radioGroup4"
               @change="onChange4"
               value="2"
               checked
               ref="elmInput41"/>
      </div>
    </zz-border-box>
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'3.事件'">
      <div class="it-ts1">
        <input type="text"
               v-model.trim="inVal3"
               :autofocus="true"
               @change="onChange(this)"
               @input="onInput(this)"
               @focus="onFocus(this)"
               @blur="onBlur(this)"
               ref="elmInput3"/>
      </div>
    </zz-border-box>
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'2.复制剪切板'">
      <div class="it-ts1">
        <div>
          <span class="copy-btn"
                v-clipboard:copy="'ABC'"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">复制</span>
        </div>
      </div>
    </zz-border-box>
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.选择文件'">
      <div class="it-ts1">
        <div>
          <button @click="onUploadEvent">选择文件</button>
          <input type="file" multiple @change="onInputChange(this)"
                 style="display: none;"
                 ref="elmInput" accept=".png,.jpg"/>
        </div>
      </div>
    </zz-border-box>
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
 * issue
 * #1.input type="number"时 maxlength 属性不起作用
 * --- 规避方案：使用tel
 * --- https://blog.csdn.net/u012982629/article/details/80588438
 *
 * #2.input文本内容动态改变后的光标位置问题
 * --- 规避方案：动态设置elm.selectionStart
 * --- https://segmentfault.com/q/1010000011036750
 *
 * Router
 * --- http://localhost:8800/#/html/label/input
 */

export default {
  name: 'InputTest',
  data () {
    return {
      inVal3: '',
      fileList: []
    }
  },
  methods: {
    // -------------------------------------------4
    onChange4 (ev) {
      console.log('change')
      console.log(ev.target.value)
      console.log(this.$refs.elmInput41.checked)
      console.log(this.$refs.elmInput41.value)
    },
    // -------------------------------------------3
    onBlur (params) {
      console.log('blur')
      console.log(this.$refs.elmInput3.value)
    },
    onFocus (params) {
      console.log('focus')
      console.log(this.$refs.elmInput3.value)
    },
    onInput (params) {
      console.log('input')
      console.log(this.$refs.elmInput3.value)
      console.log('inVal3', this.inVal3)
    },
    onChange (params) {
      console.log('change')
      console.log(this.$refs.elmInput3.value)
    },
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
  },
  mounted () {
    const _self = this
    setTimeout(() => { // 需要一定延时
      _self.$refs.elmInput3.focus()
    }, 500)
  }
}
</script>

<style scoped lang="scss">
  @import "input-test.scss";
</style>
