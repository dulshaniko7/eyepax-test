<template>
<div>
      <Todo v-bind:todos="todos"  />
</div>

</template>

<script>
import axios from "axios"
import Todo from "@/components/Todo";




export default {
  name: "Home",

  components: { Todo},

  data(){
    return{
      todos: [],

    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => this.todos = response.data)
        .catch(error => console.log(error))
  },

  /*
  computed: {
    computedTableData () {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage
        const lastIndex = this.pagination.page * this.pagination.perPage
        return this.todos.slice(firstIndex, lastIndex)
      }

  },
*/
}
</script>

<style scoped>

</style>