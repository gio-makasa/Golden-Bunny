<template>
  <header>
    <img src="../assets/logo.png" alt="logo" />
    <nav>
      <router-link to="/home">home</router-link>
      <router-link to="/review">review</router-link>
      <router-link to="/aboutus">about us</router-link>
    </nav>

    <div id="search">
      <input type="text" @input="searching" placeholder="Search..." v-model="meal" />
      <i class="fa-solid fa-magnifying-glass"></i>
      <div v-if="meal" id="results">
        <meal-result v-for="i in 10" :key="i" :imgsrc="mealsData[i].strMealThumb"
          :mealname="mealsData[i].strMeal"></meal-result>
      </div>
    </div>

    <div v-if="loged" id="loged">
      <router-link to="/" @click="logout">Log Out</router-link>
      <router-link to="/profile"><img src="../assets/profile.png" alt="profile" id="profile" /></router-link>
    </div>
    <div v-else id="log">
      <button @click="toggleSign('register')">register</button>
      <button id="logIn" @click="toggleSign('log')">Log In</button>
    </div>

    <the-sign @closesign="toggleSign" @loged="logedin" v-if="sign" :signinfo="modal"></the-sign>
  </header>
</template>

<script setup>
import { ref } from "vue";
import TheSign from "../components/TheSign.vue";
import MealResult from "./MealResult.vue";

const sign = ref(false);
const modal = ref("");
const loged = ref(false);
const meal = ref("");
const mealsData = ref([])

function toggleSign(n) {
  modal.value = n;
  sign.value = !sign.value;
}

function logedin() {
  loged.value = true;
  sign.value = false;
}

function logout() {
  loged.value = false;
}

function searching() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal.value)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      mealsData.value = data.meals;
    });
}
</script>

<style scoped>
header {
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  height: 60px;
  margin: auto 30px;
}

nav {
  display: flex;
  gap: 20px;
}

a,
button {
  font-family: "Dancing Script", cursive;
  position: relative;
  color: yellow;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}

.router-link-active::after {
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: yellow;
}

#search {
  width: fit-content;
  border-radius: 10px;
  background-color: white;
  padding: 5px;
}

input {
  font-family: "Edu SA Beginner", cursive;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
}

#results {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: absolute;
  left: 0;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 1% 0;
  margin: 1% 0;
}

#logIn {
  color: black;
  background-color: yellow;
  padding: 5px 10px;
  margin: 0 30px 0 10px;
  font-weight: 900;
  border-radius: 10px;
}

#loged {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#profile {
  width: 30px;
  height: fit-content;
  border-radius: 50px;
}

@media screen and (max-width: 910px) {
  header {
    flex-direction: column;
    padding-bottom: 10px;
  }

  #search {
    margin: 1rem;
  }

  #logIn {
    margin: 0;
  }

  img {
    margin: 0 10px;
  }
}
</style>