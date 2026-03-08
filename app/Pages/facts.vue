<!-- Name: Alexander Potgieter | Student Number: 25003209 -->
<template>
  <div class="facts">
    <h2>Random Animal Fact</h2>

    <div v-if="loading">Loading fact...</div>

    <div v-else-if="error">Could not load fact.</div>

    <div v-else-if="fact" class="fact-card">
      <p>🐾 {{ fact }}</p>
      <button @click="getFact">Get Another Fact</button>
    </div>
  </div>
</template>

<script setup>
const fact = ref(null)
const loading = ref(true)
const error = ref(false)

async function getFact() {
  loading.value = true
  error.value = false

  try {
    const data = await $fetch('https://catfact.ninja/fact')
    fact.value = data.fact
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}

await getFact()
</script>