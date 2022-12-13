<template>
  <div class="aaa">{{ msg }}</div>
</template>
<script>
export default {
  name: "comAVue",
  data() {
    return {
      msg: "我是基座下发的",
    };
  },
};
</script>

<style scoped>
.aaa {
  color: red;
}
</style>
