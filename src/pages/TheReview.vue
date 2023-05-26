<template>
  <section id="review">
    <BaseSpinner v-if="loading" />
    <review-comment v-else v-for="i in reviews" :key="i.id" :comment="i.comment" :score="i.score" :user-name="i.name"
      :right="right(i)"></review-comment>
  </section>
</template>

<script setup>
import ReviewComment from "../components/review/ReviewComment.vue";
import BaseSpinner from "../components/BaseSpinner.vue";
import { ref } from "vue";

const reviews = ref([]);
const loading = ref(true);

function right(i) {
  return reviews.value.indexOf(i) % 2;
}

loading.value = true;
fetch(
  `https://vue-http-demo-d0a90-default-rtdb.firebaseio.com/reviews.json`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    loading.value = false;
    reviews.value = Object.values(data);
  });
</script>