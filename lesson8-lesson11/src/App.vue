<script setup>
import { ref } from 'vue';
import { useRefHistory } from './lesson11/refHistory'
import { useRefLimitedHistory } from './lesson11/refLimitedHistory'

const count = ref(0)
const { history, undo } = useRefLimitedHistory(count, ref(3))

const userInput = ref('')
const {history: history2, undo: undo2} = useRefHistory(userInput)

</script>

<template>
  <h2>Count</h2>
  <p>count : {{ count }}</p>
  <button @click="count++">+1</button>
  <p>history : {{ history }}</p>
  <button @click="undo">undo</button>
  <h2>UserInput</h2>
  <input v-model="userInput" type="text">
  <p>history2 : {{ history2 }}</p>
  <button @click="undo2">undo2</button>
</template>

<style>
</style>