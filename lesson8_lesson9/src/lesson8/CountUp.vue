<script setup>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, nextTick} from 'vue'
const count = ref(0)
onBeforeMount(() => {
  console.log('onBeforeMounted')
  // debugger
})

onMounted(() => {
  console.log('onMounted')
  // debugger
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdated')
  // debugger
})

onUpdated(() => {
  console.log('onUpdated')
  // debugger
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
  // debugger
})

onUnmounted(() => {
  console.log('onUnMounted')
  // debugger
})

const countup = () => {
  count.value++
  nextTick(() => {
    console.log('nextTick')
    debugger
  })
}
</script>

<template>
  <div>
    <p>count : {{ count }}</p>
    <button @click="countup">+1</button>
  </div>
</template>