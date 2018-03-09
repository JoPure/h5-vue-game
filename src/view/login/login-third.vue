<template>
  <div class="login-form">
    第三方登录中...
  </div>
</template>
<script>
  import config from '../../api/config'
  import  router from 'vue-router'
  export default {
    name: 'Login-Third',
    created(){
      var code = this.$route.query.code;

      if (code && code != "") {
        this.$store.dispatch('userLogin', {
          userName: '',
          password: '',
          code: code,
          device: '',
          version: '',
          sdkVersion: '',
          exInfo: navigator.userAgent
        });
      } else {
        router.push({path: 'login'})
      }
    },
    methods: {}
  }
</script>
