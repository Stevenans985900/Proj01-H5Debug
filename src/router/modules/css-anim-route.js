const elmRoute = [
  { // CSS anim index
    path: '/css/style/anim',
    name: 'AnimIndex',
    component: () => import('./../../debug/css/style/animate/AnimIndex')
  },
  {
    path: '/css/style/anim/base',
    name: 'CSSAnimate',
    component: () => import('./../../debug/css/style/animate/animation/CSSAnimate')
  },
  {
    path: '/css/style/transform',
    name: 'TransformTs',
    component: () => import('./../../debug/css/style/animate/transform/TransformTs.vue')
  }
]

module.exports = elmRoute
