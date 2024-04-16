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
  <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> | <RouterLink :to="{name: 'profile', params: {id: 'toriki'}}">Profile</RouterLink>
  <br>
  <!-- <p style="margin-top: 1000px">bottom</p> -->
  <RouterLink :to="{ path: '/', query: {lang: 'ja'}, hash: '#title' }">Home</RouterLink> | <RouterLink :to="{ name: 'about'}">About</RouterLink>
  <br>
  <button @click="toAbout">About</button>

  <RouterView v-slot="{ Component, route }">
    <Transition name="fade" >
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>

  
  
  <!-- <RouterView name="Sidebar" />
  <RouterView name="Footer" /> -->
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 1s;
}
</style>