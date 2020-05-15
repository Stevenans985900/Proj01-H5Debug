const elmRoute = [
  // CSS预处理
  {
    path: '/css/selector',
    name: 'CssSelector',
    component: () => import('./../../debug/css/selector/basic/CssSelector.vue')
  },
  {
    path: '/css/selector/hover',
    name: 'SelHoverTest',
    component: () => import('./../../debug/css/selector/mouse/hover/SelHoverTest.vue')
  }
]

module.exports = elmRoute
