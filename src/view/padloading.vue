<template>


</template>

<script>

  wanGameUtil.ready();
  var pay_Info = wanGameUtil.getQueryVars();
  var pay_data = {
    userId: pay_Info.userId,
    gameOrderId: pay_Info.egretOrderId,
    roleId: 0,
    level: 0,
    gameZoneId: "",
    money: pay_Info.money,
    currency: 'CNY',
    productDesc: decodeURIComponent(pay_Info.goodsName),
    redirectUrl: pay_Info.gameUrl,
    appId: pay_Info.channelExt,
    sdkVersion: '',
    version: '',
    appExt: pay_Info.ext
  };
  router.push('/pay' + '?' + wanGameUtil.encodeParam(pay_data));
  //  document.location.href = wanGameUtil.urls.development.payPage + '?' + wanGameUtil.encodeParam(pay_data);
</script>
