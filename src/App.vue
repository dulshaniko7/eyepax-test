<template>
  <div class="container">
<div id="nav" class="myNav">
  <router-link to="/">Index |</router-link>
  <router-link to="/home">ToDo|</router-link>
  <router-link to="/login" v-if="!isLogged">Login |</router-link>
  <router-link to="/logout" v-if="isLogged" >LogOut|</router-link>
</div>
    <transition name="router-animate" enter-active-class="animated fadeInDown" leave-active-class="animated fadeInDown">
  <router-view />
    </transition>
  </div>
</template>

<script>

import Store from '@/store'

export default {
  name: 'App',
  components: {

  },
  computed : {
    isLogged(){
      return Store.state.logedIn
    }
  },
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.myNav{
  margin-bottom: 50px;
  font-size:30px;

}
</style>
