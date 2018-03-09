<template>
  <div class="user-container">
    <header class="topBar">
      <img class="user-photo" v-bind:src="user.icon ? user.icon : defaultImageSrc">
      <p class="user-name">{{user.nickName ? decodeURIComponent(user.nickName) : ""}}</p>
      <p class="user-score">{{user.point}}</p>
      <a class="mobile-box" >
        <span class="icon-mobile"></span>
        <span class="down-tip">下载APP</span>
      </a>
      <img src="../assets/img/btn-follow.jpg" class="attention" v-on:click="showCode">
    </header>
    <!--二维码-->
    <div class="box-qrcode" v-on:click="hideCode">
      <div class="wrap-qrcode"></div>
      <div class="qrcode">
        <p class="top">关注7玩</p>
        <img src="../assets/img/mp-qrcode.jpg">
        <p class="bottom">长按识别二维码</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      data(){
      return {
        defaultImageSrc: require('../assets/img/default_headimg.png')
      }
    },
    props: {
      user: {
        type: Object,
        request: true
      }
    },
    methods: {
      showCode: function () {
        $(".box-qrcode").show();
      },
      hideCode: function () {
        $(".box-qrcode").hide();
      }
    }
  }

</script>
<style lang="scss">
  @import "../assets/scss/scss-utils.scss";
  @import "../assets/scss/public.scss";
  @import "../assets/scss/utils/_animation.scss";

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .topBar {
    width: 100%;
    margin: 0 auto;
    @include base;
    @include px2rem('height', 120px);
    /*@include background_color;*/
    background-color: #fff;
    z-index: 10;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    top: 0;

    .user-photo {
      position: absolute;
      @include px2rem('width', 91px);
      @include px2rem('height', 91px);
      top: 6%;
      left: 1%;
      border-radius: 50%;
      @include background_color;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .5);
      @include px2rem('padding', 2px);
      z-index: 15;
    }

    .user-name {
      @include font-dpr(14px);
      font-weight: 400;
      position: absolute;
      @include px2rem('left', 120px);
      @include px2rem('top', 10px);
    }

    .user-score {
      @include font-dpr(12px);
      position: absolute;
      @include px2rem('left', 120px);
      @include px2rem('top', 40px);
    }

    .attention {
      right: 0;
      position: absolute;
      display: block;
      top: 0;
      height: 100%;
    }

    .mobile-box {
      position: absolute;
      @include px2rem('right', 100px);
      @include px2rem('top', 10px);

      .icon-mobile {
        @include font-dpr(30px);
        float: left;
        color: #fc7336;;
        -webkit-animation: icon-bounce 1s ease-in-out infinite alternate;
        -moz-animation: icon-bounce 1s ease-in-out infinite alternate;
        animation: icon-bounce 1s ease-in-out infinite alternate;
      }

      .down-tip {
        float: right;
        margin: 9px;
      }

      span {
        @include font-dpr(14px);
        color: #fc7336;
      }

    }
  }

  .box-qrcode {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 9999;
  }

  .wrap-qrcode {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: .7;
    filter: alpha(opacity=70);
  }

  .qrcode {
    width: 9rem;
    position: absolute;
    top: 1rem;
    left: 50%;
    margin-left: -4.5rem;
    background-color: white;
  }

  .qrcode p {
    color: #333;
    line-height: 1rem;
    font-size: 14px;
    font-weight: bold;
    font-family: " Tahoma ", " Microsoft YaHei ", " Helvetica Neue ", Arial, HelveticaNeue, Helvetica-Neue, Helvetica, " BBAlpha Sans ", sans-serif;
  }

  .qrcode p.top {
    padding-left: .5rem;
    text-align: left;
  }

  .qrcode p.bottom {
    padding-right: .5rem;
    text-align: right;
  }

  .qrcode img {
    display: block;
    width: 5rem;
    height: 5rem;
    padding: 1rem 2rem;
    border-top: solid 1px #dddddd;
    border-bottom: solid 1px #dddddd;
  }

  @keyframes icon-bounce {
    0%, 100% {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    50% {
      -moz-transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }

    75% {
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
    }

    85% {
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -webkit-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
  }

  @-webkit-keyframes icon-bounce {
    0%, 100% {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    25% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    50% {
      -moz-transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }

    75% {
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
    }

    85% {
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -webkit-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
  }

  @-moz-keyframes icon-bounce {
    0%,
    100% {
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    25% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    50% {
      -moz-transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    75% {
      -moz-transform: rotate(5deg);
      -ms-transform: rotate(5deg);
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
    }
    85% {
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -webkit-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
  }

  @keyframes moveUp {
    0% {
      top: 0rem;
    }
    100% {
      top: -2.4rem;
    }
  }

  @-webkit-keyframes moveUp {
    0% {
      top: 0rem;
    }
    100% {
      top: -2.4rem;
    }
  }

  @-moz-keyframes moveUp {
    0% {
      top: 0rem;
    }
    100% {
      top: -2.4rem;
    }
  }


</style>
