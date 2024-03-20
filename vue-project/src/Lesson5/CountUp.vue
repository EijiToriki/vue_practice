<script setup>
import { ref } from 'vue';
const count = ref(0)
</script>

<template>
  <h2>CountUp!!</h2>
  <BaseIcon></BaseIcon>
  <p class="red">count : {{ count }}</p>
  <button @click="count++">countUp +1</button>
</template>

<style>
</style>
