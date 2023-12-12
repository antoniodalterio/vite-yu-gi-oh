<script>
export default {
  nome: 'AppHeader',
};
</script>
<template>
  <header>
    <!-- contenitore img -->
    <div class="container-img">
      <img src="../assets/img/Yu-Gi-Oh.png" alt="logo" />
    </div>
    <!-- contenitore img -->
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>
<style scoped lang="scss">
header {
  padding: 20px;
  display: flex;
  background-color: white;
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
