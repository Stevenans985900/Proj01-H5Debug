/**
 * flex page libs
 * 19.20
 * 10.80
 */
(function flexPage (window, document) {
  let remSum = 10.8

  function adjustFontRem (ev) {
    console.log('adjustFontRem ' + ev)
    document.documentElement.style.fontSize = document.body.offsetWidth / remSum + 'px'
    console.log(document.documentElement.style.fontSize)
    console.log('devicePixelRatio ' + window.devicePixelRatio)
  }

  // ???
  // window.addEventListener('pageshow', adjustFontRem('pageshow'))
  // window.addEventListener('load', adjustFontRem('load'))
  // window.addEventListener('resize', adjustFontRem('resize'))

  window.addEventListener('resize', adjustFontRem)
  window.addEventListener('load', adjustFontRem)
  // window.addEventListener('pageshow', adjustFontRem)
}(window, document))
