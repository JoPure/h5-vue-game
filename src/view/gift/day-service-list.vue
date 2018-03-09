<template>
  <table class="table table-model">
    <tr v-for="day in days">
      <td style="text-align:center;">
        <img class="table-model-pic" v-bind:src="day.icon">
      </td>
      <td>
        <div class="table-model-tit">{{day.title}}</div>
        <div class="table-model-tit">{{day.zoneName}}</div>
      </td>
      <td>
        <span class="table-model-con" style="text-align:right;" v-if="isOpen(day)">{{openMsg(day)}}</span>
        <div class="btn-play btn-sm game-enter-button" v-if="isOpen(day)"
             style="text-align:right;">进入
        </div>
        <div class="table-model-con" style="text-align:right;"
             v-if="!isOpen(day)">{{day.openTime}}
        </div>
      </td>
    </tr>
  </table>
</template>
<script>

  export default{
    props: {
      days: {
        type: Array,
        required: true,
      }
    },
    methods: {
      isOpen: function (day) {
        var now = new Date();
        var serviceOpenTime = day.openTime;
        var openTime = new Date(Date.parse(serviceOpenTime.replace(/-/g, "/")));

        if (now.getTime() < openTime.getTime()) {
          return false;

        } else {
          return true;
        }
      },

      openMsg: function (day) {
        var now = new Date();
        var serviceOpenTime = day.openTime;
        var openTime = new Date(Date.parse(serviceOpenTime.replace(/-/g, "/")));

        if (now.getTime() < openTime.getTime()) {
          return '';
        } else {
          var hoursNow = now.getHours();
          var hoursOpen = openTime.getHours();
           console.log(hoursNow,hoursOpen);
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
