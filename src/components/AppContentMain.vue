<script>
import MainCards from './MainCards.vue';
import axios from 'axios';
import { store } from '../store.js';
import AppHeader from './AppHeader.vue';

export default {
  name: 'MainContent',
  components: {
    MainCards,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(store.archetypeApi).then((response) => {
      store.archetype = response.data;
    });
  },
  methods: {
    search() {
      axios
        .get(`${store.apiUrl}&archetype=${store.status}`)
        .then((response) => {
          store.cards = response.data.data;
        });
    },
  },
};
</script>
<template>
  <section>
    <!-- contenitore Select -->
    <div class="container">
      <form @submit.prevent="">
        <select
          name="type-cards"
          id="type-card"
          v-model="store.status"
          @click="search()"
        >
          <option value="">Select Archetype</option>
          <option v-for="op in store.archetype" :value="op.archetype_name">
            {{ op.archetype_name }}
          </option>
        </select>
      </form>
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
