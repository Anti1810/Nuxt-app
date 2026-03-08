<!-- Name: Alexander Potgieter | Student Number: 25003209 -->
<template>
  <div class="weather">
    <h2>Current Weather in Pretoria</h2>

    <div v-if="loading">Loading weather...</div>

    <div v-else-if="error">Could not load weather data.</div>

    <div v-else-if="weather" class="weather-card">
      <h3>{{ weather.location.name }}, {{ weather.location.country }}</h3>
      <p>🌡️ Temperature: {{ weather.current.temperature }}°C</p>
      <p>🌤️ Condition: {{ weather.current.weather_descriptions[0] }}</p>
      <p>💧 Humidity: {{ weather.current.humidity }}%</p>
      <p>🌬️ Wind Speed: {{ weather.current.wind_speed }} km/h</p>
    </div>
  </div>
</template>

<script setup>
const weather = ref(null)
const loading = ref(true)
const error = ref(false)

const API_KEY = '32c89c23bfe0cb7f6670fa208051ff26'

const { data, error: fetchError } = await useFetch(
  `http://api.weatherstack.com/current?access_key=${API_KEY}&query=Pretoria`
)

if (fetchError.value || !data.value) {
  error.value = true
} else {
  weather.value = data.value
}

loading.value = false
</script>