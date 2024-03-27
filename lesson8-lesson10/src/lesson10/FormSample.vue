<script setup>
import { ref } from 'vue';

const userInput = ref('')
const userInputLazy = ref('')
const userInputNum = ref('')
const message = ref('')
const messageTrim = ref('')
const checked = ref('not checked')
const fruits = ref([])
const gender = ref('male')
const selectedValue = ref('')
</script>

<template>
  <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model="userInput" type="text" />
  <p>{{ userInput }}</p>

  <h2>Text lazy</h2>
  <input v-model.lazy="userInputLazy" type="text" />
  <p>{{ userInputLazy }}</p>

  <h2>Text Number</h2>
  <input v-model.number="userInputNum" type="text" />
  <p>{{ userInputNum }}</p>
  <p>{{ typeof userInputNum }}</p>

  <h2>TextArea</h2>
  <textarea v-model="message"></textarea>
  <p style="white-space: pre;">{{ message }}</p>

  <h2>TextArea Trim</h2>
  <textarea v-model.trim="messageTrim"></textarea>
  <p style="white-space: pre;">{{ messageTrim }}</p>

  <h2>Checkbox</h2>
  <input id="checkbox" v-model="checked" type="checkbox" true-value="checked" false-value="not checked" />
  <label for="checkbox">{{ checked }}</label>

  <p>fruits</p>
  <input id="Apple" v-model="fruits" type="checkbox" value="Apple" />
  <label for="Apple">Apple</label>
  <input id="Banana" v-model="fruits" type="checkbox" value="Banana" />
  <label for="Banana">Banana</label>
  <input id="Grape" v-model="fruits" type="checkbox" value="Grape" />
  <label for="Grape">Grape</label>
  <p>{{ fruits }}</p>

  <h2>Radio</h2>
  <input v-model="gender" id="male" type="radio" value="male"/>
  <label for="male">male</label>
  <input v-model="gender" id="female" type="radio" value="female" />
  <label for="female">female</label>
  <p>{{ gender }}</p>

  <h2>Select</h2>
  <select v-model="selectedValue">
    <option value="" disabled>選べ</option>
    <option v-for="option in ['A', 'B', 'C']" :key="option">{{ option }}</option>
  </select>
  <p>{{ selectedValue }}</p>

</template>

<style>
</style>