<template>
  <main>
    <AboutComponent :imglink="'src/assets/slides/light.jpg'" :side="'right'" />
    <AboutComponent :imglink="'src/assets/slides/dark.jpg'" :side="'left'" />
    <AboutComponent :imglink="'src/assets/slides/out.jpg'" :side="'right'" />
  </main>
</template>

<script setup>
import AboutComponent from "../components/aboutus/AboutComponent.vue";
</script>

<style scoped>
* {
  background-color: black;
}
</style>