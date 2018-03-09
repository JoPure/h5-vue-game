<template>
  <div id="wrap">
    <div id="game-desc-main" class="game-desc-main">
      <user :user="userMessage"></user>

      <detail-info-item :detail="gameInfo" :title="gameInfoTitle" :gameId="gameId"></detail-info-item>

      <!--游戏礼包-->
      <div class="gift-main">
        <detail-gift-list :gifts="gift" :title="giftTitle"></detail-gift-list>
      </div>

      <!--近期热门-->
      <div class="hot-main">
        <game-icon-list :games="recommends" :title="hotGameTitle"></game-icon-list>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import user from '../../../components/userInfo.vue'
  import detailInfoItem from '../detail/detail-info-item.vue'
  import gameIconList from '../../../components/game-icon-list.vue'
  import detailGiftList from '../detail/detail-gift-list.vue'
  import siteFooter from '../../../components/site-footer.vue'

  export default{
    data(){
      return {
        gameInfoTitle: '游戏内容',
        giftTitle: '游戏礼包',
        hotGameTitle: '近期热门',
        gameId: this.$route.query.gameId
      }
    },
    computed: mapGetters({
      userMessage: 'getUserMessage',
      recommends: 'getRecommends',
      gameInfo: 'getGameInfo',
      gift: 'getDetailGift'
    }),
    mounted(){
      this.$store.dispatch('requestGameDetail', this.$route.query.gameId)
    },
    components: {
      detailInfoItem, gameIconList, detailGiftList, user,siteFooter
    }
  }


</script>
<style>

  .game-desc-main {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 640px;
    padding-bottom:50px;
  }

  .hot-main,
  .gift-main {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: auto;
    background-color: #efeff4;
  }

  .hot-title {
    font-weight: 400;
    font-size: 12px;
    color: #9f9f9f;
    padding-top: 8px;
    padding-bottom: 4px;
    margin: 0 0 0 16px;
  }

  .hot-Box {
    position: relative;
    width: 99.8%;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ddd;
  }



</style>
