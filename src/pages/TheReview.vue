<template>
  <section id="review">
    <BaseSpinner v-if="loading" />
    <review-comment
      v-else
      v-for="i in reviews"
      :key="i.id"
      :comment="i.comment"
      :score="i.score"
      :user-name="i.name"
      :right="right(i)"
    ></review-comment>
  </section>
</template>

<script>
import ReviewComment from "../components/review/ReviewComment.vue";
import BaseSpinner from "../components/BaseSpinner.vue";

export default {
  components: { ReviewComment, BaseSpinner },
  data() {
    return {
      reviews: [],
      loading: true,
    };
  },
  methods: {
    right(i) {
      return this.reviews.indexOf(i) % 2;
    },
  },
  beforeCreate() {
    this.loading = true;
    fetch(
      `https://vue-http-demo-d0a90-default-rtdb.firebaseio.com/reviews.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.loading = false;
        this.reviews = Object.values(data);
      });
  },
};
</script>