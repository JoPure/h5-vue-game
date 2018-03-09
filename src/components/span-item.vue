<template>
  <div class="banner-title">
    <span :class="'tip-' + icon"></span>
    <h2 class="tit">
      <a href="">{{title}}</a>
    </h2>
    <router-link :to="{ path: '/list' ,  query: {id:id}}">
      <span :class="'more-' + choose"></span>
    </router-link>
  </div>
</template>
<script>
  export default{
    props: {
      id:{
        type:String,
        required:true
      },
      title: {
        type: String,
        required: true
      },
      icon: {
        type: Number,
        required: true
      },
      choose: {
        type: Number,
        required: true
      }
    }
  }


</script>
<style>
  .banner-title {
    font-size: 14px;
    color: #535252;
    height: 18px;
    line-height: 18px;
    padding-top: 4px;
    padding-bottom: 10px;
    text-align: left;
    position: relative;
    border-bottom: 1px solid #ddd;
    padding-left: 14px;
  }

  .banner-title h2 {
    float: left;
    margin-left: 4px;
    font-size: 16px;
    font-family: "Microsoft Yahei", tahoma, Arial, sans-serif;
  }

  .banner-title a {
    color: #535252;
    display: block;
  }

  .more-1 {
    width: 42px;
    height: 12px;
    float: right;
    background: url(../assets/img/more.png) no-repeat;
    background-size: contain;
    margin-right: 8px;
    margin-top: 2px;
  }

  .more-2 {
    width: 22px;
    height: 11px;
    float: right;
    background: url(../assets/img/more-1.png) no-repeat;
    background-size: contain;
    margin-right: 20px;
    margin-top: 6px;
  }

  .tip-1 {
    width: 24px;
    height: 15px;
    float: left;
    background: url(../assets/img/tip1.png) no-repeat;
    background-size: contain;
    margin-top: 3px;
  }

  .tip-2 {
    width: 18px;
    height: 19px;
    float: left;
    background: url(../assets/img/tip2.png) no-repeat;
    background-size: contain;
  }

  .tip-3 {
    width: 19px;
    height: 20px;
    float: left;
    background: url(../assets/img/tip3.png) no-repeat;
    background-size: contain;
    margin-right: 4px;
  }

  .tip-4 {
    width: 24px;
    height: 20px;
    float: left;
    background: url(../assets/img/tip4.png) no-repeat;
    background-size: contain;
  }



</style>
