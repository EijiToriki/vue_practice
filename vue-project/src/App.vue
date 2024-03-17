<script setup>
import { ref, reactive, computed } from 'vue'
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

const message = ref("<h1>Hello</h1>")
const vueURL = ref('https://vuejs.org')
const vueId = ref('vue-link')
const count = ref(0)
const eventName = "keyup"

const countUp = (event, times) => {
  count.value = event.clientX * times
}

const userInput = ref('')

const score = ref(0)
const evaluation = computed(() => 
  score.value > 3 ? 'Good' : 'Bad'
)
</script>

<template>
  <h1>Title : {{ title }}</h1>
  <h2>num : {{ num }}</h2>
  <button @click="increment">button</button>
  <h2>{{ info.students }}</h2>
  <h2>Course Info Sections : {{ courseInfo.sections.value + 1 }}</h2>

  <div v-text="num"></div>
  <div>{{ num }}</div>

  <div v-html="message"></div>
  <div>{{ message }}</div>

  <a href="https://vuejs.org">Vue.js</a><br>
  <a v-bind:id="vueId" v-bind:href="vueURL">Vue.js</a><br>
  <a :id="vueId" :href="vueURL">Vue.js</a><br>
  <a v-bind="{id:vueId, href:vueURL}">Vue.js</a><br>

  <p>{{ count }}</p>
  <!-- <button v-on:click="count = $event.clientX">button</button> -->
  <button @click="countUp($event, 5)">button</button><br>

  <button @click="$event.preventDefault()">button</button><br>
  <a :id="vueId" :href="vueURL" @click="$event.preventDefault()">Vue.js</a><br>
  <a :id="vueId" :href="vueURL" @click.prevent>Vue.js</a><br>

  <p> {{ count }}</p>
  <input type="text" @keyup.space.delete="count++" />
  <input type="text" @[eventName].space.delete="count++" />

  <p> {{ userInput }} </p>
  <input v-model="userInput" type="text" />

  <p>{{ score }}</p>
  <p>{{ evaluation }}</p>
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <button @click="score++">+1</button>

</template>

<style>
h1 {
  color: red;
}
</style>
