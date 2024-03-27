<script setup>
import { defineAsyncComponent, ref, shallowRef } from 'vue'
import BaseCard from './BaseCard.vue'
import CompA from './CompA.vue'
// import CompB from './lesson9/CompB.vue'
import BaseLoader from "./BaseLoader.vue"
import ErrorMessage from "./ErrorMessage.vue"
const CompB = defineAsyncComponent({
  loader: () => import('././CompB.vue'),
  loadingComponent: BaseLoader,
  delay: 200,
  errorComponent: ErrorMessage,
  timeout: 2000
})
import CompC from './CompC.vue'

const currentComp = shallowRef(CompA)
const isShow = ref(false)

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
    <KeepAlive include="CompB,CompC" exclude="CompA" :max="3">
      <component :is="currentComp" />
    </KeepAlive>
    <button @click="isShow = true">Open Modal</button>
    <Teleport to="body">
      <dialog v-if="isShow" open>
        <p>This is a Modal</p>
        <button @click="isShow = false">Close</button>
      </dialog>
    </Teleport>
  </div>
</template>

<style scoped></style>
