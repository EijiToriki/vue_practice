<script setup>

</script>

<template>
  <div>
    <h2>Home</h2>
    <h3>Blog</h3>
    <RouterLink :to="{name: 'blog', params: {blog_id: 3}}" >new Release!!</RouterLink>
    <p>{{ $route.meta }}</p>
  </div>
</template>

<style scoped>

</style>