<template>
  <div>
    <router-link :to="{ name: 'Details', params: {id:todo.id}}">
      <h4>{{todo.title}} </h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SingleToDo",
  props:['todo']
}
</script>

<style scoped>

</style>