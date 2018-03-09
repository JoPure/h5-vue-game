/**
 * Created by jo.chan on 2016/12/16.
 */

import config from '../../../api/config';
import api from '../../../api/index';
import sign from '../../../utils/login/sign'
import QRCode from 'qrcode-js-package/qrcode'
// import wx from 'weixin-js-sdk'


const state = {
  errors: {
    errortip: '请同意玩家条例',
    errorbool: 'hidden'
  }
}

const mutations = {}

const actions = {

  //微信支付
  wxPay({commit}){
    var payData = {
      appId: "",
      timeStamp: "",
      nonceStr: "",
      package: "",
      signType: "",
      paySign: "",
    };

    var postData = wanGameUtil.getQueryVars();
    localStorage.setItem('pay_redirect_uri', postData.redirectUrl);
    delete postData.redirectUrl;
    postData.type = 100;
    postData.exInfo = "";
    postData.device = "";
    postData.appExt = postData.appExt ? postData.appExt : "";
    postData.source = wanGameUtil.brower().isAndroid() ? 0 : wanGameUtil.brower().isIos() ? 1 : 2;
    postData.clientTime = wanGameUtil.currentDateFormat();
    delete postData.sign;
    postData.sign = sign.create(postData);

    api.post({
      url: config.wxPay,
      data: postData,
      success (responseData) {
        if (responseData.code == 200) {
          payData.appId = responseData.data.paymentInfo.appid;
          payData.timeStamp = responseData.data.paymentInfo.timestamp;
          payData.nonceStr = responseData.data.paymentInfo.noncestr;
          payData.package = responseData.data.paymentInfo.packageValue;
          payData.signType = responseData.data.paymentInfo.signType;
          payData.paySign = responseData.data.paymentInfo.paySign;
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(), false);
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady());
              document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady());
            }
          } else {
            this.onBridgeReady();
          }
        }
        else {
          alert(responseData.code + ":" + responseData.error_msg);
        }
      },
      error (err) {
        alert('网络错误');
      }
    })
  },
  onBridgeReady(payData) {
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
        "appId": payData.appId,     //公众号名称，由商户传入
        "timeStamp": payData.timeStamp, //时间戳，自1970年以来的秒数
        "nonceStr": payData.nonceStr,  //随机串
        "package": payData.package,
        "signType": payData.signType,  //微信签名方式：
        "paySign": payData.paySign    //微信签名
      },
      function (res) {
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          alert("支付成功");
          window.location.href = decodeURIComponent(wanGameUtil.getQueryString("redirectUrl"));
        }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        else {
          alert('支付失败');
        }
      }
    );
  },
  //阿里支付
  zfbPay({commit}){
    var postData = wanGameUtil.getQueryVars();
    postData.redirectUrl = decodeURIComponent(postData.redirectUrl);
    postData.exInfo = "";
    postData.device = "";
    postData.appExt = postData.appExt ? postData.appExt : "";
    postData.source = wanGameUtil.brower().isAndroid() ? 0 : wanGameUtil.brower().isIos() ? 1 : 2;
    postData.clientTime = wanGameUtil.currentDateFormat();
    delete postData.sign;
    postData.sign = sign.create(postData);

    api.post({
      url: config.zfbPay,
      data: postData,
      success (responseData) {
        if (responseData.code == 200) {
          var info = responseData.data.paymentInfo;
          $('#app').append(info);
        }
        else {
          alert(responseData.code + ":" + responseData.error_msg);
        }
      },
      error (err) {
        alert('接口失败');
      }
    })
  },

  //扫码支付
  codePay({commit}){
    var postData = wanGameUtil.getQueryVars();
    localStorage.setItem('pay_redirect_uri', postData.redirectUrl);
    delete postData.redirectUrl;
    postData.type = 104;
    postData.exInfo = "";
    postData.device = "";
    postData.appExt = postData.appExt ? postData.appExt : "";
    postData.source = wanGameUtil.brower().isAndroid() ? 0 : wanGameUtil.brower().isIos() ? 1 : 2;
    postData.clientTime = wanGameUtil.currentDateFormat();
    delete postData.sign;
    postData.sign = sign.create(postData);

    api.post({
      url: config.wxPay,
      data: postData,
      success (responseData) {
        if (responseData.code == 200) {
          $('.qrcode-wrap').show();
          $('.qrcode-content').show();
          $("#qrcode").empty();
          var qrcode = new QRCode(document.getElementById('qrcode'), {
            width: 180,
            height: 180
          });
          qrcode.makeCode(responseData.data.paymentInfo.codeUrl);
        }
        else {
          alert(responseData.code + ":" + responseData.error_msg);
        }
      },
      error (err) {
        alert('接口失败');
      }
    })
  }
}

const getters = {
  // getPayMessage: state =>state.payInfo
  // getBalance: state =>state.balance
  // getErrors: state => state.errors,
}

export default {
  state,
  mutations,
  actions,
  getters
}




