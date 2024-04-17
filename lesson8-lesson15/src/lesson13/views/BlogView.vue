<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';

onBeforeRouteUpdate(() => {
  console.log('onBeforeRouteUpdate')
})

onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave')
  return window.confirm('本当にこのページから離れますか？')
})

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