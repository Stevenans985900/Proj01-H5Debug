const elmRoute = [
  // CSS布局
  {
    path: '/css/style/layout',
    name: 'LayoutIndex',
    component: () => import('./../../debug/css/style/layout/LayoutIndex')
  },
  { // css@box/css-box
    path: '/css/style/box/css-box',
    name: 'CSSBox',
    component: () => import('./../../debug/css/style/box/CSSBox.vue')
  },
  { // CSS布局场景
    path: '/style/layout/scene',
    name: 'LayoutScene',
    component: () => import('./../../debug/css/style/layout/LayoutScene.vue')
  }
]

module.exports = elmRoute
