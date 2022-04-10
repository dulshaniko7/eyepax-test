<template>
<div>
<div class="container">
  <table class="table myTable">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todo in todos" :key="todo.id">
      <td>{{todo.id}}</td>
      <td><SingleToDo v-bind:todo="todo"/></td>
    </tr>
    </tbody>
  </table>
</div>
</div>
</template>

<script>

import SingleToDo from "@/components/SingleToDo";
export default {
  name: "Todo",
  components: {SingleToDo},
  props: ['todos'],
}
</script>

<style scoped>
.myTable{
  overflow: hidden;
  height: 500px;
}
</style>