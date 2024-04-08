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
  <h2>Blog</h2>
  <p>{{ $route }}</p>
  <RouterLink :to="{name: 'blog', params: {blog_id: Number($route.params.blog_id) + 1}}">Next</RouterLink>
</template>

<style scoped>

</style>