<template>
  <!--游戏详情-->
  <div class="detail-info">
    <div class="header-main">
      <div class="header">
        <img class="game-background" v-bind:src="detail.bgImage">
        <div class="header-bar"></div>
        <img class="game-icon" v-bind:src="detail.icon">
        <p class="game-name">{{detail.title}}</p>
        <p class="short-desc">{{detail.content}}</p>

        <a class="start-btn" role="button" external="true" @click="play(gameId)">开 始</a>
      </div>
    </div>
    <!--游戏内容-->
    <div class="content-main">
      <p class="content-title">{{title}}</p>
      <div class="content-Box">
        <p class="desc-content">{{detail.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>


 import config from '../../../api/config'

  export default{
    props: {
      gameId:{
        type:Number,
        required:true
      },
      detail: {
        type: Object,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      play(gameId){
        window.location.href = config.loading + '?gameId=' + gameId;
        console.log(config.loading + '?gameId=' + gameId);
      }
    },
  }



</script>
<style>
  .header-main {
    position: relative;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
  }

  .header-main .header {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .header-main .header .header-bar {
    position: absolute;
    bottom: 3px;
    background-color: #000;
    opacity: .5;
    width: 100%;
    height: 40px;
  }

  .header-main .header img.game-background {
    width: 100%;
    max-width: 100%;
  }

  .header-main .header .game-icon {
    position: absolute;
    bottom: 4px;
    left: 10px;
    width: 55px;
    height: 55px;
  }

  .header-main .header .game-name {
    position: absolute;
    bottom: 22px;
    left: 72px;
    color: #fff;
    font-size: 14px;
  }

  .header-main .header .short-desc {
    position: absolute;
    bottom: 5px;
    left: 72px;
    color: #fff;
    font-size: 12px;
  }

  .header-main .header .start-btn {
    position: absolute;
    bottom: 9px;
    right: 3%;
    z-index: 11;
    border: 1px solid #f9752b;
    border-radius: 4px;
    padding: 4px 11px;
    color: #fff;
    background-color: #f9752b
  }

  .content-main {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: auto;
    background-color: #efeff4;
  }

  .content-title {
    font-weight: 400;
    font-size: 12px;
    color: #9f9f9f;
    padding-top: 8px;
    padding-bottom: 4px;
    margin: 0 0 0 16px;
  }

  .content-Box {
    position: relative;
    width: 99.8%;
    height: auto;
    overflow: hidden;
    border: 1px solid #ddd;
    background-color: #fff;
  }

  .content-Box .desc-content {
    background-color: #fff;
    font-size: 12px;
    padding: 2%;
    text-indent: 2em;
  }





</style>
