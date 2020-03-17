const elmRoute = [
  // CSS预处理
  {
    path: '/css/frame/less',
    name: 'CssLess',
    component: () => import('@/debug/css/frame/less/CssLess.vue')
  },
  {
    path: '/css/frame/sass',
    name: 'CssSass',
    component: () => import('@/debug/css/frame/sass/CssSass.vue')
  },
  {
    path: '/css/frame/scss',
    name: 'CssScss',
    component: () => import('@/debug/css/frame/scss/CssScss.vue')
  }
]

module.exports = elmRoute
