<script setup>
defineProps({
  'foodName': {
    type: String,
    required: true,
  },
  'foodIcon': {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <div>{{ foodName }}</div>
    <div>{{ foodIcon }}</div>
  </div>
</template>

<style scoped>
.card{
  box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
  border-radius: 5px;
  font-size: 2rem;
  padding: 16px;
  cursor: pointer;
}
</style>
