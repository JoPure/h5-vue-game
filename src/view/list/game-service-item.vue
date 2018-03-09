<template>
  <div class="media game-list-item">
    <div class="media-left media-middle">
      <img class="media-object game-icon" v-bind:src="games.icon">
    </div>
    <div class="media-body">
      <p class="game-title">{{games.title}}</p>
      <p class="game-desc">{{games.zoneName}}</p>
    </div>
    <div class="media-right media-middle">
      <div class="open-minute" v-if="isOpen(games)">{{openMsg(games)}}</div>
      <div class="btn-play btn-sm game-enter-button" v-if="isOpen(games)">进入
      </div>
      <div class="open-time" v-if="!isOpen(games)">{{games.openTime}}</div>
    </div>

  </div>
</template>
<script>
  export default{
    props: {
      games: {
        type: Object,
        required: true
      }
    },
    methods: {
      isOpen: function (games) {
        var now = new Date();
        var serviceOpenTime = games.openTime;
         var openTime = new Date(Date.parse(serviceOpenTime.replace(/-/g, "/")));
        if (now.getTime() < openTime.getTime()) {
          return false;
        } else {
          return true;
        }
      },
      openMsg: function (games) {
        var now = new Date();
        var serviceOpenTime = games.openTime;
        var openTime = new Date(Date.parse(serviceOpenTime.replace(/-/g, "/")));

        if (now.getTime() < openTime.getTime()) {
          return '';
        } else {

          var hoursNow = now.getHours();
          var hoursOpen = openTime.getHours();

          if (hoursNow > hoursOpen) {
            return "已开服" + (hoursNow - hoursOpen) + "小时";
          } else {
            var minutesNow = now.getMinutes();
            var minutesOpen = openTime.getMinutes();
            var minutes = minutesNow - minutesOpen;
            if (minutes == 0) {
              minutes = 1;
            }
            return "已开服" + minutes + "分钟";
          }
        }
      }
    }
  }


</script>
<style lang="scss">
  @import "../../assets/scss/public.scss";

  .open-minute {
    font-size: 12px;
    color: #999;
    position: absolute;
    right: 75px;
    top: 20px;
  }

</style>
