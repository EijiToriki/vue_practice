<script setup>
import { ref } from 'vue';

const isShow = ref(true)

const beforeEnter = (el) => {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}

let enterIntervalID
const enter = (el, done) => {
  console.log('enter', el)
  let translateXVal = 30
  enterIntervalID = setInterval(() => {
    translateXVal -= 1
    el.style.transform = `translateX(${translateXVal}px)`
    if(translateXVal === 0){
      clearInterval(enterIntervalID)
      done()
    }
  }, 20)
}

const afterEnter = (el) => {
  console.log("afterEnter", el)
}

const enterCanceled = (el) => {
  console.log("enterCanceled", el)
  clearInterval(enterIntervalID)
}

const beforeLeave = (el) => {
  console.log("beforeLeave", el)
}

let leaveIntervalId
const leave = (el, done) => {
  console.log('leave', el)
  let translateXVal = 0
  const leaveIntervalId = setInterval(() => {
    translateXVal += 1
    el.style.transform = `translateX(${translateXVal}px)`
    if(translateXVal === 30){
      clearInterval(leaveIntervalId)
      done()
    }
  }, 20)
}

const afterLeave = (el) => {
  console.log('afterLeave', el)
}

const leaveCanceled = (el) => {
  console.log('leaveCanceled', el)
  clearInterval(leaveIntervalId)
}

const fruits = ref(["Apple", "Banana", "Grape"])
const newFruit = ref("")

</script>

<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition name="fade" appear>
    <div v-if="isShow">Hello Fade</div>
  </Transition>
  <Transition name="slide" appear>
    <div v-if="isShow">Hello Slide</div>
  </Transition>
  <Transition 
    enter-active-class="animate__animated animate__bounce" 
    leave-active-class="animate__animated animate__shakeX"
  >
    <div v-if="isShow">Hello Animation CSS</div>
  </Transition>
  <Transition name="fade" appear mode="out-in">
    <div v-if="isShow">ON Fade</div>
    <div v-else>OFF Fade</div>
  </Transition>
  <Transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCanceled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCanceled"
    appear
  >
    <div v-if="isShow">Hello</div>
  </Transition>

  <input v-model="newFruit" type="text" />
  <button @click="fruits.unshift(newFruit)">Add</button>
  <TransitionGroup name="fade">
    <div v-for="(fruit, idx) in fruits" :key="fruit" @click="fruits.splice(idx, 1)">{{ fruit }}</div>
  </TransitionGroup>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter-to{
  opacity: 1;
}

.fade-move{
  transition: transform 1s;
}

.fade-leave-from{
  opacity: 1;
}

.fade-leave-active{
  transition: opacity 1s;
  position: absolute;
}

.fade-leave-to{
  opacity: 0;
}

.slide-enter-active{
  animation: slide 1s;
}
.slide-leave-active{
  animation: slide 1s reverse;
}

@keyframes slide{
  0% {
    transform: translateX(20px);
  }
  100%{
    transform: translateX(0);
  }
}

.v-leave-to{
  opacity: 0;
}
</style>