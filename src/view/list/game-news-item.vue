<template>
  <div class="media game-list-item">
    <div class="media-body new-list">
      <a v-bind:href='news.linkUrl'>
        <p class="game-title new-title">
          <news-tag v-for="tag in news.labels" :tag="tag"></news-tag>
        </p>
        <p class="game-new-title">{{news.title}}</p>
        <p class="media-right media-middle game-new-time">{{news.createTime}}</p>
      </a>
    </div>
  </div>
</template>
<script>
  import NewsTag from '../../components/news-tag.vue'
  export default{
    props: {
      news: {
        type: Object,
        required: true
      }
    },
    components: {
      NewsTag
    }
  }

</script>
<style lang="scss">
  @import "../../assets/scss/utils/_font-dpr.scss";
  @import "../../assets/scss/public.scss";
  @import "../../assets/scss/reset.css";

  .new-list {
    width: 85%;
    float: left;
  }

  .new-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
    line-height: 25px;
  }

  .game-new-title {
    color: #444;
    float: left;
    margin-left: 8px;
    @include font-dpr(14px);
    width: 70%;
    line-height: 25px;
  }

  .game-new-time {
    width: 12%;
    float: right;
    text-align: right;
    color: #999;
    line-height: 25px;
  }

  .open-time {
    width: 135px;
    font-size: 12px;
    color: #999;
    text-align: right;
  }

  .open-time-1 {
    width: 75px;
    @include font-dpr(12px);
    text-align: right;
  }


</style>
