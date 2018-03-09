<template>
  <nav class="site-nav">
    <ul class="site-nav-list">
      <li class="site-nav-item with-text" v-for="menu in menuList">
        <router-link :to="menu.path">
          <footer-tag :type="menu.tag"></footer-tag>
          <p class="site-nav-text">{{menu.name}}</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
  import {mapGetters} from 'vuex'
  import footerTag from '../components/footer-tag.vue'

  export default{
    data(){
      let menuList = [
        {
          name: '游戏',
          path: '/index',
          tag: 'gamepad'
        },
        {
          name: '礼包',
          path: '/gift',
          tag: 'gift'

        },
        {
          name: '社交',
          path: '/social',
          tag: 'home3'
        },
        {
          name: '个人',
          path: '/person',
          tag: 'users'
        },
      ]
      return {menuList: menuList}
    },
    components: {
      footerTag
    }
  }

</script>
<style lang="scss">
  @import "../assets/scss/font.css";

  .site-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 640px;
    overflow: hidden;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    height: 40px;
    z-index: 999;
  }

  .site-nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    position: absolute;
    height: 100%;
    bottom: 0;
    border: 1px solid #ddd;
  }

  .site-nav-item {
    text-align: center;
    width: 25%;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    margin: 0 auto;
  }

  .site-nav-item.with-text {
    text-align: center;
    width: 24%;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
  }

  li.site-nav-item a {
    color: #888;
  }

  li.site-nav-item a.router-link-active {
    color: #fc7336;
  }

  .site-nav-text {
    font-weight: 600;
    font-size: 12px;
    line-height: 10px;
    margin: 0px;
    padding: 0px;
    text-transform: uppercase;
  }
</style>
