<template>
  <div class="home">
    <todo class="todo"></todo>
    <done class="done"></done>
  </div>
</template>

<script>
import Todo from '../components/Todo.vue'
import Done from '../components/Done.vue'
export default {
  name: 'Home',
  components: {
    Todo,
    Done
  }
}

</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid lightgray;
}
</style>
