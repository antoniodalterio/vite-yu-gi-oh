<script>
export default {
  nome: 'MainFound',
  props: ['found'],
};
</script>
<template>
  <div>
    <h4>Found {{ found }} cards</h4>
  </div>
</template>
<style scoped lang="scss">
div {
  padding: 10px;
  background-color: #212529;
  color: white;
}
</style>
