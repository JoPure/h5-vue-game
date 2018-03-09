import {
  SUCCESS_LOGIN,
  CHECK_FAILURE_LOGIN,
  INIT_CHECK_LOGIN,
} from './module-type';

import config from '../../../api/config.js';
import api from '../../../api/index.js';
import regexp from '../../../utils/login/regexp';
import sign from '../../../utils/login/sign';
import localstorage from '../../../utils/login/localStorage'

/**
 * state
 * @type {{userInfo: {}, loginRedirectUri: string, errors: {errortip: string, errorbool: string}}}
 */
const state = {
  loginRedirectUri: '',
  userInfo: {},
  errors: {
    errortip: '错误提示：手机号格式不正确，请重试!',
    errorbool: 'hidden'
  }
}

/**
 * mutations
 * @type {{}}
 */
const mutations = {
  [CHECK_FAILURE_LOGIN](state, errorType){
    if (errorType == "invaildUsername") {
      state.errors.errortip = '错误提示：用户名格式不正确，请重试!'
    } else if (errorType == "invaildPassword") {
      state.errors.errortip = '错误提示：密码格式格式不正确，请重试!'
    } else {
      state.errors.errortip = '错误提示：手机号或密码错误，请重试!'
    }
    state.errors.errorbool = 'visible'
  },
  [SUCCESS_LOGIN](state, data){
    state.userInfo = data
  },
  [INIT_CHECK_LOGIN](state){
    state.errors.errorbool = 'hidden'
  }
}


/**
 * actions
 * @type
 */
const actions = {

  // 用户登录输入信息校验
  initCheckLogin ({commit}){
    commit(INIT_CHECK_LOGIN)
  },

  // 微信登录
  wechatLogin({commit, router}){
    localstorage.remove('token');
    localstorage.remove('userId');
    localstorage.set('accountType', 9);
    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd5fe9e6452fb6048&redirect_uri=" + config.redirect_uri + "?accountType=9&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
  },

  // wan平台登录
  wanLogin({commit}){
    localstorage.set('accountType', 1);
    router.push('/login/7wan');
  },

  // 微信二维码登录
  wechatQrcodeLogin(){
    localstorage.set('accountType', 10);
    window.location.href = "https://open.weixin.qq.com/connect/qrconnect?appid=wx1cab8695f3b6d475&redirect_uri=" + encodeURIComponent(config.redirect_uri + "?accountType=10") + "&response_type=code&scope=snsapi_login&state=68_cache#wechat_redirect"
  },

  // QQ 登录
  qqLogin(){
    localstorage.set('accountType', 7);
    var display = wanGameUtil.brower().isMobile() ? 'mobile' : 'pc';
    window.location.href = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101349921&redirect_uri=" + encodeURIComponent(config.redirect_uri + "?accountType=7&state=123") + "&display=" + display + "&scope=get_user_info";
  },

  // 公用登录方法
  userLogin ({commit}, data){
    data.source = regexp.isAndroid(navigator.userAgent) ? 1 : (regexp.isIos(navigator.userAgent) ? 0 : 2);
    data.accountType = localstorage.get('accountType') || 1;
    data.sign = sign.create(data);
    api.post({
      url: config.loginUrl,
      data: data,
      success (responseData) {
        sessionStorage.setItem('userId', responseData.data.userId);
        localstorage.set('userId', responseData.data.userId);
        localstorage.set('headImg', responseData.data.icon);
        localstorage.set('nickName', responseData.data.nickName);
        localstorage.set('userName', responseData.data.userName);
        localstorage.set('password', responseData.data.password);
        localstorage.set('token', responseData.data.token);
        var userInfo = responseData.data;
        commit(SUCCESS_LOGIN, userInfo);

        let loginRedirectUri = localstorage.get('redirect_uri');
        localstorage.remove('redirect_uri');
        if (loginRedirectUri && loginRedirectUri != "") {
          if (loginRedirectUri.indexOf('http://') >= 0) {
            window.location.href = loginRedirectUri;
          } else {
            router.push({path: loginRedirectUri});
          }
        } else {
          router.push({path: '/index'});
        }
      }
    })
  },


  // 退出登录
  userLogout(){
    localStorage.clear();
    router.push('/login');
  },

  // 切换帐号
  switchAccount(){
    localStorage.clear();
    router.push('/login');
  },
}
/**
 * getters
 * @type
 */
const getters = {
  getUserMessage: function (state) {
    if (state.userInfo.icon) {
      return state.userInfo;
    } else {
      state.userInfo = {
        icon: localstorage.get("headImg"),
        nickName: localstorage.get("nickName"),
        userId: localstorage.get("userId"),
      }
      return state.userInfo;
    }
  },
  getErrors: state => state.errors,
}

export default {
  state,
  mutations,
  actions,
  getters
}
