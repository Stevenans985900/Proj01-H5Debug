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
  { // CSS样式-font
    path: '/css/style/font',
    name: 'FontTs',
    component: () => import('./../../debug/css/style/font/FontTs.vue')
  }
]

module.exports = elmRoute