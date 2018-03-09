<template>
  <section class="box hot-game-list">
    <span-item :title="hotTitle" :icon="3" :choose="1" id="0"></span-item>
    <div class="glist hot-game-box">
      <ul>
        <li v-for="game in games" v-bind:data-gameId="game.gameId">
          <router-link :to="{name:'detail',query: {gameId:game.gameId}}">
            <img :src='game.icon'>
            <p>{{game.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import spanItem from '../components/span-item.vue'

  export default{
    data(){
      return {
        hotTitle: '热门精选'
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
    methods: {}
  }

</script>
<style>
  li {
    float: left;
    width: 22%;
    height: 85px;
    overflow: hidden;
    text-align: center;
    line-height: 2;
    font-size: 12px;
  }

  li img {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 10px;
  }

  li p {
    font-size: 12px;
  }


</style>
