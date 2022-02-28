<template>
  <div class="addTask">
      <b>ADD NEW TASK</b>
      <br>
      <form class="submitTask" @submit="submit">
          <input type="text" id="title" v-model="task.title" />
          <input id="submitTaskButton" type="submit" value="SUBMIT" />
      </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["addTask"]),
        submit(event) {
            event.preventDefault();
            this.addTask(this.task.title);
            this.task.title = ""
        }
    },
    data() {
        return {
            task: {
                title: ""
            }
        }
    }
}
</script>

<style>
.addTask {
    text-align: center;
    padding-bottom: 20px;
}
#title {
    padding: 13px;
    margin-right: 15px;
    width: 400px;
}
#submitTaskButton {
    background-color: green;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 15px 32px;
}
</style>