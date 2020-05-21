const inject = {
  // 注入文件执行任务
  // eventId
  runTask () {
    // const eventId = 'event_10036362'
    // biz001子功能测试
    const timer = setInterval(function () {
      if (!window.nContainer) {
        window.nContainer = window.mIfm.contentDocument.getElementById('n_container')
        if (window.nContainer) {
          // window.nContainer.style.display = 'none'
          window.nContainer.style.visibility = 'hidden'
        }
      }
      if (!window.backElm) {
        window.backElm = window.mIfm.contentDocument.querySelector('.n_back')
        if (window.backElm) {
          window.backElm.style.visibility = 'hidden'
        }
      }
      if (!window.eventElm) {
        window.eventElm = window.mIfm.contentDocument.getElementById('event_10007151')
        if (window.eventElm) {
          window.eventElm.click()
          // window.nContainer.style.display = 'block'
          window.nContainer.style.visibility = 'visible'
          console.log('task finish...')
          clearInterval(timer)
        }
      }
    }, 100)
  }
}

export default inject
