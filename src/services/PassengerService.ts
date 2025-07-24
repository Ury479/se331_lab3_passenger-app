import axios from 'axios'
import type { Passenger, Airline } from '@/types/passenger'
import { mockPassengers, mockAirlines } from '@/data/mockData'

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

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  // 获取乘客列表 - 支持分页，修正API路径
  async getPassengers(page: number = 0, size: number = 10) {
    try {
      const response = await apiClient.get<{ totalPassengers: number; totalPages: number; data: Passenger[] }>(`/passenger?page=${page}&size=${size}`)
      return response
    } catch (error) {
      console.warn('API not available, using mock data:', error)
      // Simulate API delay
      await delay(500)
      return {
        data: {
          totalPassengers: mockPassengers.length,
          totalPages: 1,
          data: mockPassengers
        }
      }
    }
  },
  
  // 获取单个乘客详情 - 修正API路径
  async getPassenger(id: string) {
    try {
      const response = await apiClient.get<Passenger>(`/passenger/${id}`)
      return response
    } catch (error) {
      console.warn('API not available, using mock data:', error)
      // Simulate API delay
      await delay(300)
      const passenger = mockPassengers.find(p => p._id === id)
      if (!passenger) {
        throw new Error('Passenger not found')
      }
      return { data: passenger }
    }
  },
  
  // 创建新乘客
  async createPassenger(passengerData: Omit<Passenger, '_id' | '__v'>) {
    try {
      const response = await apiClient.post<Passenger>('/passenger', passengerData)
      return response
    } catch (error) {
      console.warn('API not available, simulating creation:', error)
      await delay(300)
      const newPassenger: Passenger = {
        ...passengerData,
        _id: Date.now().toString(),
        __v: 0
      }
      return { data: newPassenger }
    }
  },
  
  // 更新乘客信息 (完整更新)
  async updatePassenger(id: string, passengerData: Omit<Passenger, '_id' | '__v'>) {
    try {
      const response = await apiClient.put<Passenger>(`/passenger/${id}`, passengerData)
      return response
    } catch (error) {
      console.warn('API not available, simulating update:', error)
      await delay(300)
      const updatedPassenger: Passenger = {
        ...passengerData,
        _id: id,
        __v: 0
      }
      return { data: updatedPassenger }
    }
  },
  
  // 部分更新乘客信息
  async patchPassenger(id: string, partialData: Partial<Omit<Passenger, '_id' | '__v'>>) {
    try {
      const response = await apiClient.patch<Passenger>(`/passenger/${id}`, partialData)
      return response
    } catch (error) {
      console.warn('API not available, simulating patch:', error)
      await delay(300)
      const existingPassenger = mockPassengers.find(p => p._id === id)
      if (!existingPassenger) {
        throw new Error('Passenger not found')
      }
      const patchedPassenger: Passenger = {
        ...existingPassenger,
        ...partialData
      }
      return { data: patchedPassenger }
    }
  },
  
  // 删除乘客
  async deletePassenger(id: string) {
    try {
      const response = await apiClient.delete(`/passenger/${id}`)
      return response
    } catch (error) {
      console.warn('API not available, simulating deletion:', error)
      await delay(300)
      return { data: { message: 'Passenger deleted successfully' } }
    }
  },
  
  // 获取所有航空公司
  async getAirlines() {
    try {
      const response = await apiClient.get<Airline[]>('/airlines')
      return response
    } catch (error) {
      console.warn('API not available, using mock data:', error)
      await delay(300)
      return { data: mockAirlines }
    }
  },
  
  // 获取单个航空公司详情
  async getAirline(id: string) {
    try {
      const response = await apiClient.get<Airline>(`/airlines/${id}`)
      return response
    } catch (error) {
      console.warn('API not available, using mock data:', error)
      // Simulate API delay
      await delay(300)
      const airline = mockAirlines.find(a => a._id === id)
      if (!airline) {
        throw new Error('Airline not found')
      }
      return { data: airline }
    }
  },
  
  // 创建新航空公司
  async createAirline(airlineData: Omit<Airline, '_id' | '__v'>) {
    try {
      const response = await apiClient.post<Airline>('/airlines', airlineData)
      return response
    } catch (error) {
      console.warn('API not available, simulating creation:', error)
      await delay(300)
      const newAirline: Airline = {
        ...airlineData,
        _id: Date.now().toString(),
        __v: 0
      }
      return { data: newAirline }
    }
  }
}
