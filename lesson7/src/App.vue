<script setup>
import { ref } from 'vue'
import FoodCard from './components/FoodCard.vue'

const foods = ref([
  { name: '寿司', icon: '🍣' },
  { name: 'ハンバーガー', icon: '🍔' },
  { name: '焼肉', icon: '🍖' },
  { name: '麺類', icon: '🍜' },
  { name: 'タコ焼き', icon: '🐙' },
  { name: 'カレー', icon: '🍛' },
])

const upIdx = ref(0)
const downIdx = ref(1)

const updateFood = (index) => {
  upIdx.value = index
  downIdx.value += 1
}

</script>

<template>
  <main>
    <h1 class="title">今日何食べる？</h1>
    <FoodCard @click="updateFood(upIdx)" :food-name="foods[upIdx].name" :food-icon="foods[upIdx].icon" />
    <template v-if="downIdx < foods.length">
      <p>VS</p>
      <FoodCard @click="updateFood(downIdx)" :food-name="foods[downIdx].name" :food-icon="foods[downIdx].icon" />
    </template>
  </main>
</template>

<style scoped>
main {
  width: 350px;
  margin: 100px auto;
  text-align: center;
}

.title {
  margin-bottom: 60px;
}
</style>
