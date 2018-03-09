<template>
  <section class="login-win">
    <h3 class="title">用户登录</h3>
    <input v-model="username" class="username" @input="setLoginBool" placeholder="请输入用户名">
    <input type="password" v-model="password" class="password" @input="setLoginBool" placeholder="请输入密码">
    <div class="error-tip" :style="{visibility: errors.errorbool}">
      {{errors.errortip}}
    </div>
    <button class="btn-login" @click="emitLogin">登录</button>
  </section>
</template>
<script>
  import {mapGetters} from 'vuex';
  import paramUtil from '../../utils/login/paramUtil'
  import md5 from '../../utils/login/md5';
  import sha1 from '../../utils/login/sha1';
  export default {
    name: 'wanLogin',
    data (){
      return {
        username: '2755874881@qq.com',
        password: '123456',
        showLoginForm: false
      }
    },
    computed: mapGetters({
      errors: 'getErrors',
    }),
    methods: {
      emitLogin() {
        this.$store.dispatch('userLogin', {
          userName: this.username,
          password: sha1.hex(md5.hex(this.password)),
          code: '',
          device: '',
          version: '',
          sdkVersion: '',
          exInfo: navigator.userAgent
        });
      },
      setLoginBool () {
        this.$store.dispatch('initCheckLogin');
        if (this.username.trim() && this.password.trim()) {
          this.loginBool = false;
        } else {
          this.loginBool = true;
        }
      },
    }
  }
</script>
<style>
  .login-win {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    text-align: center;
    background-color: #eeeeee;
  }

  h3 {
    font: normal 18px "Microsoft YaHei", "Arial", "sans-serif";
    text-align: center;
    color: #505050;
    padding: 50px 0;
  }

  input {
    width: 70%;
    height: 50px;
    max-width: 600px;
    text-align: left;
    padding-left: 38px;
    margin: 30px auto;
    outline: none;
    border: 1px #a5a5a5 solid;
    font-size: 22px;
    color: #333;
    position: relative;
    background-color: white;
    display: list-item;
    background-repeat: no-repeat;
    background-position: 10px center;
  }

  .username {
    /*background-image: url(../../img/user-bg.jpg);*/
    background-size: 20px 16px;
  }

  .password {
    /*background-image: url(../../img/user-pwd.jpg);*/
    background-size: 20px 16px;
  }

  .btn-login {
    width: 50%;
    max-width: 600px;
    height: 50px;
    border: 0;
    font-size: 22px;
    margin-top: 50px;
    background-color: #3598db;
    color: white;
    cursor: pointer;
    line-height: 50px;
    text-decoration: none;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0 5px 0 #2677ae;
    -moz-box-shadow: 0 5px 0 #2677ae;
    box-shadow: 0 5px 0 #2677ae;
  }

  footer p {
    width: 100%;
    bottom: 0;
    position: absolute;
    color: #999999;
    font-size: 24px;
    text-align: center;
    line-height: 80px;
  }


</style>
