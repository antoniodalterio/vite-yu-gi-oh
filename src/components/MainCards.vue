<script>
import MainFound from './MainFound.vue';
export default {
  name: 'MainCards',
  components: {
    MainFound,
  },
};
</script>
<template>
  <div class="container">
    <MainFound></MainFound>
  </div>
</template>
<style scoped lang="scss">
.container {
  padding: 23px;
  background-color: white;
}
</style>
