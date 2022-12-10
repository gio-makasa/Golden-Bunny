<template>
  <footer>
    <div id="info">
      <div id="lists">
        <ul>
          <li>navigation:</li>
          <li>
            <router-link to="/home">home</router-link>
          </li>
          <li>
            <router-link to="/review">review</router-link>
          </li>
          <li>
            <router-link to="/aboutus">about us</router-link>
          </li>
        </ul>
        <ul>
          <li>contact:</li>
          <li>phone: +995123654789</li>
          <li>e-mail: tester@tester.com</li>
          <li>address: tester st. 88</li>
        </ul>
      </div>
      <div id="newsletter">
        <h2>newsletter:</h2>
        <div id="input">
          <input type="email" placeholder="Enter E-mail" />
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.97337362558!2d62.18649790829002!3d52.479201198471515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d2a2f6252b363d%3A0x82fa95ca394f2e6f!2sLisakovsk%20Pentagram!5e0!3m2!1sen!2sge!4v1669714922592!5m2!1sen!2sge"
      width="50%"
      height="300"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <p id="rigths">All rights reserved 2022 &#169;</p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#info {
  background-color: black;
  color: yellow;
  float: left;
  width: 50%;
  height: 300px;
}
#lists {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  text-transform: uppercase;
}
ul {
  list-style: none;
  text-align: center;
  padding: 0;
}
li:first-child {
  font-size: 150%;
  margin: 10px;
}
li {
  font-size: 100%;
  margin: 5px;
}
a {
  color: yellow;
  text-decoration: none;
}
#newsletter {
  width: fit-content;
  margin: auto;
  text-align: center;
}
h2 {
  font-size: 40px;
}
iframe {
  float: right;
}
#input {
  padding: 10px;
  border-radius: 50px;
  border: 2px solid white;
  width: fit-content;
}
input {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
}
i {
  cursor: pointer;
}
#rigths {
  float: right;
  text-align: center;
  width: 100%;
  height: fit-content;
  background-color: black;
  color: yellow;
  bottom: 0;
  left: 0;
  font-size: 20px;
}

@media screen and (max-width: 910px) {
  #info, iframe{
    width: 100%;
  }
}
</style>