<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route.params)

watch(
  () => route.params.blog_id,
  () => {
    console.log('watch')
  }
)

</script>

<template>
  <div>
    <h2>Blog : id = {{ $route.params.blog_id }}</h2>
    <p>{{ $route }}</p>
    <RouterLink :to="{name: 'blog', params: {blog_id: Number($route.params.blog_id) + 1}}">Next</RouterLink>
  </div>
</template>

<style scoped>

</style>