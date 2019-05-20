<template>
  <div class="tt-box">
    <label>
      <textarea ref="textareaElm" placeholder="请输入" class="tt-input-sty"></textarea>
    </label>
    <div class="tt-get-btn">{{taValue}}</div>
  </div>
</template>

<script>
let _self
export default {
  name: 'TextareaTest',
  data () {
    return {
      taValue: ' ' // 绑定textarea当前值
    }
  },
  methods: {
    onGetTextareaValue () {
      console.log(this.$refs.textareaElm.value)
    }
  },
  /**
   * HTML标签textarea
   * 定义：
   * ---标签定义多行的文本输入控件
   *
   * 属性
   * placeholder:提示文本
   * elm.value:当前输入值
   *
   * 常见使用场景
   * 1.不显示边框
   * ---border: none;
   * 2.选中不显示focus边框
   * ---border: none;
   * 3.设置光标颜色
   * ---caret-color: red;
   * 4.文本颜色修改
   * ---text
   * ---placeholder
   * 5.输入文本变化事件
   * ---监听按键keyup事件(另一种方式使用jquery)
   *
   * ref:
   * ---http://www.w3school.com.cn/tags/tag_textarea.asp
   * ---属性参考
   * ---https://www.runoob.com/tags/tag-textarea.html
   */
  mounted () {
    console.log('mounted')
    _self = this
    // use window event
    window.onkeyup = function () {
      console.log('onkeyup')
      _self.taValue = _self.$refs.textareaElm.value
    }
  }
}
</script>

<style scoped>
  textarea {
    box-sizing: border-box;
    /* 1.隐藏边框 */
    border: none;
    /* 4.文本颜色修改-text */
    /*-webkit-text-fill-color: green;*/
    /* 3.设置光标颜色 */
    caret-color: red;
    padding: 10px 20px;
    /* 字体颜色 */
    color: dodgerblue;
    text-shadow: 0px 0px 0px #000;
  }

  textarea:focus {
    /* 2.选中不显示focus边框 */
    outline: none;
  }

  /* /* 4.文本颜色修改-placeholder */
  /* ref:https://stackoverflow.com/questions/43793639/change-placeholder-text-color-of-textarea */
  ::-webkit-input-placeholder { /* Chrome */
    color: darkseagreen;
  }

  :-ms-input-placeholder { /* IE 10+ */
    color: darkseagreen;
  }

  ::-moz-placeholder { /* Firefox 19+ */
    color: darkseagreen;
    opacity: 1;
  }

  :-moz-placeholder { /* Firefox 4 - 18 */
    color: darkseagreen;
    opacity: 1;
  }

  .tt-box {
    box-sizing: border-box;
    margin: 10px;
    font-size: 25px;
  }

  .tt-input-sty {
    width: 100%;
    height: 100px;
    font-size: 30px;
    background: #EEE;
    border-radius: 20px;
  }

  .tt-get-btn {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 5px 15px 5px 15px;
    background: #CCC;
    border-radius: 10px;
    text-align: center;
  }
</style>
