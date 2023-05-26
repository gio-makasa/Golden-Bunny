<template>
  <div v-if="this.signinfo == 'log'">
    <i @click="$emit('closesign')" class="fa-solid fa-xmark"></i>
    <h2>Log In</h2>
    <form @submit.prevent="Login" id="Login">
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <button>Log in</button>
    </form>
  </div>

  <div v-else>
    <i @click="$emit('closesign')" class="fa-solid fa-xmark"></i>
    <h2>Register</h2>
    <form @submit.prevent="Register" id="Register">
      <input type="email" name="email" placeholder="E-mail" required />
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" minlength="6" required />
      <input id="Rpassword" type="password" name="Rpassword" placeholder="Repeat Password" minlength="6" required />
      <button>Register</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(["signinfo"]);
const emit = defineEmits(['loged', 'closesign'])
const router = useRouter();

const registerData = reactive({});
const email = ref("");
const password = ref("");

async function validation(info) {
  let val = true;

  if (info.password != info.Rpassword) {
    val = false;
    document.getElementById("Rpassword").style.boxShadow = "0 0 10px red";
  } else {
    document.getElementById("Rpassword").style.boxShadow = "0 0 10px yellow";
  }

  await fetch(
    `https://vue-http-demo-d0a90-default-rtdb.firebaseio.com/Registered/${info.email}.json`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data !== null) {
        val = false;
        alert("User Exists");
      }
    });

  return val;
}

function Register() {
  const myForm = document.getElementById("Register");
  const formData = new FormData(myForm);
  for (const [key, value] of formData) {
    registerData[key] = value;
  }

  validation(registerData).then((text) => {
    if (text) {
      fetch(
        `https://vue-http-demo-d0a90-default-rtdb.firebaseio.com/Registered/${registerData["email"]}.json`,
        {
          method: "POST",
          body: JSON.stringify(registerData),
        }
      );
      myForm.reset();
    }
  });
}

function Login() {
  fetch(
    `https://vue-http-demo-d0a90-default-rtdb.firebaseio.com/Registered.json`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (
        Object.keys(data).filter((emailData) => emailData == email.value).length == 0
      ) {
        alert("User does not exist");
      } else if (
        Object.values(data[email.value])[0]["password"] == password.value
      ) {
        emit("loged");
        localStorage.setItem(
          "username", Object.values(data[email.value])[0]["username"]
        );
        router.replace({ path: '/profile' })
      } else {
        alert("wrong password");
      }
    });
}
</script>

<style scoped>
div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  color: yellow;
  box-shadow: 0 0 10px yellow;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
}

.fa-xmark {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 20px;
  cursor: pointer;
  font-size: x-large;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

input {
  padding: 15px;
  box-shadow: 0 0 10px yellow;
  border-radius: 15px;
  font-size: x-large;
  border: none;
}

button {
  color: black;
  background-color: yellow;
  padding: 10px 15px;
  margin: 0 30px;
  font-weight: 900;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
}

@media screen and (max-width: 700px) {
  div {
    width: 100%;
  }
}
</style>