<template>
    <span
      class="game-labels"
      :class="[tag ? 'labels-' + tag : '']">
      {{ tag == 1 ? '新游' : ( tag == 2 ? '活动' : '攻略')}}
    </span>
</template>
<script>
  export default {
    name: 'Tag',
    props: {
      tag: Number
    }
  };
</script>

<style lang="scss">

  .game-labels {
    margin-left: 1px;
    padding: 0 2px;
    margin: 0 2px;
    font-size: 12px;
    border-radius: 2px;
    position: relative;
    border: 1px solid #8492a6;
  }

  .game-labels.labels-0 {
    border-color: #1a7d03;
    color: #1a7d03;
  }

  .game-labels.labels-1 {
    color: #fd9b01;
    border-color: #fd9b01;
  }

  .game-labels.labels-2 {
    color: #6d16bf;
    border-color: #6d16bf;
  }

  .game-labels.labels-3 {
    color: #2697FC;
    border-color: #2697FC;
  }

  .game-labels.labels-4 {
    border-color: #1a7d03;
    color: #1a7d03;
  }
</style>
