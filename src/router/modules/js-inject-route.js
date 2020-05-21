const elmRoute = [
  { // js页面注入
    path: '/js/hacker/inject',
    name: 'InjectPage',
    component: () => import('./../../debug/javascript/hacker/general/inject/InjectPage.vue')
  },
  { // NGINX + iframe
    path: '/js/hacker/iframe',
    name: 'IframeHelper',
    component: () => import('./../../debug/javascript/hacker/general/iframe/IframeHelper.vue')
  }
]

module.exports = elmRoute
