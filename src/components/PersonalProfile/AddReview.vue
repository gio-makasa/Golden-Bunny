<template>
  <form @submit.prevent="send()">
    <p>Add Review</p>

    <div id="rating">
      <label for="score">Rate</label>
      <div id="rate">
        <p>0</p>
        <input
          type="range"
          id="score"
          name="score"
          min="0"
          max="5"
          v-model="review.score"
        />
        <p>5</p>
      </div>
    </div>

    <label for="review">Comment</label>
    <textarea
      name="review"
      id="review"
      rows="5"
      v-model="review.comment"
    ></textarea>
    <input type="submit" value="submit" id="btn" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      review: { name: "", comment: "", score: 3 },
    };
  },
  methods: {
    send() {
      this.review.name = localStorage.getItem("username");

      fetch(
        `https://vue-http-demo-d0a90-default-rtdb.firebaseio.com/reviews.json`,
        {
          method: "POST",
          body: JSON.stringify(this.review),
        }
      );
      this.review.comment = "";
    },
  },
};
</script>

<style scoped>
form {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2rem;
  width: 60%;
  background-color: #202020;
  border: 1px solid yellow;
  border-radius: 5px;
  padding: 1rem 0.5rem;
}
form > * {
  margin-bottom: 10px;
}

#rating {
  display: flex;
  color: yellow;
  width: 30%;
  justify-content: space-between;
}

#rate {
  display: flex;
}

#score {
  margin: 0 10px;
}

label,
p {
  font-size: x-large;
  color: yellow;
}

textarea {
  width: 100%;
}

#btn {
  background-color: black;
  color: yellow;
  font-size: large;
  padding: 10px 15px;
  border: 1px solid yellow;
  border-radius: 5px;
  cursor: pointer;
}

@media screen and (max-width: 910px) {
  form{
    width: 100%;
  }
}
</style>