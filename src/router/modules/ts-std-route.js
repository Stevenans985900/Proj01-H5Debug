const elmRoute = [
  { // 测试标准卡1
    path: '/ts/demo1',
    name: 'BDemo1',
    component: () => import('./../../page/Zdemo/BDemo.vue')
  },
  { // 测试标准卡2
    path: '/ts/demo2',
    name: 'ZDemo2',
    component: () => import('./../../page/Zdemo/ZDemo.vue')
  }
]

module.exports = elmRoute
