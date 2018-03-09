<template>
  <div class="game-coupon-content">

    <div id="game-gift">
      <p class="gift-title">{{title}}</p>
    </div>
    <table class="table table-model">
      <detail-gift-item v-for="gift in gifts" :gift="gift" :gameId="gameId"></detail-gift-item>
      <tr v-if="gifts.length <=0">
        <td class="desc-content">
          该游戏没有礼包
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  import detailGiftItem from './detail-gift-item.vue'
  export default{
   data(){
      return {
       gameId: null
      }
    },
    props: {
      gifts: {
        type: Array,
        require: true
      },
      title: {
        type: String,
        require: true
      }
    },
    compute(){
      this.gameId = this.$route.query.gameId;
    },
    components: {
      detailGiftItem
    }
  }

</script>

<style>

  .table-model {
    border-radius: 5px;
    background: #fff;
    max-width: 1170px;
    margin: 0px auto;
  }

  .gift-title {
    font-weight: 400;
    font-size: 12px;
    color: #9f9f9f;
    padding-top: 8px;
    padding-bottom: 4px;
    margin: 0 0 0 16px;
  }

  td.desc-content {
    padding: 2%;
    text-indent: 2em;
  }














</style>
