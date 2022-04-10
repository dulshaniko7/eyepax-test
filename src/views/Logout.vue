<template>
<div>Logout</div>
</template>

<script>
import router from '@/index'
export default {
  name: "Logout",
  mounted() {
    console.log("mounted")
    router.push({name:'Login'})
  }
}
</script>

<style scoped>

</style>