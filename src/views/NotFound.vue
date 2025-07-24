<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <div class="error-content">
      <div class="error-code">404</div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>It might have been moved, deleted, or you entered the wrong URL.</p>
      
      <div class="actions">
        <button @click="goHome" class="home-button">Go to Home</button>
        <button @click="$router.back()" class="back-button">Go Back</button>
      </div>
    </div>
    
    <div class="illustration">
      <div class="plane">✈️</div>
      <div class="clouds">☁️ ☁️ ☁️</div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem;
}

.error-content {
  max-width: 600px;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.home-button, .back-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.home-button {
  background: #3498db;
  color: white;
}

.back-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.home-button:hover, .back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.illustration {
  margin-top: 2rem;
  font-size: 2rem;
}

.plane {
  animation: fly 3s ease-in-out infinite;
  display: inline-block;
}

.clouds {
  margin-top: 1rem;
  opacity: 0.7;
}

@keyframes fly {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
  }
  
  .home-button, .back-button {
    width: 200px;
  }
}
</style>
