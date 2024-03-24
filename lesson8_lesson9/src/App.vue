<script setup>
import { ref, shallowRef } from 'vue'
import BaseCard from './lesson9/BaseCard.vue'
import CompA from './lesson9/CompA.vue'
import CompB from './lesson9/CompB.vue'
import CompC from './lesson9/CompC.vue'

const currentComp = shallowRef(CompA)

</script>

<template>
  <h1>Slots</h1>
  <BaseCard>
    <template #header="{pageCount}">
      <p>pageCount : {{ pageCount }}</p>
      <h2 v-if="pageCount === 1">俺の推し</h2>
      <h2 v-if="pageCount === 2">俺の彼女</h2>
      <h2 v-if="pageCount === 3">俺の嫁</h2>
    </template>
    <template #main>
      <ul>
        <li>山下美月</li>
        <li>嘉喜遥香</li>
      </ul>
    </template>
    <template #footer>
      <p>乃木坂</p>
    </template>
  </BaseCard>

  <div>
    <h1>Dynamic Component</h1>
    <button @click="currentComp = CompA">A</button>
    <button @click="currentComp = CompB">B</button>
    <button @click="currentComp = CompC">C</button>
    <component :is="currentComp" />
  </div>
</template>

<style scoped></style>
