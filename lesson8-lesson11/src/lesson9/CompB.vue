<script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'
import CompBChild from './CompBChild.vue'

const count = ref(0)

onMounted(() => {
  console.log('compB onMounted')
})

onUnmounted(() => {
  console.log('compB onUnMounted')
})

onActivated(() => {
  console.log('compB onActivated')
})

onDeactivated(() => {
  console.log('compB onDeactivated')
})

</script>

<template>
  <h3>CompB</h3>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
  <CompBChild />
</template>

<style scoped></style>
