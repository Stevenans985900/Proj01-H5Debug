// 设置屏幕大小10rem
var remSum = 10.0

function initFontRem (ev) {
  pageRemInit(window.innerWidth)
  var realWidth = document.querySelector('.rem-base').offsetWidth
  if (realWidth !== window.innerWidth / 2) {
    var resizeScale = realWidth / (window.innerWidth / 2)
    pageRemInit(window.innerWidth / resizeScale)
  }
}

function pageRemInit (screenWidth) {
  document.documentElement.style.fontSize = screenWidth / remSum + 'px'
}

initFontRem({type: 'lunch'})
window.addEventListener('resize', initFontRem)
