<template>
  <div class="wrap pay-wrap">
    <header class="header">
      <p class="txt">商品名称: <span class="txt-highlight desc">{{queryVars.productDesc}}</span></p>

      <p class="txt">充值账号：<a class="userId">{{queryVars.userId}}</a></p>

      <p class="txt">账户余额：<span class="txt-highlight balance">{{payMessage.platformCoinRemain}}</span></p>
    </header>
    <section class="ui-container">
      <div class="box-pay">
        <h2>需要支付： <span class="txt-highlight needPay">{{queryVars.money}}</span>元</h2>

        <div class="ui-btn-wrap">
          <button class="ui-btn-lg btn-weiXin" @click="emitWxPay">
            微信支付
          </button>
        </div>
        <div class="ui-btn-wrap">
          <button class="ui-btn-lg btn-qrcodePay" @click="emitCodePay">
            微信扫码支付
          </button>
        </div>
        <div class="ui-btn-wrap">
          <button class="ui-btn-lg btn-aLiPay" @click="emitAliPay">
            支付宝支付
          </button>
        </div>
        <div class="ui-btn-wrap">
          <button class="ui-btn-lg back" @click="backGame">
            返回游戏
          </button>
        </div>
      </div>
      <div class="pay-footer">
        <p> Copyright©深圳第七大道科技有限公司</p>
      </div>
    </section>
    <div class="qrcode-wrap" @click="closeQrCode"></div>
    <div class="qrcode-content">
      <div id="qrcode"></div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import api from '../api/index'
  export default{
    name: 'pay',
    data(){
      return {
        payMessage: {
          type: Object
        },
        queryVars: {
          type: Object
        }
      }
    },
    mounted: function () {
      this.queryVars = wanGameUtil.getQueryVars();
      $('.needPay').text(this.queryVars.money);
      $(".userId").text(this.queryVars.userId);
      $(".desc").text(decodeURIComponent(this.queryVars.productDesc));

      this.queryBalance();
      if (wanGameUtil.brower().isWeixin()) {
        $(".btn-aLiPay").hide();
        $(".btn-qrcodePay").hide();
      } else if (wanGameUtil.brower().isPC()) {
        $(".btn-weiXin").hide();
      } else if (wanGameUtil.brower().isMobile()) {
        $(".btn-qrcodePay").hide();
      }
      console.log('.');
    },
    methods: {
      emitWxPay(){
        this.$store.dispatch('wxPay');
      },
      emitCodePay(){
        this.$store.dispatch('codePay');
      },
      emitAliPay(){
        this.$store.dispatch('zfbPay');
      },
      backGame(){
        this.$store.dispatch('backGame');
      },
      closeQrCode: function () {
        $('.qrcode-wrap').on('click', function () {
          $(this).hide();
          $(".qrcode-content").hide();
        });
      },
      queryBalance: function () {
        api.get({
          url: "/game/platformCoinShow?userId= " + this.queryVars.userId,
          success: function (responseData) {
            if (responseData.code == 200) {
              this.payMessage = responseData.data
              console.log(this.payMessage.platformCoinRemain);
            }
            else {
              console.log(responseData.code + ":" + responseData.error_msg);
            }
          },
          error: function (err) {
            alert('error');
          }
        })
      }
    }
  }
</script>
<style>
  .pay-wrap.header {
    height: 60px;
    padding: 10px;
    background-color: #fff;
    border-bottom: solid 2px #d9d9db;
    font-family: "Microsoft Yahei", tahoma, Arial, sans-serif;
  }

  .pay-wrap .header p {
    line-height: 20px;
    font-size: 14px;
  }

  .txt-highlight {
    color: #ff8444;
  }

  .ui-btn-wrap {
    padding: 10px;
  }

  .ui-container {
    background-color: #e4e4e4;
    margin: 0 auto;
  }

  .box-pay .ui-btn-wrap:nth-child(2) .ui-btn-lg {
    color: #eeeeee;
    background-color: #08b905;
  }

  .box-pay .ui-btn-wrap:nth-child(3) .ui-btn-lg {
    color: #eeeeee;
    background-color: #08b905;
  }

  .box-pay .ui-btn-wrap:nth-child(4) .ui-btn-lg {
    color: #eeeeee;
    background-color: #1e81d2;
  }

  .box-pay .ui-btn-wrap:nth-child(5) .ui-btn-lg {
    color: black;
    background-color: #ffffff;
  }

  .box-pay h2 {
    line-height: 45px;
    text-align: center;
    padding: 100px;
  }

  .box-pay h2 span {
    font-size: 14px;
  }

  .ui-btn-lg {
    font-size: 18px;
    height: 44px;
    line-height: 44px;
    display: block;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
  }

  .ui-btn, .ui-btn-lg, .ui-btn-s {
    position: relative;
    text-align: center;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -webkit-background-clip: padding-box;
    border: 1px solid #cacccd;
  }

  .pay-footer {
    font-size: 14px;
    text-align: center;
    background-color: #e4e4e4;
  }

  .pay-footer a {
    height: 30px;
    line-height: 30px;
    color: #56afe9;
    text-decoration: underline;
  }

  .pay-footer a:nth-child(4) {
    display: block;
  }

  .pay-footer p {
    color: #9b9b9b;
    display: inline-block;
    line-height: 40px;
  }

  .pay-footer a img.qqtalk {
    width: 18%;
  }

  .pay-footer a img.qqgroup {
    width: 21.5%;
  }

  .box-sale p {
    display: inline-block;
    font-size: 12px;
  }

  .qrcode-wrap {
    width: 100%;
    height: 100%;
    max-width: 640px;
    top: 0;
    position: fixed;
    display: none;
    background: black;
    opacity: 0.8;
    filter: alpha(opacity=80);
  }

  .qrcode-content {
    width: 200px;
    height: 200px;
    left: 50%;
    top: 50%;
    display: none;
    position: fixed;
    margin-left: -100px;
    margin-top: -100px;
    background: white;
  }

  .qrcode-content #qrcode {
    width: 180px;
    height: 180px;
    margin: 10px;
  }

</style>
