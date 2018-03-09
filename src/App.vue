<template>
  <div id="app">
    <!--main-->
    <router-view>
    </router-view>
  </div>
</template>
<style>
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-color: #efeff4;
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #efeff4;
    font-family: 'Helvetica Neue', Arial, 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
    height: 100%;
  }

  #app {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    overflow:hidden;
    overflow-y:auto;
  }
</style>
