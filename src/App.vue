<template>
  <router-view/>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getTasksTodo")
    this.$store.dispatch("getDoneTasks")
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
}
</style>
