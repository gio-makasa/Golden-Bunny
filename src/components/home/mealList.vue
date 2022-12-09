<template>
  <div id="Pupulars">
    <h2>{{ listTitle }}</h2>
    <div id="list">
      <meal-card v-for="i in 10" :key="i" :Category="listTitle"></meal-card>
    </div>
  </div>
</template>

<script>
import MealCard from "./MealCard.vue";

export default {
  components: { MealCard },
  props: ["listTitle"],
};
</script>

<style scoped>
#Pupulars {
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
}
h2 {
  color: yellow;
  margin: 10px;
}
#list {
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  gap: 20px;
}
#list::-webkit-scrollbar {
  height: 5px;
}
#list::-webkit-scrollbar-thumb {
  background-image: linear-gradient(to right, orange, yellow);
  border-radius: 5px;
}
</style>