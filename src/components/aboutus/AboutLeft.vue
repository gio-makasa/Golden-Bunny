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
  height: 400px;
  overflow: hidden;
}
img {
  float: right;
  width: 40%;
  height: 100%;
}
#info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  text-align: center;
  color: orange;
  font-size: 2rem;
  background-color: black;
  transform: skewX(10deg);
  position: relative;
  left: 2.5rem;
  box-shadow: 5rem 0 0 rgba(0, 0, 0, 0.5);
}
p {
  width: 90%;
  z-index: 2;
}

@media screen and (max-width: 800px) {
  img, #info{
    width: 100%;
    font-size: medium;
    height: fit-content;
  }
  #info::before {
    display: none;
  }
}
</style>