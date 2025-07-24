export interface Passenger {
  _id: string
  name: string
  trips: number
  airline: Airline[]  // 注意：这是一个数组，包含完整的航空公司对象
  __v: number
}

export interface Airline {
  _id: string
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string  // 注意：API中使用的是这个拼写
  website: string
  established: string
  __v?: number  // 航空公司对象中可能没有__v字段
}

// 用于创建乘客的类型（API只需要name, trips, airline ID）
export interface CreatePassengerRequest {
  name: string
  trips: number
  airline: number  // 创建时只需要航空公司ID
}

// 用于创建航空公司的类型
export interface CreateAirlineRequest {
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string
  website: string
  established: string
}

// 用于更新乘客姓名的类型
export interface UpdatePassengerNameRequest {
  name: string
}
