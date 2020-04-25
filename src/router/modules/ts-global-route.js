const elmRoute = [
  { // 确认alert测试
    path: '/js/global/alert',
    name: 'AlertTs',
    component: () => import('./../../debug/javascript/base/global/AlertTs.vue')
  }
]

module.exports = elmRoute
