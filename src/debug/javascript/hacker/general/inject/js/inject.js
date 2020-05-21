const inject = {
  // 注入文件执行任务
  // eventId
  runTask () {
    // const eventId = 'event_10036362'

    // biz001子功能测试
    function getQueryStringHash (param) {
      const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)')
      const r = window.location.search.substr(1).match(reg) ||
        window.location.hash.substring((window.location.hash.search(/\?/)) + 1).match(reg)
      if (r != null) {
        return decodeURIComponent(r[2])
      }
    }

    const eventId = getQueryStringHash('_event_id')
    if (eventId) {
      const timer = setInterval(function () {
        if (!window.nContainer) {
          window.nContainer = document.getElementById('n_container')
          if (window.nContainer) {
            // window.nContainer.style.display = 'none'
            window.nContainer.style.visibility = 'none'
          }
        }
        if (!window.eventElm) {
          window.eventElm = document.getElementById('event_' + eventId)
          if (window.eventElm) {
            window.eventElm.click()
            // window.nContainer.style.display = 'block'
            window.nContainer.style.display = 'visible'
            console.log('task finish...')
            clearInterval(timer)
          }
        }
      }, 100)
    }
  }
}

export default inject
