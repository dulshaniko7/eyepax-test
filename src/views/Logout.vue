<template>
<div>Logout</div>
</template>

<script>
import router from '@/index'
import store from "@/store";
export default {
  name: "Logout",
  mounted() {
    store.state.logedIn = false
    router.push({name:'Login'})
  }
}
</script>

<style scoped>

</style>