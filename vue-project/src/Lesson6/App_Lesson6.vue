<script setup>
import { ref } from 'vue'
import ShowCount from './Lesson6/ShowCount.vue'
import ResetButton from './Lesson6/ResetButton.vue'

const count = ref(0)
const onReset = (value) => {
  count.value = value
}
</script>

<template>
  <ShowCount :count="count" bar="hello" />
  <button @click="count++">+1</button>
  <ResetButton @reset="onReset" />
</template>

<style scoped></style>
