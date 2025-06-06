<template>
  <h1 class="title">{{ message }}</h1>
  <div class="container">
    <div><h1>AAAAA</h1></div>
    <div><h1>BBBB</h1></div>
    <div><h1>CCCC</h1></div>
    <div><h1>DDDD</h1></div>
  </div>
</template>

<script>
export default {
  name: "NavbaRR",
  data() {
    return {
      message: "Bienvenue sur la page NavbaRR",
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  height: 100vh;
}
.title {
  font-size: 24px;
  color: #d60f0f;
}
</style>
