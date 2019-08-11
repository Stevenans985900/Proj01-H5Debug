// 设置屏幕大小10rem
var remSum = 10.0
var isDebug = true
console.warn('-------------------- screen fix start --------------------')

function initFontRem (ev) {
  if (isDebug) {
    console.warn('event.type ' + ev.type)
  }
  pageRemInit(window.innerWidth)
  var realWidth = document.querySelector('.rem-base').offsetWidth
  if (isDebug) {
    console.log('realWidth ' + realWidth + 'px')
  }
  if (realWidth !== window.innerWidth / 2) {
    var resizeScale = realWidth / (window.innerWidth / 2)
    pageRemInit(window.innerWidth / resizeScale)
    if (isDebug) {
      console.error('resize font-size ' + document.documentElement.style.fontSize)
    }
  }
  console.warn('-------------------- screen fix finished --------------------')
}

function pageRemInit (screenWidth) {
  document.documentElement.style.fontSize = screenWidth / remSum + 'px'
  if (isDebug) {
    console.log('APP v1.0.0 ' + new Date(1563078960481).toLocaleString())
    console.log('window.innerWidth ' + window.innerWidth + 'px')
    console.log('window.devicePixelRatio ' + window.devicePixelRatio)
    console.log('font-size ' + document.documentElement.style.fontSize)
  }
}

initFontRem({type: 'lunch'})
window.addEventListener('resize', initFontRem)
// window.addEventListener('load', initFontRem)
