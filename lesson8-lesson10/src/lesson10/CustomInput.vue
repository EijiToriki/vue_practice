<script setup>
const [model, modifiers] = defineModel({
  type: String,
  default: 'default',
  set(value) {
    if(modifiers.uppercase){
      return value.toUpperCase()
    }
    return value
  }
})
const titleModel = defineModel('titleName', {
  type: String,
  default: 'titleName'
})
</script>

<template>
  <h2>CustomInput</h2>
  <input v-model="model" type="text">
  <p>model : {{ model }}</p>
  <p>titleModel : {{ titleModel }}</p>
</template>

<style>
</style>