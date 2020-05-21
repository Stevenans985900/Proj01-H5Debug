const elmRoute = [
  { // window事件测试
    path: '/js/window/event',
    name: 'EventBaseTest',
    component: () => import('./../../debug/javascript/base/window/event/base/EventBaseTest.vue')
  },
  { // window/navigator
    path: '/js/window/navigator',
    name: 'NavigatorProps',
    component: () => import('./../../debug/javascript/base/window/navigator/NavigatorProps.vue')
  },
  { // window/location信息
    path: '/js/window/location',
    name: 'LocationTs',
    component: () => import('./../../debug/javascript/base/window/location/LocationTs.vue')
  }
]

module.exports = elmRoute
