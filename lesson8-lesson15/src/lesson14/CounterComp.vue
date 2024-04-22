<script setup>
import { useCounterStore } from './store/user';

const counterStore = useCounterStore()
</script>

<template>
  <h2>CounterComp</h2>
  <button @click="counterStore.count++">+1</button>
  <p>{{ counterStore.count }}</p>
</template>

<style scoped>

</style>