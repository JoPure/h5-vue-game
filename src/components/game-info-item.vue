<template>
  <div class="media game-list-item">
    <router-link :to="{name:'detail',query: {gameId:game.gameId}}">
      <div class="media-left media-middle">
        <img class="media-object game-icon" v-bind:src="game.icon">
      </div>
      <div class="media-body" v-bind:data-gameId="game.id">
        <p class="game-title">
          {{game.title}}
          <game-tag v-for="tag in game.labels" :tag="tag"></game-tag>
        </p>
        <p class="game-desc">{{game.content}}</p>
      </div>
      <div class="media-right media-middle">
        <p class="game-time" v-show="">{{game.time}}</p>
        <a class="btn-play btn-sm game-enter-button" onclick="">进入</a>
      </div>
    </router-link>
  </div>
</template>
<script>
  import GameTag from './game-tag.vue'
  export default{
    props: {
      game: {
        type: Object,
        required: true
      }
    },
    components: {
      GameTag
    }
  }
</script>
