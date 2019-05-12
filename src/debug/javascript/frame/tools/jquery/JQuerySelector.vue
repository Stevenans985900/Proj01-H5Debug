<template>
  <div id="pageBox"></div>
</template>

<script>
let $ = require('jquery')

export default {
  name: 'JQuerySelector',
  /**
   * jQuery选择器API测试
   */
  mounted: function () {
    console.log('mounted')

    function myFunction () {
      $('#pageBox').attr('style', 'color:red').html('JQuery Selector')
    }

    $(document).ready(myFunction)
  },
  /**
   *
   jQuery
   $("#h01")是jQuery的一个选择器，$表示一个jQuery类，所有$()是构造一个jQuery类
   jQuery 是一个 JavaScript 函数库。

   jQuery 语法实例
   $(this).hide()
   演示 jQuery hide() 函数，隐藏当前的 HTML 元素。
   $("#test").hide()
   演示 jQuery hide() 函数，隐藏 id="test" 的元素。
   $("p").hide()
   演示 jQuery hide() 函数，隐藏所有 <p> 元素。
   $(".test").hide()
   演示 jQuery hide() 函数，隐藏所有 class="test" 的元素。

   jQuery选择器
   jQuery 元素选择器
   jQuery 使用 CSS 选择器来选取 HTML 元素。
   $("p") 选取 <p> 元素。
   $("p.intro") 选取所有 class="intro" 的 <p> 元素。
   $("p#demo") 选取所有 id="demo" 的 <p> 元素。

   jQuery 属性选择器
   jQuery 使用 XPath 表达式来选择带有给定属性的元素。
   $("[href]") 选取所有带有 href 属性的元素。
   $("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
   $("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
   $("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。

   jQuery CSS 选择器
   jQuery CSS 选择器可用于改变 HTML 元素的 CSS 属性。
   $("p").css("background-color","red");

   选择器实例
   $(this)      当前 HTML 元素
   $("p")        所有 <p> 元素
   $("p.intro")    所有 class="intro" 的 <p> 元素
   $(".intro")    所有 class="intro" 的元素
   $("#intro")    id="intro" 的元素
   $("ul li:first")    每个 <ul> 的第一个 <li> 元素
   $("[href$='.jpg']")  所有带有以 ".jpg" 结尾的属性值的 href 属性
   $("div#intro .head")  id="intro" 的 <div> 元素中的所有 class="head" 的元素
   */
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
