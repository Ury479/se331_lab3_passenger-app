<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PassengerService from '@/services/PassengerService'
import type { Passenger } from '@/types/passenger'

const route = useRoute()
const router = useRouter()
const passenger = ref<Passenger | null>(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  const id = route.params.id as string
  if (!id) {
    error.value = 'No passenger ID provided'
    loading.value = false
    return
  }

  try {
    const response = await PassengerService.getPassenger(id)
    passenger.value = response.data
  } catch (err) {
    error.value = 'Passenger not found'
    console.error('Error loading passenger:', err)
  } finally {
    loading.value = false
  }
})

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="passenger-detail">
    <button @click="goBack" class="back-button">← Back to Passengers</button>
    
    <div v-if="loading" class="loading">
      Loading passenger details...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else-if="passenger" class="passenger-info">
      <h1>{{ passenger.name }}</h1>
      <div class="details">
        <p><strong>Passenger ID:</strong> {{ passenger._id }}</p>
        <p><strong>Total Trips:</strong> {{ passenger.trips }}</p>
      </div>
      
      <div v-if="passenger.airline && passenger.airline.length > 0" class="airlines-section">
        <h2>Airlines</h2>
        <div class="airlines">
          <div v-for="airline in passenger.airline" :key="airline._id" class="airline-card">
            <router-link :to="`/airline/${airline._id}`" class="airline-link">
              <div class="airline-header">
                <img v-if="airline.logo" :src="airline.logo" :alt="airline.name" class="airline-logo">
                <h3>{{ airline.name }}</h3>
              </div>
              <div class="airline-details">
                <p><strong>Country:</strong> {{ airline.country }}</p>
                <p><strong>Established:</strong> {{ airline.established }}</p>
                <p><strong>Slogan:</strong> {{ airline.slogan }}</p>
                <p v-if="airline.head_quaters"><strong>Headquarters:</strong> {{ airline.head_quaters }}</p>
                <p v-if="airline.website"><strong>Website:</strong> <a :href="airline.website" target="_blank">{{ airline.website }}</a></p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      
      <div v-else class="no-airlines">
        <p>No airline information available.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.passenger-detail {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.back-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.back-button:hover {
  background: #2980b9;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error {
  color: #d32f2f;
}

.passenger-info h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.details {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.details p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.airlines-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.airlines {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
}

.airline-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.airline-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.airline-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.airline-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.airline-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 1rem;
  border-radius: 4px;
}

.airline-header h3 {
  margin: 0;
  color: #2c3e50;
}

.airline-details p {
  margin: 0.5rem 0;
  color: #666;
}

.airline-details a {
  color: #3498db;
  text-decoration: none;
}

.airline-details a:hover {
  text-decoration: underline;
}

.no-airlines {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem;
}
</style>
