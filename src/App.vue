<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Beginner&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

* {
  /* font-family: "Dancing Script", cursive; */
  /* font-family: 'Edu SA Beginner', cursive; */
  font-family: 'Caveat', cursive;
  box-sizing: border-box;
  margin: 0;
}

body{
  background-color: #333333;
}
</style>