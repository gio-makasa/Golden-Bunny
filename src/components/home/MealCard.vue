<template>
  <BaseSpinner v-if="loading" />
  <div class="mealCard" v-else>
    <img :src="this.meal.strMealThumb" alt="mealPhoto" />
    <h3>{{ meal.strMeal }}</h3>
    <div id="ingredients">
      <p v-for="i in 20" :key="i" v-show="meal['strIngredient' + i]">
        {{ meal["strIngredient" + i] }}; &#160;
      </p>
    </div>
  </div>
</template>

<script>
import BaseSpinner from "../BaseSpinner.vue";

export default {
  components: { BaseSpinner },
  data() {
    return {
      meal: {},
      loading: false,
    };
  },
  props: ["Category"],
  mounted() {
    if (this.Category == "Dessert" || this.Category == "Vegetarian") {
      this.loading = true;
      fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.Category
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          fetch(
            "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
              data.meals[Math.floor(Math.random() * data.meals.length)].idMeal
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              this.loading = false;
              this.meal = data.meals[0];
            });
        });
    } else {
      this.loading = true;
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.loading = false;
          this.meal = data.meals[0];
        });
    }
  },
};
</script>

<style scoped>
.mealCard {
  background-color: black;
  color: yellow;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  border-radius: 20px;
  overflow-x: hidden;
}
h3 {
  margin: 5px;
  max-height: 45px;
  overflow: auto;
}
#ingredients {
  color: orange;
  padding-left: 10px;
  padding-bottom: 10px;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}
h3::-webkit-scrollbar,
#ingredients::-webkit-scrollbar {
  width: 5px;
}
h3::-webkit-scrollbar-thumb,
#ingredients::-webkit-scrollbar-thumb {
  background-image: linear-gradient(to right, orange, yellow) !important;
  border-radius: 1px;
}
</style>