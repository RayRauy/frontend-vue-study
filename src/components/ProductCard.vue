<script setup lang="ts">
const props = defineProps({
  tuition: { type: Number },
  name: { type: String, required: true },
  age: { type: Number, required: true },
});
</script>

<template>
  <div>
    <h2>Name: {{ props.name }}</h2>
    <p>Age: {{ props.age }}</p>
    <p>Tuition: {{ props.tuition }}</p>
  </div>
</template>
