<template>
  <div id="wrap">
    <!--注册消息-->
    <div class="wrap-container">
      <!--轮播-->
      <userInfo :user="userMessage"></userInfo>
      <section class="container swiper-container">
        <swiper :options="swiperOption">
          <swiper-slide v-for="swiperPic in scroll">
            <a v-bind:href="swiperPic.linkUrl">
              <img v-bind:src="swiperPic.adPicUrl">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>

      <!--tab面板切换-->
      <ul class="nav listTab">
        <li class="user-tab" :class="[currentTabIndex == 0 ? 'active': '']">
          <span v-on:click="switchTab(0)">热门游戏</span></li>
        <li class="user-tab" :class="[currentTabIndex == 1 ? 'active': '']">
          <span v-on:click="switchTab(1)">新上架</span>
        </li>
        <li class="user-tab" :class="[currentTabIndex == 2 ? 'active': '']">
          <span v-on:click="switchTab(2)">资讯</span>
        </li>
        <li class="user-tab" :class="[currentTabIndex == 3 ? 'active': '']">
          <span v-on:click="switchTab(3)">新开服</span>
        </li>
      </ul>

      <!--热门游戏-->
      <div class="game-list" v-show="currentTabIndex == 0">
        <game-info-item v-for="gameItem in hotGameList" :game="gameItem"></game-info-item>
        <infinite-loading :on-infinite="fetHotGames" ref="hotGamesInfiniteLoading">
           <span slot="no-more">
            没有更多了 :(
           </span>
        </infinite-loading>
      </div>

      <!--新上架-->
      <div class="game-list" v-show="currentTabIndex == 1">
        <game-info-item v-for="gameItem in newGameList" :game="gameItem"></game-info-item>
        <infinite-loading :on-infinite="fetchNewGames" ref="newsGamesInfiniteLoading">
           <span slot="no-more">
              没有更多了 :(
          </span>
        </infinite-loading>
      </div>

      <!--新闻-->
      <div class="game-list" v-show="currentTabIndex == 2">
        <game-news-item v-for="newsItem in infoList" :news="newsItem"></game-news-item>
        <infinite-loading :on-infinite="fetchInfo" ref="infoListInfiniteLoading">
          <span slot="no-more">
          没有更多了 :(
          </span>
        </infinite-loading>
      </div>

      <!--新开服-->
      <div class="game-list" v-show="currentTabIndex == 3">
        <game-service-item v-for="openItem in gameZoneList" :games="openItem"></game-service-item>
        <infinite-loading :on-infinite="fetchGameZoneList" ref="gameZoneListInfiniteLoading">
           <span slot="no-more">
            没有更多了 :(
           </span>
        </infinite-loading>
      </div>
    </div>
    <div class="clear"></div>
    <site-footer></site-footer>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import userInfo from '../../components/userInfo.vue'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import GameIconList from '../../components/game-icon-list.vue'
  import GameInfoItem from '../../components/game-info-item.vue'
  import GameNewsItem from './game-news-item.vue'
  import GameServiceItem from './game-service-item.vue'
  import siteFooter from '../../components/site-footer.vue'
  import api from '../../api/index'
  import InfiniteLoading from 'vue-infinite-loading';

  export default{
    name: 'home',
    data(){
      return {
        list: [],
        lastPlayGameTitle: '最近在玩',
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000,
        },
        pageData: {
          pageSize: 10,
          newPageSize:20,
          newsPageSize:20,
          hotCurrentPage: 1,
          newsCurrentPage: 1,
          infoCurrentPage: 1,
          zoneCurrentPage: 1,
        },
        hotGameList: [],
        newGameList: [],
        infoList: [],
        gameZoneList: [],
        currentTabIndex: 0
      }
    },
    created(){
     var id = this.$route.query.id;
     this.currentTabIndex= id;
    },
    mounted(){
      this.$store.dispatch('requestBaseInfo');
    },
    components: {
      userInfo,
      GameIconList,
      GameInfoItem,
      GameNewsItem,
      GameServiceItem,
      swiper, swiperSlide,
      siteFooter,
      InfiniteLoading
    },
    methods: {
      switchTab(index){
        this.currentTabIndex = index;
      },
      //热门游戏
      fetHotGames() {
        let _this = this;
        console.log('fetchData');
        api.get({
          url: '/7wan/gameList',
          data: {
            userId: localStorage.getItem('userId'),
            timestamp: new Date().getTime(),
            page: _this.pageData.hotCurrentPage,
            pageSize: _this.pageData.pageSize,
            type: 0
          },
          success: function (responseData) {
            if (responseData.data) {
              _this.hotGameList = _this.hotGameList.concat(responseData.data);
              _this.pageData.hotCurrentPage++;
              _this.$refs.hotGamesInfiniteLoading.$emit('$InfiniteLoading:loaded');

            } else {
              _this.$refs.hotGamesInfiniteLoading.$emit('$InfiniteLoading:complete');
            }
          },
          error: function (err) {
            alert('error');
          }
        })
      },
      //新上架游戏
      fetchNewGames(){
        let _this = this;
        api.get({
          url: '/7wan/gameList',
          data: {
            userId: localStorage.getItem('userId'),
            timestamp: new Date().getTime(),
            page: _this.pageData.hotCurrentPage,
            pageSize: _this.pageData.newPageSize,
            type: 1
          },
          success: function (responseData) {
            if (responseData.data) {
              _this.newGameList = _this.newGameList.concat(responseData.data);
              _this.pageData.newsCurrentPage++;
              _this.$refs.newsGamesInfiniteLoading.$emit('$InfiniteLoading:loaded');

            } else {
              _this.$refs.newsGamesInfiniteLoading.$emit('$InfiniteLoading:complete');
            }
          },
          error: function (err) {
            alert('error');
          }
        })
      },
      //新闻
      fetchInfo(){
        let _this = this;
        api.get({
          url: '/7wan/infoList',
          data: {
            userId: localStorage.getItem('userId'),
            timestamp: new Date().getTime(),
            page: _this.pageData.infoCurrentPage,
            pageSize: _this.pageData.newsPageSize
          },
          success: function (responseData) {
            if (responseData.data) {
              _this.infoList = _this.infoList.concat(responseData.data);
              _this.pageData.infoCurrentPage++;
              _this.$refs.infoListInfiniteLoading.$emit('$InfiniteLoading:loaded');
            } else {
              _this.$refs.infoListInfiniteLoading.$emit('$InfiniteLoading:complete');
            }
          },
          error: function (err) {
            alert('error');
          }
        })
      },
      //新开服
      fetchGameZoneList(){
        let _this = this;
        api.get({
          url: '/7wan/gameZoneList',
          data: {
            userId: localStorage.getItem('userId'),
            timestamp: new Date().getTime(),
            page: _this.pageData.zoneCurrentPage,
            pageSize: _this.pageData.pageSize,
            type: 0
          },
          success: function (responseData) {
            if (responseData.data) {
              _this.gameZoneList = _this.gameZoneList.concat(responseData.data);
              _this.pageData.zoneCurrentPage++;
              _this.$refs.gameZoneListInfiniteLoading.$emit('$InfiniteLoading:loaded');

            } else {
              _this.$refs.gameZoneListInfiniteLoading.$emit('$InfiniteLoading:complete');
            }
          },
          error: function (err) {
            alert('error');
          }
        })
      },
    },
    mounted(){
      this.$store.dispatch('requestGetScrollPic');
    },
    computed: mapGetters({
      userMessage: 'getUserMessage',
      scroll: 'getPic',
    })
  }



</script>
<style lang="scss">

  .nav {
    width: 100%;
    height: 40px;
    border-top: 0;
    background-color: #fff;
    text-align: center;
  }

  .listTab {
    margin-bottom: 1px;
    padding-left: 0;
    list-style: none;
  }

  .listTab li {
    width: 25%;
    height: 100%;
    display: inline-block;
  }

  .game-list {
    background-color: #fff;
    text-align: left;
    height: 600px;
    overflow-y: auto;
  }

  .listTab li.active span {
    border-bottom: 2px solid #f9752b;
    color: #f9752b;
  }

  .listTab li span {
    display: block;
    font-size: 16px;
    color: #888;
    margin: 0 8px;
    padding: 3px 0;
    text-align: center;
    position: relative;
  }

</style>
