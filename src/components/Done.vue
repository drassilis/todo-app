<template>
  <div class="doneTasks">
      <h1>DONE</h1>
      <ul v-for="task in getDoneTasks" :key="task.id">
          <div class="doneTask">
              <div id="taskTitle">{{ task.title }}</div>
              <button id="taskDeleteButton" @click="deleteTask(task.id)">DELETE</button>
          </div>
      </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(["getDoneTasks"])
    },
    methods: {
        ...mapActions(["deleteTasks"]),
        deleteTask(id) {
            this.deleteTasks(id)
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
.doneTasks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.doneTask {
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
    text-decoration: line-through
}

#taskDeleteButton {
    background-color: darkred;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 15px 32px;
}
</style>