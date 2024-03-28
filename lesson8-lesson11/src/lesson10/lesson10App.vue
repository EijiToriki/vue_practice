<script setup>
import FormSample from './FormSample.vue';
import CustomInput from './CustomInput.vue'
import { ref } from 'vue';

const userInput = ref('')
const titleName = ref('titleName')
</script>

<template>
  <CustomInput v-model.uppercase="userInput" v-model:title-name="titleName" />
  <p>userInput : {{ userInput }}</p>
  <p>titleName : {{ titleName }}</p>
  <FormSample />
</template>

<style>
</style>