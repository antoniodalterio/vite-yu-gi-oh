<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppContentMain from './components/AppContentMain.vue';

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppContentMain,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppContentMain></AppContentMain>
</template>

<style></style>
