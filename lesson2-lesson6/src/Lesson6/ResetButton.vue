<script setup>
const emit = defineEmits(['reset'])
const emitReset = () =>{
  emit('reset', 100)
}
</script>

<template>
  <button @click="$emit('reset', 100)">Reset</button>
  <button @click="emitReset">Reset</button>
</template>