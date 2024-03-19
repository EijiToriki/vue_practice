<script setup>
import { ref } from 'vue';

const ok = ref(true)
const maybeOK = ref(false)
const fruits = ref([
    {id: 1, name:"apple"},
    {id: 2, name:"banana"},
    {id: 3, name:"grape"},
  ])

const user = ref({
  name: "toriki",
  age: 24,
  gender: "man"
})
</script>

<template>
  <div>Hello</div>
  <button @click="ok = !ok">toggle</button>
  <template v-if="ok">
    <p>OK!</p>
    <p>OK!</p>
    <p>OK!</p>
  </template>
  <p v-if="ok">OK!</p>
  <p v-else-if="maybeOK">OK..?</p>
  <p v-else>not OK!</p>

  <p v-show="ok">Show OK!</p>

  <button @click="fruits.shift()">delete</button>

  <template v-for="({id, name}, idx) in fruits" :key="id">
    <template v-if="id === 2">
      <p>{{ idx }}</p>
      <input type="text" />{{ name }}
    </template>
  </template>

  <p v-for="(value, key, index) in user" :key="value">{{ key }} : {{ value }} -> {{ index }}</p>

  <p v-for="n in 10" :key="n">{{ n }}</p>

  

</template>

<style>
</style>
