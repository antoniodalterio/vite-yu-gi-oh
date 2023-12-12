<script>
export default {
  nome: 'AppHeader',
};
</script>
<template>
  <header>
    <div class="container-img">
      <img src="../assets/img/Yu-Gi-Oh.png" alt="logo" />
    </div>

    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>
<style scoped lang="scss">
header {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  .container-img {
    width: 50px;

    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
