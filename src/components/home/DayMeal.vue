<template>
  <div id="dayMeal">
    <h2>Meal of the Day</h2>
    <div id="meal">
      <img :src="this.meal.strMealThumb" alt="mealPhoto" />
      <div id="info">
        <h3>{{ meal.strMeal }}</h3>
        <div id="ingredients">
          <p v-for="i in 20" :key="i" v-show="meal['strIngredient' + i]">
            {{ meal["strIngredient" + i] }}; &#160;
          </p>
        </div>
        <p>Category: {{ meal.strCategory }}</p>
        <p>Area: {{ meal.strArea }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meal: {},
    };
  },
  mounted() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.meal = data.meals[0];
      });
  },
};
</script>

<style scoped>
#dayMeal {
  margin: 50px 0;
  height: fit-content;
  background-color: black;
}
#meal{
  display: flex;
}
h2 {
  color: yellow;
  padding: 10px;
  font-size: 40px;
}
img {
  float: left;
  width: 40%;
}
#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  float: right;
  position: relative;
  width: 60%;
  text-align: center;
  margin: 0 auto;
  color: orange;
  font-size: 30px;
  padding: 30px;
  background-color: black;
}
h3 {
  font-size: 50px;
  color: yellow;
  width: 70%;
}
#ingredients {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 20px;
  width: 70%;
}
#info::before {
  position: absolute;
  right: 90%;
  transform: skewX(-10deg);
  content: "";
  width: 25%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgb(0, 0, 0));
}
#info::after {
  position: absolute;
  top: 0;
  right: 90%;
  transform: skewX(-10deg);
  content: "";
  width: 18%;
  height: 100%;
  background-color: black;
}

@media screen and (max-width: 700px) {
  img{
    position: relative;
    width: 100%;
  }
  #info{
    position: absolute;
    width: 100%;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: small;
  }
  h3{
    font-size: large;
  }
  #info::before, #info::after{
    display: none;
  }
}
</style>