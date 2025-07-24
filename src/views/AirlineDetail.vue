<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PassengerService from '@/services/PassengerService'
import type { Airline } from '@/types/passenger'

const route = useRoute()
const router = useRouter()
const airline = ref<Airline | null>(null)
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  const id = route.params.id as string
  if (!id) {
    error.value = 'No airline ID provided'
    loading.value = false
    return
  }

  try {
    const response = await PassengerService.getAirline(id)
    airline.value = response.data
  } catch (err) {
    error.value = 'Airline not found'
    console.error('Error loading airline:', err)
  } finally {
    loading.value = false
  }
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="airline-detail">
    <button @click="goBack" class="back-button">← Back</button>
    
    <div v-if="loading" class="loading">
      Loading airline details...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else-if="airline" class="airline-info">
      <div class="airline-header">
        <img v-if="airline.logo" :src="airline.logo" :alt="airline.name" class="airline-logo-large">
        <div class="airline-title">
          <h1>{{ airline.name }}</h1>
          <p class="slogan">{{ airline.slogan }}</p>
        </div>
      </div>
      
      <div class="airline-details">
        <div class="detail-grid">
          <div class="detail-item">
            <h3>Country</h3>
            <p>{{ airline.country }}</p>
          </div>
          
          <div class="detail-item">
            <h3>Established</h3>
            <p>{{ airline.established }}</p>
          </div>
          
          <div class="detail-item" v-if="airline.head_quaters">
            <h3>Headquarters</h3>
            <p>{{ airline.head_quaters }}</p>
          </div>
          
          <div class="detail-item" v-if="airline.website">
            <h3>Website</h3>
            <p><a :href="airline.website" target="_blank" class="website-link">{{ airline.website }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.airline-detail {
  padding: 2rem;
  max-width: 1000px;
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

.airline-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.airline-logo-large {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 2rem;
  border-radius: 8px;
  background: white;
  padding: 10px;
}

.airline-title h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
}

.slogan {
  margin: 0.5rem 0 0 0;
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.9;
}

.airline-details {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.detail-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.detail-item h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
}

.detail-item p {
  margin: 0;
  color: #666;
  font-size: 1rem;
}

.website-link {
  color: #3498db;
  text-decoration: none;
  word-break: break-all;
}

.website-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .airline-header {
    flex-direction: column;
    text-align: center;
  }
  
  .airline-logo-large {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .airline-title h1 {
    font-size: 2rem;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
