<template>
<div>
  <router-link :to="{ name: 'Details', params: {id:to.id}}">
    <h4>{{to.title}} </h4>
  </router-link>
</div>
</template>

<script>
//import axios from "axios";
export default {
  props:['to'],
  name: "To"
}
</script>

<style scoped>

</style>