const elmRoute = [
  // HTML标签
  { // input标签
    path: '/html/label/input',
    name: 'InputTest',
    component: () => import('@/debug/html/label/input/InputTest.vue')
  }
]

module.exports = elmRoute
