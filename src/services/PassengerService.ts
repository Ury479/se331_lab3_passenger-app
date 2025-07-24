import axios from 'axios'
import type { 
  Passenger, 
  Airline, 
  CreatePassengerRequest, 
  CreateAirlineRequest, 
  UpdatePassengerNameRequest 
} from '@/types/passenger'
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
  // 获取乘客列表 - 支持分页
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
  
  // 获取单个乘客详情 - 返回包含完整航空公司信息的乘客对象
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
  
  // 创建新乘客 - 使用简化的请求格式（name, trips, airline ID）
  async createPassenger(passengerData: CreatePassengerRequest) {
    try {
      const response = await apiClient.post<Passenger>('/passenger', passengerData)
      return response
    } catch (error) {
      console.warn('API not available, simulating creation:', error)
      await delay(300)
      // 模拟创建后返回完整的乘客对象
      const mockAirline = mockAirlines.find(a => a._id === passengerData.airline.toString())
      const newPassenger: Passenger = {
        _id: Date.now().toString(),
        name: passengerData.name,
        trips: passengerData.trips,
        airline: mockAirline ? [mockAirline] : [],
        __v: 0
      }
      return { data: newPassenger }
    }
  },
  
  // 更新乘客姓名 - 只允许更新姓名
  async updatePassengerName(id: string, nameData: UpdatePassengerNameRequest) {
    try {
      const response = await apiClient.patch<Passenger>(`/passenger/${id}`, nameData)
      return response
    } catch (error) {
      console.warn('API not available, simulating name update:', error)
      await delay(300)
      const existingPassenger = mockPassengers.find(p => p._id === id)
      if (!existingPassenger) {
        throw new Error('Passenger not found')
      }
      const updatedPassenger: Passenger = {
        ...existingPassenger,
        name: nameData.name
      }
      return { data: updatedPassenger }
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
  
  // 获取所有航空公司 - 返回航空公司数组
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
  async createAirline(airlineData: CreateAirlineRequest) {
    try {
      const response = await apiClient.post<Airline>('/airlines', airlineData)
      return response
    } catch (error) {
      console.warn('API not available, simulating creation:', error)
      await delay(300)
      const newAirline: Airline = {
        ...airlineData,
        _id: Date.now().toString()
      }
      return { data: newAirline }
    }
  }
}
