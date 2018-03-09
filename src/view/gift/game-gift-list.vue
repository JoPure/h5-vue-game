<template>
  <table class="table table-model">
    <tbody>
    <tr v-for="gift in gifts">
      <td style="text-align:center;">
        <img class="table-model-pic" v-bind:src="gift.icon">
      </td>
      <td>
        <div class="table-model-tit">{{gift.title}}</div>
        <div class="table-model-con" v-bind:data-text="gift.content">{{gift.content.substring(0,16)}}
          <a href="javascript:;" @click="more(gift)">更多</a>
        </div>
        <div class="table-model-pro">
          <i v-bind:style="{width:parseInt((gift.sum - gift.getCount) * 100 / gift.sum) ? parseInt((gift.sum - gift.getCount) * 100 / gift.sum) : 1 +'%' }"></i>
        </div>
        <div class="table-model-res" v-if="comeIn(gift)">{{message(gift)}}</div>
      </td>
      <td style="text-align:center;">
        <a href="javascript:;" v-if="comeIn(gift)" @click="receive(gift)"
           class="game-enter-button btn btn-default btn-sm">{{comeIn(gift)}}</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
  import MessageBox from 'vue-msgbox';

  export default{
    props: {
      gifts: {
        type: Array,
        required: true,
      }
    },
    methods: {
      more: function (gift) {
        let txt = gift.content;
        MessageBox.alert(txt).then(function () {
        });
      },
      receive: function (gift) {
        this.$store.dispatch('requestCode', gift);
      },
      comeIn: function (gift) {
        if (gift.sum - gift.getCount > 0) {
          return '领号';
        }
        else {
          if (gift.sum - gift.getCount == 0) {
            return '淘号'
          }
        }
      },
      message: function (gift) {
        if (gift.sum - gift.getCount > 0) {
          return "礼包剩余:" + (gift.sum - gift.getCount) + "个";
        }
        else {
          if (gift.sum - gift.getCount == 0) {
            return '礼包已经发完了，淘一个试试';
          }
        }
      },
    },
  }
</script>
