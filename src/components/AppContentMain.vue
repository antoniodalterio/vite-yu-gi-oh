<script>
import MainCards from './MainCards.vue';

export default {
  name: 'MainContent',
  components: {
    MainCards,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <section>
    <!-- contenitore Select -->
    <div class="container">
      <select name="type-cards" id="type-card" value="Alien">
        <option value="Alien">Alien</option>
      </select>
    </div>
    <!-- contenitore Select -->

    <MainCards></MainCards>
  </section>
</template>
<style scoped lang="scss">
section {
  select {
    width: 10%;
    border-radius: 5px;
    padding: 5px;
    margin: 20px 10px;
  }
}
</style>
