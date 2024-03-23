<script setup>
import {ref, onMounted} from 'vue'
import CountUp from './components/CountUp.vue'

const isShow = ref(true)
const userInput = ref(null)
onMounted(() => {
  console.log(userInput.value)
})
</script>

<template>
  <div>
    <button @click="isShow = !isShow">switch</button>
    <CountUp v-if="isShow" />
    <input ref="userInput" type="text" />
  </div>

</template>

<style scoped>
</style>
