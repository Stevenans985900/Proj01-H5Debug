const elmRoute = [
  // CSS screen
  { // css@solution/screen
    path: '/css/solution/screen',
    name: 'ScreenIndex',
    component: () => import('./../../debug/css/solution/screen/ScreenIndex.vue')
  },
  { // css@solution/screen/postcss
    path: '/css/solution/screen/px2vw',
    name: 'PX2vw',
    component: () => import('./../../debug/css/solution/screen/postcss/PX2vw.vue')
  },
  { // css@solution/screen/postcss
    path: '/css/solution/screen/px2rem',
    name: 'PX2Rem',
    component: () => import('./../../debug/css/solution/screen/postcss/PX2Rem.vue')
  }
]

module.exports = elmRoute
