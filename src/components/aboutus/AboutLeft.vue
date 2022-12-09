<template>
  <section id="about">
    <img :src="imglink" alt="photo" />
    <div id="info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis
        dolorum quia in excepturi! Soluta, placeat eos tempore, odit labore quo
        laborum in ullam dolor harum eveniet libero voluptates consectetur id
        temporibus. Laudantium aperiam delectus nemo maiores veniam in explicabo
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["imglink"],
};
</script>


<style scoped>
#about {
  background-color: black;
}
img {
  float: right;
  height: 400px;
  width: 40%;
}
#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  float: left;
  position: relative;
  width: 60%;
  height: 400px;
  text-align: center;
  margin: 0 auto;
  color: orange;
  font-size: 30px;
  padding: 30px;
  background-color: black;
}
p {
  width: 90%;
}
#info::before {
  position: absolute;
  top: 0;
  left: 95%;
  transform: skewX(10deg);
  content: "";
  width: 150px;
  height: 400px;
  background-color: black;
}
</style>