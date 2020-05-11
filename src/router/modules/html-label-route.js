const elmRoute = [
  // HTML标签
  { // input标签
    path: '/html/label/input',
    name: 'InputTest',
    component: () => import('./../../debug/html/label/input/InputTest.vue')
  },
  { // sel标签
    path: '/html/label/select',
    name: 'SelectTs',
    component: () => import('./../../debug/html/label/select/SelectTs.vue')
  },
  { // img标签
    path: '/html/label/img',
    name: 'ImageSrc',
    component: () => import('./../../debug/html/label/image/ImageSrc.vue')
  },
  { // svg标签
    path: '/html/label/svg',
    name: 'SVGTest',
    component: () => import('./../../debug/html/label/svg/SVGTest.vue')
  },
  { // table标签
    path: '/html/label/table',
    name: 'TableTs',
    component: () => import('./../../debug/html/label/table/TableTs.vue')
  },
  { // iframe标签
    path: '/html/label/iframe',
    name: 'IframeTest',
    component: () => import('../../debug/html/label/iframe/IframeTest.vue')
  },
  { // iframe标签
    path: '/html/label/iframe/transfer',
    name: 'IframeParent',
    component: () => import('../../debug/html/label/iframe/transfer/IframeParent.vue')
  },
  { // iframe标签
    path: '/html/label/iframe/transfer/child',
    name: 'IframeChild',
    component: () => import('../../debug/html/label/iframe/transfer/IframeChild.vue')
  }
]

module.exports = elmRoute
