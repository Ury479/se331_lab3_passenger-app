import axios from 'axios'
import type { Passenger, Airline } from '@/types/passenger'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1',
  timeout: 10000
})

// Add response interceptor to handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      throw new Error('Resource not found')
    }
    throw error
  }
)

export default {
  getPassengers() {
    return apiClient.get<{ totalPassengers: number; totalPages: number; data: Passenger[] }>('/passengers')
  },
  
  getPassenger(id: string) {
    return apiClient.get<Passenger>(`/passengers/${id}`)
  },
  
  getAirline(id: string) {
    return apiClient.get<Airline>(`/airlines/${id}`)
  }
}
