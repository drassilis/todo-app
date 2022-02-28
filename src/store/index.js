import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    tasksTodo: [],
    tasksDone: []
  },
  getters: {
    getTasksTodo: state => {
      return state.tasksTodo
    },
    getDoneTasks: state => {
      return state.tasksDone
    }
  },
  mutations: {
    setTasksTodo: (state, tasksTodo) => {
      state.tasksTodo = tasksTodo
    },
    setTasksDone: (state, tasksDone) => {
      state.tasksDone = tasksDone
    }
  },
  actions: {
    getTasksTodo({ commit }) {
      axios.get("http://localhost:3000/tasks").then(tasks => {
        commit("setTasksTodo", tasks.data.tasks)
      })
    },
    getDoneTasks({ commit }) {
      axios.get("http://localhost:3000/donetasks").then(done => {
        commit("setTasksDone", done.data.doneTasks)
      })
    },
    async addTask({ dispatch }, payload) {
      await axios.post("http://localhost:3000/addtask", {
        data: payload
      })
      await dispatch("getTasksTodo")
    },
    async deleteTasks({ dispatch }, payload) {
      await axios.post("http://localhost:3000/deletetask", {
        data: payload
      })
      await dispatch("getTasksTodo")
      await dispatch("getDoneTasks")
    },
    async markTaskDone({ dispatch }, payload) {
      await axios.post("http://localhost:3000/marktaskdone", {
        data:  payload
      })
      await dispatch("getTasksTodo")
      await dispatch("getDoneTasks")
    }
  },
  modules: {}
})
