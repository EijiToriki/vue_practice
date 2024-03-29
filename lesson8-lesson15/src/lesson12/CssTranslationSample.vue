<script setup>
import { ref } from 'vue';

const isShow = ref(true)

</script>

<template>
  <h1>Animation</h1>
  <div :class="{'op-80':isShow, 'op-20': !isShow, 'slide': !isShow}">Hello</div>
  <button @click="isShow = !isShow">toggle</button>
</template>

<style scoped>
div {
  transition: opacity 1s;
}
.op-80{
  opacity: 0.8;
}
.op-20{
  opacity: 0.2;
}
.slide{
  animation: slide 1s;
}

@keyframes slide{
  0% {
    transform: translateX(0);
  }
  50%{
    transform: translateX(100px);
  }
  100%{
    transform: translateX(0);
  }
}

</style>