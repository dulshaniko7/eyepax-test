<template>
<div class="container">
  <h1>LOGIN</h1>
  <form @submit.prevent="login">
    <div class="form-group">
      <label>Username</label>
      <input
          v-model="username"
          class="form-control"
          placeholder="Username"
          required
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
          v-model="password"
          class="form-control"
          type="password"
          placeholder="Password"
          required
      />
    </div>

    <button class="btn btn-success btn-block my-2" type="submit">Login</button>



  </form>
<div v-if="store.state.errorMsg">
  <h3 class="text-center">Please Enter the correct password //username :admin password :admin</h3>
</div>
</div>
</template>

<script>
//import router from '@/index'
import { ref} from "vue";
import {useStore} from 'vuex';
export default {
  name: "Login",
  setup(){
    const store = useStore()
    const username = ref('')
    const password = ref('')

    function login() {
      store.commit('login', {username: username.value, password: password.value})
      store.state.errorMsg = true
    }
    return{
      store,username,password,login
    }
  },
  data(){
    return{
      show:true,
    }
  },

}
</script>

<style scoped>

</style>