<script setup>
import { ref, reactive } from 'vue'
const title = ref('Vue.js Course')
let num = ref(1)
const info = ref({
  students: 1000,
  rating: 4
})
const instructor = reactive({
  nama: 'toriki',
  age: 25,
  sns: {
    twitter: 'toriki',
    insta: 'age'
  },
  email: ref('age@gmail.com')
})
console.log(info.value.students)
console.log(instructor.email)

const items = reactive([ref(1), ref(2), ref(3)])
console.log(items[0].value)

const courseInfo = {
  sections: ref(10),
  language: ref('japanese')
}

function increment() {
  num.value += 1
  console.log(num.value)
}
</script>

<template>
  <h1>Title : {{ title }}</h1>
  <h2>num : {{ num }}</h2>
  <button @click="increment">button</button>
  <h2>{{ info.students }}</h2>
  <h2>Course Info Sections : {{ courseInfo.sections.value + 1 }}</h2>
</template>

<style>
h1 {
  color: red;
}
</style>
