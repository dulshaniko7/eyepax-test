<template>
  <div>

    <div class="container myTable">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="todo in newToDo" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>
            <SingleToDo v-bind:todo="todo"/>
          </td>
        </tr>
        </tbody>
      </table>

    <button @click="changePage(-1)" v-if="last"> Pre</button>
                Page {{ page }} of {{ pages }}

        <button @click="changePage(1)" v-if="max">Next</button>

    </div>
  </div>
</template>

<script>

import SingleToDo from "@/components/SingleToDo";
import axios from "axios";

export default {
  name: "Todo",
  components: {SingleToDo},
  props: ['todos'],
  data() {
    return {
      newToDo: [],
      start:0,
      end:10,
      pages:null,
      page: 1,
      last:false,
      max:true
    }
  },
  methods:{
    changePage(val){
      if(val==1) {
        this.last = true
        this.page++
       this.start = this.start + 10
        this.end = this.end+10
        if(this.start == 190){
          this.max = false
        }
        axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${this.start}&_end=${this.end}`)
            .then(response => this.newToDo = response.data)
            .then(() => console.log(this.todos))
            .catch(error => console.log(error))
      } else if(val==-1){
        this.page--
        this.start = this.start-10
        this.end = this.end-10
        if(this.start == 0){
          this.last = false
        }
        axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${this.start}&_end=${this.end}`)
            .then(response => this.newToDo = response.data)
            .then(() => console.log(this.todos))
            .catch(error => console.log(error))
      }
    }
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_start=0&_end=10")
        .then(response => this.newToDo = response.data)
        .then(() => {
          this.pages =20
        })
        .then(() => console.log(this.todos))
        .catch(error => console.log(error))
  }
}
</script>

<style scoped>
.myTable {
  overflow: hidden;

  border: 1px solid #999;
  border-radius: 4px;
  color: #333;

}

table {

  border-collapse: collapse;
}
</style>