<template>
  <div id="login-wrap" class="login-wrap">
    <div class="login-head">
      <img src="../../assets/img/logo.png" alt="yg">
    </div>
    <div class="login-body">
      <p id="wxLogin">
        <a @click="emitWechatLogin"><img src="../../assets/img/game_wx_icon.png" alt="微信登录"></a>
      </p>
      <p id="qqLogin">
        <a @click="emitQQLogin"><img src="../../assets/img/game_login_qq.png" alt="QQ登录"></a>
      </p>
      <p id="ygLogin">
        <a @click="emitWanLogin"><img src="../../assets/img/game_wan_icon.png" alt="使用wan帐号登录"></a>
      </p>
    </div>
    <div class="login-footer">Copyright©深圳第七大道科技有限公司</div>
  </div>
</template>
<script>

import {mapGetters} from 'vuex';
import paramUtil from '../../utils/login/paramUtil'

const accountType = {
  NORAML: 0,
  EMAIL: 1,
  QQ: 7,
  WECHAT: 9,
  WECHAT_QRCODE: 10
};

export default {
  name: 'Login',
  computed: mapGetters({
    errors: 'getErrors'
  }),
  methods: {
    emitWanLogin() {
      this.$store.dispatch('wanLogin');
    },
    emitWechatLogin(){
      this.$store.dispatch('wechatLogin');
    },
    emitWechatQrcodeLogin(){
      this.$store.dispatch('wechatQrcodeLogin');
    },
    emitQQLogin(){
      this.$store.dispatch('qqLogin');
    }
  }
}
</script>
<style lang="scss">

  .login-wrap {
    width: 100%;
    /*max-width: 750px;*/
    background: white;
    margin: 0 auto;
  }

  .login-head {
    position: relative;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-image: url(../../assets/img/bg.jpg);
  }

  .login-head::before {
    display: block;
    margin: 0 auto;
    content: "";
    padding-top: 73.2%;
  }

  .login-head img {
    position: absolute;
    width: 45%;
    top: 22px;
    left: 36%;
  }

  .login-body {
    margin: 0px auto;
    text-align: center;
    margin-top: 5px;
    height: 8rem;
    overflow: hidden;
    padding-bottom: 40px;
  }

  .login-body p {
    margin-top: 10px;
  }

  .login-body img {
    text-align: center;
    width: 80%;
  }

  .login-footer {
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0;
    color: #999;
    height: 30px;
    background: #f2f2f2;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
  }

</style>
