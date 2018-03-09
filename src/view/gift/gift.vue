<template>
  <div id="wrap">
    <div class="gift-wraper">
      <userInfo :user="userMessage"></userInfo>
      <div class="gift-container">
        <!--tab面板切换-->
        <ul class="nav user-tab-bar">
          <li class="user-tab" :class="[currentTabIndex == 0 ? 'active': '']"><span
            v-on:click="switchTab(0)">礼包列表</span></li>
          <li class="user-tab" :class="[currentTabIndex == 1 ? 'active': '']"><span
            v-on:click="switchTab(1)">今日开服</span>
          </li>
          <li class="user-tab" :class="[currentTabIndex == 2 ? 'active': '']"><span
            v-on:click="switchTab(2)">未来一周</span>
          </li>
        </ul>
        <div class="clear"></div>
        <!--礼包列表-->
        <div class="gifts-list-container gift-list" ref="gifts-list-container" v-show="currentTabIndex == 0">
          <game-gift-list :gifts="giftList"></game-gift-list>
          <infinite-loading :on-infinite="fetchGiftList" ref="giftListInfiniteLoading">
           <span slot="no-more" class="no-more">
           没有更多了 :(
          </span>
          </infinite-loading>
        </div>

        <!--今日开服-->
        <div class="dayopen-list-container gift-list " v-show="currentTabIndex == 1">
          <day-service-list :days="dayList"></day-service-list>
          <infinite-loading :on-infinite="fetchDayList" ref="dayListInfiniteLoading">
           <span slot="no-more" class="no-more">
           没有更多了 :(
          </span>
          </infinite-loading>
        </div>

        <!--未来一周-->
        <div class="weekopen-list-container gift-list" v-show="currentTabIndex == 2">
          <week-service-list :weeks="weekList"></week-service-list>
          <infinite-loading :on-infinite="fetchWeekList" ref="weekListInfiniteLoading">
           <span slot="no-more" class="no-more">
           没有更多了 :(
          </span>
          </infinite-loading>
        </div>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import userInfo from '../../components/userInfo.vue'
  import GameGiftList from './game-gift-list.vue'
  import DayServiceList from './day-service-list.vue'
  import WeekServiceList from './week-service-list.vue'
  import siteFooter from '../../components/site-footer.vue'
  import api from '../../api/index'
  import InfiniteLoading from 'vue-infinite-loading';

  export default{
    name: 'gift',
    data(){
      return {
        pageData: {
          pageSize: 10,
          dayPageSize:15,
          weekPageSize:15,
          giftCurrentPage: 1,
          dayCurrentPage: 1,
          weekCurrentPage: 1
        },
        currentTabIndex: 0,
        giftList: [],
        dayList: [],
        weekList: []
      }
    },
    computed: mapGetters({
      userMessage: 'getUserMessage',
    }),
    methods: {
      switchTab(index){
        this.currentTabIndex = index;
      },
      //礼包列表
      fetchGiftList(){
        let _this = this;
        api.get({
          url: '/7wan/gift/list',
          data: {
            page: _this.pageData.giftCurrentPage,
            pageSize: _this.pageData.pageSize,
            type: 0
          },
          success: function (responseData) {
            if (responseData.data) {
              _this.giftList = _this.giftList.concat(responseData.data);
              _this.pageData.giftCurrentPage++;
              _this.$refs.giftListInfiniteLoading.$emit('$InfiniteLoading:loaded');
            } else {
              _this.$refs.giftListInfiniteLoading.$emit('$InfiniteLoading:complete');
            }
          },
          error: function (err) {
            console.log('error');
          }
        })
      },
      //今日开服
     fetchDayList(){
        let _this = this;
        api.get({
          url: '/7wan/gameZoneList',
          data: {
            page: _this.pageData.dayCurrentPage,
            pageSize: _this.pageData.dayPageSize,
            type: 1
          },
          success: function (responseData) {
            if (responseData.data) {
              _this.dayList = _this.dayList.concat(responseData.data);
              _this.pageData.dayCurrentPage++;
              _this.$refs.dayListInfiniteLoading.$emit('$InfiniteLoading:loaded');

            } else {
              _this.$refs.dayListInfiniteLoading.$emit('$InfiniteLoading:complete');
            }
          },
          error: function (err) {
            console.log('error');
          }
        })
      },
      //未来一周
      fetchWeekList(){
        let _this = this;
        api.get({
          url: '/7wan/gameZoneList',
          data: {
            page: _this.pageData.weekCurrentPage,
            pageSize: _this.pageData.weekPageSize,
            type: 2
          },
          success: function (responseData) {
            if (responseData.data) {
              _this.weekList = _this.weekList.concat(responseData.data);
              _this.pageData.weekCurrentPage++;
              _this.$refs.weekListInfiniteLoading.$emit('$InfiniteLoading:loaded');

            } else {
              _this.$refs.weekListInfiniteLoading.$emit('$InfiniteLoading:complete');
            }
          },
          error: function (err) {
           console.log('error');
          }
        })
      },
    },
    components: {
      userInfo, GameGiftList, DayServiceList, WeekServiceList, siteFooter, InfiniteLoading
    }
  }

</script>
<style lang="scss">
  .gift-wraper {
    width: 100%;
    margin: 0px auto;
  }

  .gift-container {
    margin: 0px auto;
  }

  .gift-list {
    height: 15rem;
    overflow-y: auto;
    padding-bottom: 22px;
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

  .gift-wraper .nav {
    width: 100%;
    height: 40px;
    border-top: 0;
    background-color: #fff;
    text-align: center;
  }

  .gift-wraper .user-tab-bar {
    margin-bottom: 1px;
    padding-left: 0;
    list-style: none;
    clear: both;
  }

  .gift-wraper .user-tab-bar li {
    width: 33%;
    height: 100%;
    margin-top: 7px;
    display: inline-block;
  }

  .gift-wraper .user-tab-bar li.active span {
    border-bottom: 2px solid #f9752b;
    color: #f9752b;
  }

  .gift-wraper .user-tab-bar li span {
    display: block;
    font-size: 16px;
    color: #888;
    margin: 0 8px;
    padding: 3px 0;
    text-align: center;
    position: relative;
  }

  .no-more {
    padding-bottom: 50px;
  }

</style>
