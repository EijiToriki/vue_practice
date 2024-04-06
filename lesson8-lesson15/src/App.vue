<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const toAbout = () => {
  console.log('toAbout')
  router.push({path : '/about'})
}


</script>

<template>
  <h1>VueRouter</h1>
  <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>
  <br>
  <RouterLink :to="{ path: '/', query: {lang: 'ja'}, hash: '#title' }">Home</RouterLink> | <RouterLink :to="{ name: 'about'}">About</RouterLink>
  <br>
  <button @click="toAbout">About</button>
  <RouterView />
</template>

<style scoped>

</style>