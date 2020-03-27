const elmRoute = [
  // CSS预处理
  {
    path: '/css/selector',
    name: 'CssSelector',
    component: () => import('@/debug/css/selector/basic/CssSelector.vue')
  }
]

module.exports = elmRoute
