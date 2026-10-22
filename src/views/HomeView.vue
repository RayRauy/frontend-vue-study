<script setup lang="ts">
// import TheWelcome from "../components/TheWelcome.vue";
import ProductCard from "../components/ProductCard.vue";
import { ref, reactive, onMounted, onUpdated } from "vue";

const count = ref({ name: "SoyHout", age: 21 });
const state = reactive({
  message: "Hello Vue 3!",
  count: 0,
});

function increment() {
  state.count++;
}

function decrement() {
  state.count--;
}

onMounted(() => {
  console.log("Component mounted");
});

onUpdated(() => {
  console.log("Component updated");
});
</script>

<template>
  <main>
    <!-- <ProductCard :tuition="500" name="yo" :age="21" /> -->
    <hr />
    <!-- <TheWelcome /> -->
    <div>
      <h1>Welcome to Your Vue App</h1>
      <p>{{ state.message }}</p>
      <h2>{{ state.count }}</h2>
      <button @click="increment">Increment</button>
      <br />
      <button @click="decrement">Decrement</button>
      <br />
      <p>{{ count.name }}, {{ count.age }}</p>
    </div>
  </main>
</template>
