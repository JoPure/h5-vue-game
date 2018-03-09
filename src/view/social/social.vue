<template>
  <div class="wrap">
    <section class="social">
      请稍等,正在为您跳转中。。。
    </section>
    <site-footer></site-footer>
  </div>

</template>

<script>
  import siteFooter from '../../components/site-footer.vue'
  export default {
    components: {
      siteFooter
    },
    created(){
      window.location.href = 'http://xiaoqu.qq.com/mobile/barindex.html?bid=350398&amp;from=weixin';
    }
  }
</script>

<style>
  .social{
    max-width: 750px;
    margin: 0 auto;
    font-size: 18px;
    text-align: center;
  }
</style>
