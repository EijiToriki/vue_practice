<script setup>
import { useCounterStore } from './lesson14/store/user';
import CounterComp from './lesson14/CounterComp.vue'

const counterStore = useCounterStore()
</script>

<template>
  <h1>Pinia</h1>
  <button @click="counterStore.count++">+1</button>
  <button @click="counterStore.increment">increment</button>
  <p>{{ counterStore.count }}</p>
  <p>{{ counterStore.doubleCount }}</p>
  <CounterComp />
</template>

<style scoped>

</style>