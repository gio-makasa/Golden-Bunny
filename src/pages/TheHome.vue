<template>
  <section id="home">
    <the-slider></the-slider>
    <meal-list listTitle="Most Popular"></meal-list>
    <day-meal></day-meal>
    <meal-list listTitle="Vegetarian"></meal-list>
    <meal-list listTitle="Dessert"></meal-list>
  </section>
</template>

<script setup>
import TheSlider from "../components/home/TheSlider.vue";
import MealList from "../components/home/mealList.vue";
import DayMeal from "../components/home/DayMeal.vue";
</script>

<style scoped>
#home {
  overflow: hidden;
  background-color: #333333;
}
</style>