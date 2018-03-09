<template>
  <div class="view-login">
    <router-view></router-view>
  </div>
</template>
<script>
  import paramUtil from '../../utils/login/paramUtil'
  import Vuex from 'vuex'

  export default {
    name: 'LoginContainer',
    created(){
      //判断是否有回调参数
      const redirectUri = paramUtil.get('redirect_uri');
      if (redirectUri && redirectUri != '') {
        localStorage.setItem('redirect_uri', redirectUri);
      }

      const channel = this.$route.query.channel;
      if (channel) {
        localStorage.setItem('channel', channel);
      } else {
        localStorage.removeItem('channel');
      }

      //判断是否为切换帐号
      const switchAccount = paramUtil.get('switch');
      if (switchAccount) {
        console.warn('切换帐号~');
        localStorage.clear();
      }

      // 判断是否为第三方登录回调，带code参数
      const code = paramUtil.get('code');

      if (!code || code == '') {
        const userName = localStorage.getItem('userName');
        const password = localStorage.getItem('password');
        if (userName && password) {
          console.warn('缓存帐号自动登录~');
          this.$store.dispatch('userLogin', {
            userName: userName,
            password: password,
            code: '',
            device: '',
            version: '',
            sdkVersion: '',
            exInfo: navigator.userAgent
          });
        }
      }
    }
  }
</script>

