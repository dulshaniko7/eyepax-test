<template>
<div>
      <Todo v-bind:todos="todos"/>
</div>

</template>

<script>
import axios from "axios"
import Todo from "@/components/Todo";

export default {
  name: "Home",

  components: {Todo},
  data(){
    return{
      todos: []
    }
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => this.todos = response.data)
        .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>