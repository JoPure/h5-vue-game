<template>
  <tr>
    <td>
      <p class="coupon-title">{{gift.title}}</p>
      <p class="coupon-desc">{{gift.content}}
        <a href="javascript:;" @click="more">更多</a></p>
      <div class="coupon-progress">
        <div class="coupon-progress-bar" style="width: 20%"></div>
      </div>
      <p class="coupon-remain">礼包剩余 : {{gift.sum - gift.getCount}}个</p>
      <div class="gift-type-2016082401" style="display: none"></div>
    </td>
    <td style="width:25%;text-align:right;">
      <span class="btn btn-default coupon-status" @click="receive">领号</span>
    </td>
  </tr>
</template>
<script>
  import MessageBox from 'vue-msgbox';

  export default{
    props: {
      gift: {
        type: Object,
        required: true
      },
      gameId: {
        type: Number
      }
    },
    methods: {
      more: function () {
        let txt = this.gift.content;
        MessageBox.alert(txt).then(function () {
        });
      },
      receive: function () {
        this.gift.gameId = this.gameId;
        this.$store.dispatch('requestCode', this.gift)
      }
    }
  }
</script>
<style lang="scss">

  .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd
  }

  .table > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd
  }

  td {
    vertical-align: middle !important;
  }

  .coupon-progress {
    max-width: 100%;
    overflow: hidden;
    display: block;
    height: 10px;
    margin: 3px 0px;
    background-color: #f5f5f5;
    border-radius: 2px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);

  .coupon-progress-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 10px;
    color: #fff;
    text-align: center;
    background-color: #2697FC;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;
  }

  }

  .coupon-title {
    font-size: 14px;
    font-weight: 700;
  }

  .coupon-desc {
    font-size: .75em;
    line-height: 1.2;
    color: #999;
  }

  .coupon-remain {
    font-size: 12px;
    color: #999;
  }

  .coupon-status {
    display: inline-block;
    color: #777;
    margin-left: 3px;
  }

  .btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
  }

  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid #d9d9d9;
    background-image: none;
    white-space: nowrap;
    padding: 4px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

</style>
