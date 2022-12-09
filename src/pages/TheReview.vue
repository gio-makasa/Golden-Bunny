<template>
  <section id="review">
    <review-comment
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

export default {
  components: { ReviewComment },
  data() {
    return {
      reviews: [],
    };
  },
  methods:{
    right(i){
      return this.reviews.indexOf(i) % 2
    }
  },
  beforeMount() {
    fetch(
      `https://vue-http-demo-d0a90-default-rtdb.firebaseio.com/reviews.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.reviews = Object.values(data);
      });
  },
};
</script>

<style scoped>
#review {
  min-height: 100vw;
  background: #333333;
}
</style>