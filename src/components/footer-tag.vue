<template>
   <span
     :class="'icon-' + type">
    </span>
</template>
<script>
  export default {
    name: 'Tag',
    props: {
      type: String
    }
  };
</script>
