/**
 * Created by jo.chan on 2016/10/31.
 */
export default [
  {
    path: '/',
    name: 'index',
    component: require('./view/home/home.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: require('./view/home/home.vue')
  },
  {
    path: '/gift',
    name: 'gift',
    component: require('./view/gift/gift.vue')
  },
  {
    path: '/social',
    name: 'social',
    component: require('./view/social/social.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: require('./view/person/person.vue')
  },
  {
    path: '/index/detail',
    name: 'detail',
    component: require('./view/home/detail/detail.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: require('./view/list/list.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: require('./view/pay.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: require('./view/login/login.vue'),
    children: [
      {path: '', component: require('./view/login/login-chose.vue')},
      {path: '7wan', component: require('./view/login/login-wan.vue')},
      {path: 'third', component: require('./view/login/login-third.vue')}
    ]
  }
]


