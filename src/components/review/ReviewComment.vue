<template>
  <div class="card" :class="{ right: right }">
    <img src="../../assets/profile.png" alt="profile" />
    <div class="info">
      <h3>{{ score }}/5</h3>
      <p>{{ comment }}</p>
      <h4>{{ userName }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment", "score", "userName", "right"],
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  width: 70%;
  background-color: #1e1e1e;
  padding: 10px;
  margin: 30px;
  border-radius: 20px;
  height: 150px;
  float: left;
}
img {
  height: 100%;
  border-radius: 20px;
}
.info {
  margin: auto;
  text-align: center;
  width: 100%;
}
h3 {
  text-align: end;
  color: yellow;
  font-size: 25px;
  margin: 0 20px;
}
p {
  color: white;
  font-size: 20px;
  margin: 10px;
}
h4 {
  color: yellow;
  font-size: 30px;
}
.right {
  float: right;
}
</style>