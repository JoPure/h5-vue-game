<template>
  <div id="wrap">
    <section id="profile" class="userMessage-wrap section">
      <div class="user-detail">
        <p class="user-id">ID:{{user.userId}}</p>
        <a class="fun-btn" @click="logOut">登出</a>
        <a class="fun-btn" @click="logIn" v-if="showLoginBtn">登录</a>
        <div class="user-photo-box">
          <img class="user-photo photo" v-bind:src="user.icon ? user.icon : defaultImageSrc">
        </div>
        <div class="user-name  user-name-bg">{{user.nickName ? decodeURIComponent(user.nickName) : "7道爱游"}}</div>
        <div class="user-level user-level-bg">积分{{user.point}}</div>
        <div class="user-level-detail"></div>
      </div>

      <div class="tab-content">
        <div class="menu-content">
          <ul>
            <li><a @click="res">
              <img src="../../assets/img/icon_friends.png"></a>

              <p>好友</p></li>
            <li><a @click="res">
              <img src="../../assets/img/icon_sign.png"></a>

              <p>签到</p></li>
            <li><a @click="res">
              <img src="../../assets/img/icon_download.png"></a>
              <p>下载APP</p></li>
          </ul>
        </div>
        <!--最近在玩-->
        <game-icon-list :title="lastPlayGameTitle" :games="recentGames"></game-icon-list>
      </div>
    </section>
    <site-footer></site-footer>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import MessageBox from 'vue-msgbox';
  import config from '../../api/config';
  import api from '../../api/index';
  import sign from '../../utils/login/sign';
  import localstorage from '../../utils/login/localStorage';
  import GameIconList from '../../components/game-icon-list.vue'
  import siteFooter from '../../components/site-footer.vue'

  export default{
    name: 'home',
    data(){
      return {
        defaultImageSrc:'http://sdk-test.changic.net.cn:2580/img/default_headimg.png',
        lastPlayGameTitle: '最近在玩',
        showLoginBtn:false,
        user: {
          type: Object,
          request: true
        }
      }
    },
    computed: mapGetters({
      user: 'getUserMessage',
      recentGames: 'getRecentGames'
    }),
    components: {
      GameIconList, siteFooter
    },

    created(){
      if(localStorage.getItem('userId')){
        this.showLoginBtn =false;
      }else{
      this.showLoginBtn =true;
      }
    },
     mounted(){
      this.$store.dispatch('requestRecentPayGames');
    },
    methods: {
      res: function () {
        alert('正在开发中,敬请期待');
      },
      logIn:function(){
          router.push({path: 'login'});
      },
      logOut: function () {
        let signature = sign.create({userId: localStorage.getItem('userId')});
        if (confirm("是否退出？")) {
          api.get({
            url: '/7wan/game/logout',
            data: {
              userId: localStorage.getItem('userId'),
              sign: signature
            },
            success: function (responseData) {
              localStorage.clear();
              router.push('/login');
            },
            error: function (err) {
              alert('请求失败');
            }
          });
        }
      }
    }
  }














</script>
<style>
  .userMessage-wrap {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 40px;
    height: 100%;
    min-height: 16.5rem;
  }

  .userMessage-wrap .menu-content {
    width: 100%;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-bottom: 90px;
  }

  .userMessage-wrap .menu-content ul {
    list-style-type: none;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .userMessage-wrap .menu-content ul li {
    width: 33.33%;
    height: 80px;
    padding-top: 10px;
    float: left;
    background-color: #fff;
    overflow: hidden;
    text-align: center;
  }

  .userMessage-wrap .menu-content ul li a img {
    width: 50px;
    height: 50px;
  }

  .userMessage-wrap .menu-content ul li p {
    font-size: 12px;
  }

  .userMessage-wrap .section-title {
    font-weight: 400;
    font-size: 11px;
    color: #9f9f9f;
    padding-top: 4px;
    padding-bottom: 4px;
    margin: 0 0 0 16px;
  }

  .user-detail {
    display: block;
    height: 190px;
    text-align: center;
    background-image: url("../../assets/img/user-bg.jpg");
    position: relative;
  }

  .user-photo-box {
    width: 246px;
    margin: 0 auto;
    position: relative;
  }

  .user-photo-box .user-photo-bg {
    width: 50%;
    margin-top: 10px;
  }

  .user-photo-box .user-photo {
    position: absolute;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    padding: 2px;
    margin: 0 auto;
    top: 29px;
    left: 80px;
    display: inline-block;
  }

  .user-name-bg {
    border: 1px solid #fff;
    color: #eee;
    padding: 2px;
    border-radius: 3px;
  }

  .user-level-bg {
    border: 1px solid #fff;
    color: #eee;
    padding: 2px;
    border-radius: 3px;
  }

  .user-detail .user-name {
    position: absolute;
    top: 71%;
    right: 20%;
    text-align: center;
    display: inline-block;
    padding: 4px 3px;
    font-size: 15px;
    color: #eee;
    font-weight: 400;
    border-radius: 5px;
  }

  .user-id {
    display: inline-block;
    position: absolute;
    left: 0;
    margin: 5px;
    padding: 3px;
    color: #ddd;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .fun-btn {
    display: inline-block;
    position: absolute;
    right: 0;
    padding: 3px;
    color: #ddd;
    border-radius: 5px;
    line-height: 2;
    font-size: 14px;
    width: 40px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .user-level {
    text-align: center;
    position: absolute;
    top: 72%;
    left: 19%;
    padding: 2px 3px;
    vertical-align: middle;
    border-radius: 5px;
    font-size: 16px;
  }















</style>
