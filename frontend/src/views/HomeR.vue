<script setup>
import { ref, onMounted } from "vue";
import apiClient from "../services/api";

const message = ref("");

onMounted(() => {
  apiClient
    .get("/data")
    .then((response) => {
      message.value = response.data.message;
    })
    .catch((error) => console.error(error));
});
</script>

<template>
  <div id="HomeR">
    <h1>Bienvenue sur la page HomeR</h1>
    <p>{{ message }}</p>
  </div>
</template>
