<script>
import { store } from '../store.js';
import axios from 'axios';
import MainFound from './MainFound.vue';
import MainCardList from './MainCardList.vue';
export default {
  name: 'MainCards',
  components: {
    MainFound,
    MainCardList,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(store.apiUrl).then((response) => {
      store.cards = response.data.data;
      console.log(store.cards);
    });
  },
};
</script>
<template>
  <div class="container">
    <MainFound :found="store.cards.length"></MainFound>
    <section class="cards-container">
      <MainCardList></MainCardList>
    </section>
  </div>
</template>
<style scoped lang="scss">
.container {
  padding: 23px;
  background-color: white;

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
