<script setup>
import FormSample from './lesson10/FormSample.vue';
import CustomInput from './lesson10/CustomInput.vue'
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