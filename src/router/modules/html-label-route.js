const elmRoute = [
  // HTML标签
  { // input标签
    path: '/html/label/input',
    name: 'InputTest',
    component: () => import('./../../debug/html/label/input/InputTest.vue')
  },
  { // img标签
    path: '/html/label/img',
    name: 'ImageSrc',
    component: () => import('./../../debug/html/label/image/ImageSrc.vue')
  }
]

module.exports = elmRoute
