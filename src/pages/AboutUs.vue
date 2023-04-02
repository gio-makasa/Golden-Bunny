<template>
  <main>
    <about-right
      :imglink="require('@/assets/images/../../assets/slides/light.jpg')"
    ></about-right>
    <about-left
      :imglink="require('@/assets/images/../../assets/slides/dark.jpg')"
    ></about-left>
    <about-right
      :imglink="require('@/assets/images/../../assets/slides/out.jpg')"
    ></about-right>
  </main>
</template>

<script>
import AboutRight from "../components/aboutus/AboutRight.vue";
import AboutLeft from "../components/aboutus/AboutLeft.vue";

export default {
  components: { AboutRight, AboutLeft },
};
</script>

<style scoped>
* {
  background-color: black;
}
</style>