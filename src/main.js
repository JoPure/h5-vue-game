import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './router'
import store from './vuex/store'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueLocalStorage);

const router = new VueRouter({
  // mode: 'history',
  saveScrollPosition: true,
  suppressTransitionError: true,
  routes: routerConfig
})

// 登录拦截器
router.beforeEach((to, from, next) => {
  const needAuth = to.matched.some(record => record.meta.requiresAuth);
  const token = localStorage.getItem('token');
  const userId = sessionStorage.getItem('userId');
  if (!needAuth || (needAuth && token && userId)) return next()
  next({
    path: '/login',
    query: {redirect_uri: to.fullPath}
  })
});

window.router = router

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App},
  store
  // render: h=>{App}
})
