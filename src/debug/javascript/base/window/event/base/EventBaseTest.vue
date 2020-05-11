<template>
  <div class="zz-page">
    <div>
      <zz-border-box :height="'30vw'"
                     :title="'3.鼠标事件'">
        <div
          @mousedown="onTs3MouseDown"
          @mousemove="onTs3MouseMove"
          @mouseup="onTs3MouseUp"
          @touchstart="onTs3TouchStart"
          @touchmove="onTs3TouchMove"
          @touchend="onTs3TouchEnd"
          style="width: 10vw;height: 10vw;background: #FFC0CB;"></div>
      </zz-border-box>
      <hr>
      <!-- 事件绑定 -->
      <div class="ebt-elm-sty">
        <div style="padding: 3px">T02.事件绑定方式测试</div>
        <div id="evBindElm1" onclick="bindOnDiv(this)" style="width: 50%;height: 20%;background: greenyellow;"></div>
        <div id="evBindElm2" style="width: 50%;height: 20%;background: wheat;"></div>
        <div id="evBindElm3" style="width: 50%;height: 20%;background: cadetblue;"></div>
      </div>
      <hr>
      <div class="ebt-elm-sty">
        <div style="padding: 3px">T01.事件冒泡机制测试</div>
        <div id="firstClassElm" style="width: 50%;height: 50%;background: gray;">
          <div id="secondClassElm" style="width: 50%;height: 50%;background: ghostwhite;">
            <div id="threeClassElm" style="width: 50%;height: 100%;background: greenyellow;"></div>
          </div>
        </div>
      </div>
    </div>
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
 * @see bDemo.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see bDemo.useScene01
 *
 * Issue
 * i01.问答场景01
 * @see bDemo.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * ---优质博客
 * --- https://www.runoob.com/tags/ref-eventattributes.html // HTML事件属性
 * ---框架
 *
 * Router
 * --- http://localhost:8800/#/js/window/event
 */

import $ from 'jquery'
export default {
  name: 'EventBaseTest',
  data () {
    return {
      name: 'template component'
    }
  },
  methods: {
    // --------------------------------------------------------TS3
    // PC测试成功
    // desktop mouse事件/ 移动端touch事件
    onTs3MouseDown (ev) {
      console.log('down', ev)
    },
    onTs3MouseUp (ev) {
      console.log('up', ev)
    },
    onTs3MouseMove (ev) {
      console.log('move', ev)
    },
    onTs3TouchStart (ev) {
      console.log('t start', ev)
    },
    onTs3TouchMove (ev) {
      console.log('t move', ev)
    },
    onTs3TouchEnd (ev) {
      console.log('t end', ev)
    },
    calc (vA, vB) {
      return vA + vB
    }
  },
  /**
   * js基本事件测试页面
   *  Intent:
   *   1.了解js事件；
   *
   *   2.API测试；
   *      事件绑定的方式
   *      @see testAPI01 js的事件处理机制
   *      @see testAPI02 事件绑定的3种方式
   *      @see testAPI05 自定义事件
   *
   *   6.理解事件机制
   *
   *   ref:
   *      事件类型
   *      https://developer.mozilla.org/zh-CN/docs/Web/Events
   *
   *
   */
  mounted: function () {
    console.log('mounted')
    // testAPI05()

    /* eslint-disable */
    /**
     * 自定义事件
     *  https://www.jb51.net/article/83911.htm
     *  CustomEvent
     *      https://www.jianshu.com/p/71bb3cf19095
     *      https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent
     */
    function testAPI05 () {
      // debugger
      // -------------------------原生js实现-------------------------
      let event = new Event('build')
      // let obj = {};    //对象不能是普通obj
      let elm = document.createElement('div')
      // Listen for the event.
      elm.addEventListener('build', function (e) {
        f4Task()
      }, false)
      // Dispatch the event.
      f3Task()

      function f3Task () {
        setTimeout(function () {
          elm.dispatchEvent(event)
          console.log('f3 task finish...')
        }, 5000)
      }

      function f4Task () {
        console.log('f4 task running...')
      }

      // -------------------------jquery方式-------------------------
      $(window).on('f1TaskFinish', function () {
        f2Task()
      })

      f1Task()

      function f1Task () {
        setTimeout(function () {
          console.log('f1 task finish...')
          $(window).trigger('f1TaskFinish')
          $(window).trigger('f1TaskFinish')
        }, 3000)
      }

      function f2Task () {
        console.log('f2 task running...')
      }
    }

    /* eslint-disable */
    /**
     * 事件绑定的3种方式
     *  标签绑定、元素.onclick、element.addEventListener
     *  https://www.cnblogs.com/mylove103104/p/4667211.html
     *  https://www.cnblogs.com/javawebstudy/p/5266168.html
     */
    function testAPI02 () {
      debugger
      // 使用元素的onclick方法
      document.getElementById('evBindElm2').onclick = function (ev) {
        console.log(ev)
        alert(ev.srcElement.style.background)
      }

      // 通过addEventListener方式
      // 事件移除element.removeEventListener('click', this, false);
      document.getElementById('evBindElm3').addEventListener('click', function (ev) {
        console.log(ev)
        alert(ev.srcElement.style.background)
      }, false)
    }

    /**
     * 在页面元素里面绑定
     *  通过this把元素传递给绑定方法
     * @param elm
     */
    window.bindOnDiv = function (elm) {
      console.log(elm)
      alert(elm.style.background)
    }

    /**
     * js事件处理机制
     *  element.addEventListener(event, listener, useCapture/options )
     *  event 事件类型
     *  function 触发方法
     *  useCapture 触发阶段，true-捕获阶段/false-冒泡阶段；
     *  ev.preventDefault() 阻止默认行为
     *  ev.stopPropagation() 在当前节点阻止事件继续传播
     *  ref:
     *      https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
     *      http://www.runoob.com/jsref/met-element-addeventlistener.html
     *      blog
     *      https://juejin.im/entry/57fb0544128fe100546c26dd/
     *
     */
    function testAPI01 () {
      let firstClassElm = document.querySelector('#firstClassElm')
      let secondClassElm = document.querySelector('#secondClassElm')
      let threeClassElm = document.querySelector('#threeClassElm')
      // 捕获阶段/冒泡阶段
      const useCapture = false
      // 第1级事件
      firstClassElm.addEventListener('click', function () {
        alert('firstClassElm')
      }, useCapture)
      // 第2级事件
      secondClassElm.addEventListener('click', function (ev) {
        alert('secondClassElm')
        // 阻止默认行为，如CheckBox勾选、表单默认提交
        //  preventDefault 方法不会阻止该事件的进一步冒泡
        //  https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
        // ev.preventDefault();

        // 阻止事件继续传播，不会传播到下一级节点
        //  http://www.w3school.com.cn/jsref/event_stoppropagation.asp
        ev.stopPropagation()
      }, useCapture)
      // 第3级事件
      threeClassElm.addEventListener('click', function () {
        alert('threeClassElm')
      }, useCapture)
    }
  },
  destroyed: function () {
    // console.log('destroyed')
  }
}
</script>

<style scoped>
  .ebt-elm-sty {
    box-sizing: border-box;
    width: 100%;
    height: 20vh;
    border: 2px solid gray;
    font-size: 18px;
  }
</style>
