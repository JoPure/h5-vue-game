<template>
  <section id="lastPlayer-wraper" class="box lastPlayer-wraper">
    <span-item :title="myGame" :icon="1" :choose="2" id="3"></span-item>
    <div id="recentPlay-Box" class="glist recentPlay-Box">
      <ul>
        <li v-bind:data-gameId="game.gameId" v-for="game in games">
          <img :src='game.icon'>
          <p>{{game.title}}</p>
          <a class="playBtn" @click="play(game.gameId)">马上玩</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import spanItem from '../components/span-item.vue'
  import config from '../api/config'

  export default{
    data(){
      return {
        myGame: '最近在玩'
      }
    },
    props: {
      games: {
        type: Array,
        required: true
      }
    },
    components: {
      spanItem
    },
    methods: {
      play(gameId){
        window.location.href = config.loading + '?gameId=' + gameId;
        console.log(config.loading + '?gameId=' + gameId);
      }
    },
  }
</script>
<style lang="scss">
  .box {
    width: 100%;
    background: #fff;
  }

  .glist {
    position: relative;
    overflow: hidden;
  }

  .recentPlay-Box {
    height: 130px;
  }

  .recentPlay-Box ul li {
    height: 125px;
  }

  .glist ul {
    position: relative;
    width: 100%;
    margin-top: 8px;
  }

  .glist ul li {
    float: left;
    width: 24%;
    overflow: hidden;
    text-align: center;
    font-size: 1.2em;
    margin: 0 auto;
  }

  .glist ul li a img {
    width: 50px;
    height: 50px;
  }

  .glist p {
    font-size: 12px;
    color: #000;
  }

  .playBtn {
    border: 1px solid #f9752b;
    color: #f9752b;
    border-radius: 4px;
    padding: 1px 6px;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
  }

</style>
