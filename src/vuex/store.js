/**
 * Created by jo.chan on 2016/10/31.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login/login'
import home from  './module/home/home'
import gift from  './module/gift/gift'
import pay from  './module/pay/pay'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: login,
    home: home,
    gift: gift,
    pay :  pay
    // user: user
  }
})
