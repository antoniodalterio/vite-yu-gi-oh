<script>
import { store } from '../store';
export default {
  name: 'CardsList',
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="box" v-for="(card, index) in store.cards">
    <img :src="store.cards[index].card_images[0].image_url" alt="" />
    <div class="text">
      <p>{{ store.cards[index].name }}</p>
      <div>{{ store.cards[index].archetype }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  width: calc(100% / 5 - 20px);
  margin: 0 10px;
  margin-bottom: 20px;

  img {
    width: 100%;
    display: block;
  }

  .text {
    height: 100px;
    text-align: center;
    background-color: #d48f38;
    padding: 20px;

    p {
      margin-bottom: 20px;
    }
  }
}
</style>
