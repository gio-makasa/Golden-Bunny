<template>
  <header>
    <img src="../assets/logo.png" alt="logo" />
    <nav>
      <router-link to="/home">home</router-link>
      <router-link to="/review">review</router-link>
      <router-link to="/aboutus">about us</router-link>
    </nav>
    <div id="search">
      <input type="text" />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div v-if="this.loged" id="log">
      <router-link to="/" @click="logout">Log Out</router-link>
      <router-link to="/profile"
        ><img src="../assets/profile.png" alt="profile" id="profile"
      /></router-link>
    </div>
    <div v-else>
      <button @click="toggleSign('register')">register</button>
      <button id="logIn" @click="toggleSign('log')">Log In</button>
    </div>

    <the-sign
      @closesign="toggleSign"
      @loged="logedin"
      v-if="this.sign"
      :signinfo="this.modal"
    ></the-sign>
  </header>
</template>

<script>
import TheSign from "../components/TheSign.vue";

export default {
  components: {
    TheSign,
  },
  data() {
    return {
      sign: false,
      modal: "",
      loged: false,
    };
  },
  methods: {
    toggleSign(n) {
      this.modal = n;
      this.sign = !this.sign;
    },

    logedin() {
      this.loged = true;
      this.sign = false;
    },

    logout() {
      this.loged = false;
    },
  },
};
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
  position: relative;
  color: yellow;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  align-self: center;
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
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
}
input {
  border: none;
  background-color: transparent;
  outline: none;
  color: white;
  font-size: 16px;
}
#logIn {
  color: black;
  background-color: yellow;
  padding: 5px 10px;
  margin: 0 30px 0 10px;
  font-weight: 900;
  border-radius: 10px;
}
#log {
  display: flex;
}
#profile {
  width: 30px;
  height: auto;
  border-radius: 50px;
}
</style>