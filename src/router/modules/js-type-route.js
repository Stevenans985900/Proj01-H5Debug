const elmRoute = [
  { // js@TypeIndex
    path: '/js/base/type',
    name: 'TypeIndex',
    component: () => import('./../../debug/javascript/base/type/TypeIndex')
  },
  { // js@ArrayBasic
    path: '/js/base/type/array/base',
    name: 'ArrayBasic',
    component: () => import('./../../debug/javascript/base/type/array/ArrayBasic')
  },
  { // js@StringTest
    path: '/js/base/type/string/base',
    name: 'StringTest',
    component: () => import('./../../debug/javascript/base/type/string/StringTest')
  }
]

module.exports = elmRoute

