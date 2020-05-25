const elmRoute = [
  { // CSS样式背景渐变
    path: '/css/style/bkg/gradients',
    name: 'BackgroundTs',
    component: () => import('./../../debug/css/style/background/BackgroundTs.vue')
  },
  { // CSS样式背景图片
    path: '/css/style/bkg/img',
    name: 'BkgImgTs',
    component: () => import('./../../debug/css/style/background/bkg-img/BkgImgTs.vue')
  },
  { // style/box-shadow
    path: '/css/style/box/shadow',
    name: 'BoxShadow',
    component: () => import('./../../debug/css/style/background/box-shadow/BoxShadow.vue')
  },
  { // style/border-radius
    path: '/css/border/radius',
    name: 'BorderTs',
    component: () => import('./../../debug/css/style/border/BorderTs.vue')
  },
  { // CSS样式-font
    path: '/css/style/font',
    name: 'FontTs',
    component: () => import('./../../debug/css/style/font/FontTs.vue')
  }
]

module.exports = elmRoute
