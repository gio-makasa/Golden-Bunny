<template>
  <section id="profile">
    <book-table></book-table>
    <add-review></add-review>
  </section>
</template>

<script>
import BookTable from "../components/PersonalProfile/BookTable.vue";
import AddReview from "../components/PersonalProfile/AddReview.vue";

export default {
  components: { BookTable, AddReview },
};
</script>

<style scoped>
#profile {
  min-height: 100vh;
  background-color: #333333;
  padding: 2rem 0;
}
</style>