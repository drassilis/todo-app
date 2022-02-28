<template>
  <div class="todo">
      <h1>TODO</h1>
      <add-task></add-task>
      <ul v-for="task in getTasksTodo" :key="task.id">
          <div class="task">
              <div id="taskTitle">{{ task.title }}</div>
              <button id="taskDoneButton" @click="markAsDone(task.id)">DONE</button>
          </div>
      </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTask from './AddTask.vue'
export default {
    components: {
        AddTask
    },
    computed: {
        ...mapGetters(["getTasksTodo"])
    },
    methods: {
        ...mapActions(["markTaskDone"]),
        markAsDone(id) {
            this.markTaskDone(id)
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
h1 {
    text-decoration: underline;
}
.todo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.task {
    background-color: lightgray;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 1.3em;
    margin: 10px;
}
#taskTitle {
    width: 100%;
    padding-left: 15px;
}
#taskDoneButton {
    background-color: black;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 15px 32px;
}
</style>