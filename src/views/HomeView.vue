<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import PassengerService from '@/services/PassengerService'
import type { Passenger } from '@/types/passenger'

const passengers = ref<Passenger[]>([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const response = await PassengerService.getPassengers()
    passengers.value = response.data.data
  } catch (err) {
    error.value = 'Failed to load passengers'
    console.error('Error loading passengers:', err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main>
    <div class="passenger-list">
      <h1>Passengers</h1>
      
      <div v-if="loading" class="loading">
        Loading passengers...
      </div>
      
      <div v-else-if="error" class="error">
        {{ error }}
      </div>
      
      <div v-else class="passengers">
        <div v-for="passenger in passengers" :key="passenger._id" class="passenger-card">
          <RouterLink :to="`/passenger/${passenger._id}`" class="passenger-link">
            <h3>{{ passenger.name }}</h3>
            <p>Trips: {{ passenger.trips }}</p>
            <p>Airlines: {{ passenger.airline.length }}</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.passenger-list {
  padding: 2rem;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error {
  color: #d32f2f;
}

.passengers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.passenger-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.passenger-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.passenger-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.passenger-card h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.passenger-card p {
  margin: 0.25rem 0;
  color: #666;
}
</style>
