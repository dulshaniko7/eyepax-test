<template>
<div>
  <div class="container">
    <h1 class="text-center mt-4">{{description.title}} </h1>
    </div>
</div>
</template>

<script>
import  axios from "axios"

export default {
  name: "Details",
  props:['id'],
  data() {
    return {
      description: [],
    }
  },
  created() {
    console.log(this.id)
    axios.get(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
        .then(response => {
          this.description= response.data
  })
  }
}
</script>

<style scoped>

</style>