<template>
    <table class="table table-model" >

      <tr data-id="week.gameId" v-for="week in weeks" >
        <td style="text-align:center;">
          <img class="table-model-pic" v-bind:src="week.icon">
        </td>
        <td>
          <div class="table-model-tit">{{week.title}}</div>
          <div class="table-model-tit">{{week.zoneName}}</div>
        </td>
        <td>
          <div class="table-model-con" style="text-align:right;">{{week.openTime}}</div>
        </td>
      </tr>
      <!--<week-service-item v-for="weekItem in weeks" :week="weekItem"></week-service-item>-->
    </table>
</template>
<script>
//  import weekServiceItem from './week-service-item.vue'

  export default{
    props: {
      weeks: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/table.scss";
</style>
