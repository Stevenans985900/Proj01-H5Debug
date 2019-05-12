<template>
  <div class="zz-page">
    <div class="est-box">
      <div id="divElm" class="est-div-elm">
        <p>000 000</p>
        <p>111 111</p>
        <p>222 222</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElmSelectTest',
  methods: {
    /**
     * 选择子元素
     *  http://www.itxueyuan.org/view/6349.html
     */
    strTest3 () {
      debugger
      let elmSuper0 = document.body.querySelector('#divElm')
      // 获取所有子节点元素
      let childList = elmSuper0.childNodes
      // 第一个子节点
      let firstElm = elmSuper0.firstChild
      // 最后一个子节点
      let lastElm = elmSuper0.lastChild
      console.log(childList.length)
      console.log(firstElm.length)
      console.log(lastElm.length)
    },
    /**
     * 选择元素-querySelector
     * http://www.runoob.com/jsref/met-document-queryselector.html
     */
    strTest2 () {
      debugger
      // 返回文档中匹配指定 CSS 选择器的一个元素
      // "." ==> class
      // "#" ==> id
      // "p" ==> label
      // "[]" ==> 属性
      // var elmSuper0 = document.body.querySelector("#elmSuper0");
      let elmSuper0 = document.body.querySelector('.text-font-size')
      console.log(elmSuper0.nodeName)
      console.log(elmSuper0.innerText)
    },
    /**
     * 选择元素-getElements
     *  http://blog.csdn.net/ernijie/article/details/51332534
     *  http://www.w3school.com.cn/jsref/dom_obj_document.asp
     */
    strTest1 () {
      debugger
      // 返回指定ID的元素，只有一个对象
      // var elmSuper0 = document.getElementById("elmSuper0");
      // 返回带有指定标签名的对象的集合
      // var elmSuper0 = document.getElementsByTagName("div");
      // 返回带有指定名称的对象集合
      // var elmSuper0 = document.getElementsByName("elmSuper0");
      var elmSuper0 = document.getElementsByClassName('est-div-elm')
      console.log(elmSuper0.length)
    },
    /**
     * 删除子元素
     */
    strTest0 () {
      debugger
      let elmSuper0 = document.getElementById('divElm')
      this.removeAllChild(elmSuper0)
    },
    /**
     * 删除元素所有节点
     *  http://blog.csdn.net/x10_z8_g6/article/details/6008627
     * @param {Object} elm
     */
    removeAllChild (elm) {
      // for(var i = elm.childNodes.length - 1; i >= 0; i--) {
      // elm.removeChild(elm.lastChild);
      // }
      elm.innerHTML = ''
      // while(elm.firstChild) {
      // elm.removeChild(elm.firstChild);
      // }
    }
  },
  /**
   * js dom元素选择
   */
  mounted () {
    console.log('mounted')
    // this.strTest0()
  },
  destroyed () {
  }
}
</script>

<style scoped>
  .est-box {
    width: 100%;
    color: white;
  }

  .est-div-elm {
    width: 300px;
    height: 300px;
    background: #1cb2ff;
  }
</style>
