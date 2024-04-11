<script setup>
defineProps({
  catchAll:{
    type:Array,
    required:true
  }
})
</script>

<template>
  <h2>404 Error</h2>
  {{ $route.params.catchAll }}
  {{ catchAll }}
</template>

<style scoped>

</style>