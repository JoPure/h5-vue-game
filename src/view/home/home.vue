<template>
  <div id="wrap">
    <!--注册消息-->
    <div class="wrap-container">
      <!--用户信息-->
      <userInfo :user="userMessage"></userInfo>
      <!--轮播-->
      <section class="container swiper-container">
        <swiper :options="swiperOption">
          <swiper-slide v-for="swiperPic in scroll">
            <a v-bind:href="swiperPic.linkUrl" target="_blank">
              <img v-bind:src="swiperPic.adPicUrl">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>

      <!--公告-->
      <section class="notice-box">
        <img src="../../assets/img/lb.png" class="notice-tips">
        <swiper :options="swiperOption2" class="notice-height">
          <swiper-slide v-for="notice in notices">
            <a v-bind:href="notice.linkUrl" target="_blank">
              {{notice.title}}
            </a>
          </swiper-slide>
        </swiper>
      </section>

      <!--最近在玩-->
      <game-icon-list :games="recentGames"></game-icon-list>
      <nav class="nav menuTab">
        <span class="tab-pic tab-last-hot" @click="person">
          <img src="../../assets/img/pic1.png">
        </span>
        <router-link :to="{ path: '/list' , query: {id:3}}">
            <span class="tab-pic tab-last-news">
          <img src="../../assets/img/pic2.png">
        </span>
        </router-link>
        <span class="tab-pic tab-last-info" @click="gift">
          <img src="../../assets/img/pic3.png">
        </span>
        <span class="tab-pic tab-last-cat" @click="tip">
          <img src="../../assets/img/pic4.png">
        </span>
      </nav>
      <div class="clear"></div>
      <!--热门精选-->
      <hot-game-list :games="hotGameList"></hot-game-list>
      <!--资讯-->
      <span-item :title="newsTitle" :icon="2" :choose="1" id="2"></span-item>
      <section class="container swiper-container">
        <swiper :options="swiperOption">
          <swiper-slide v-for="swiperPic in scrollMiddle">
            <a v-bind:href="swiperPic.linkUrl" target="_blank">
              <img v-bind:src="swiperPic.adPicUrl">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <div class="clear"></div>
      <!--最新小游戏-->
      <span-item :title="newTitle" :icon="4" :to="list" :choose="1" id="1"></span-item>
      <game-info-item v-for="gameItem in newGameList" :game="gameItem"></game-info-item>
      <router-link :to="{ path: '/list' , query: {id:1}}" class="morebtn">
        更多最新游戏>>
      </router-link>
    </div>
    <site-footer></site-footer>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import userInfo from '../../components/userInfo.vue'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import GameIconList from '../../components/game-icon-list.vue'
  import hotGameList from '../../components/hot-game-list.vue'
  import GameInfoItem from '../../components/game-info-item.vue'
  import spanItem from '../../components/span-item.vue'
  import siteFooter from '../../components/site-footer.vue'
  import api from '../../api/index'

  export default{
    name: 'home',
    data(){
      return {
        list: [],
        newsTitle: '资讯',
        newTitle: '最新小游戏',
        swiperOption: {
          pagination: '.swiper-pagination',
          autoplay: 3000,
        },
        swiperOption2:{
         pagination: '.swiper-pagination',
          paginationClickable: true,
          direction: 'vertical',
          autoplay: 3000,
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
        },
        user: {}
      }
    },
    mounted(){
      this.$store.dispatch('requestRecentPayGames');
      this.$store.dispatch('requestHotInfo');
      this.$store.dispatch('requestGetScrollPic');
      this.$store.dispatch('requestGetScrollPicMiddle');
      this.$store.dispatch('requestGetNotice');
      this.$store.dispatch('requestNewInfo');
    },
    components: {
      userInfo,
      GameIconList,
      hotGameList,
      GameInfoItem,
      swiper, swiperSlide,
      siteFooter,
      spanItem,
    },
    computed: mapGetters({
      userMessage: 'getUserMessage',
      scroll: 'getPic',
      scrollMiddle: 'getPicMiddle',
      notices: 'getNotice',
      recentGames: 'getRecentGames',
      hotGameList: 'getHotPlayGames',
      newGameList: 'getNewPlayGames',
    }),
    methods: {
      person: function () {
        router.push({path: '/person'});
      },
      gift: function () {
        router.push({path: '/gift'});
      },
      tip: function () {
        alert('正在开发中,敬请期待');
      },

    }
  }

</script>
<style lang="scss">
  #wrap {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  .wrap-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 45px !important;
  }

  .container:before {
    content: " ";
    display: table;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .swiper-slide img {
    width: 100%;
    max-width: 750px;
  }

  .clear {
    clear: both;
  }

  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }

  .grey-bg {
    background-color: #eee;
  }

  .mugen-scroll {
    padding: 10px;
    font-size: 18px;
  }

  .count {
    position: fixed;
    bottom: 10px;
    right: 10px;
    font-size: 18px;
  }

  .wrapper {
    max-width: 400px;
    height: 100px;
    margin: 0 auto;
    overflow-y: auto;
  }

  .nav {
    width: 100%;
    margin: 0 auto;
  }

  .menuTab {
    margin-top: 10px;
  }

  .menuTab span {
    display: block;
    float: left;
    width: 25%;
  }

  .menuTab span img {
    width: 100%;
  }

  .user-tab-bar li.gift-tab {
    width: 30%;
  }

  .morebtn {
    display: block;
    width: 50%;
    height: 28px;
    text-align: center;
    line-height: 28px;
    font-size: 1.2em;
    background: #F7F7F7;
    border: 1px solid #D9D9D9;
    color: #6B6B6B;
    margin: 10px auto 0;
  }

  .notice-box {
    margin: 0 auto;
    height: 0.8rem;
    margin-top: -4px;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: inline-block;
    font-family: "Microsoft YaHei";
  }

  .notice-box img {
    width: 10%;
    display: block;
    float: left;
    position: relative;
  }

  .notice-height {
    line-height: .8rem;
    padding-left: 18px;
  }

  .notice-box .swiper-slide a {
    text-decoration: none;
    color: #fc7336;
    display: inline-block;
    overflow: hidden;
    padding: 0;
  }


</style>
