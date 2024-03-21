<script setup>
defineProps({
  'count': {
    type: Number,
    // required: true,
    default: 100,
    // validator: function(value){
    //   return value === 0
    // }
  },
  'bar': {
    type: String,
    required: true,
  }
})
</script>

<template>
  <p>count:{{ count }}</p>
  <p>{{ bar }}</p>
</template>