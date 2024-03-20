<script setup>
import { ref } from 'vue';
import CountUp from '@/Lesson5/CountUp.vue';
import BaseButton from './Lesson5/BaseButton.vue';

</script>

<template>
  <h1 class="red">App.vue</h1>
  <BaseIcon />
  <CountUp />
  <BaseButton id="base-button" @click="console.log('click')"/>
</template>

<style scoped>
.red{
  color: red;
}
</style>
