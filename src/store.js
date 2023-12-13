import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  loading: true,
  cards: [],
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
  status: '',
  archetypeApi: 'https://db.ygoprodeck.com/api/v7/archetypes.php/',
  archetype: [],
});
