<template>
  <div class="result">
    <img :src="imgsrc" alt="mealPhoto" />
    <h3>{{ mealname }}</h3>
  </div>
</template>

<script setup>
const props = defineProps(["imgsrc", "mealname"]);
</script>

<style scoped>
.result {
  width: 9%;
}

img {
  width: 100%;
  border-radius: 10px;
}

h3 {
  text-align: center;
}

@media screen and (max-width: 910px) {
  .result {
    width: 100px;
  }
}</style>