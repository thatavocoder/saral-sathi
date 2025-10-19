import { createSlice } from '@reduxjs/toolkit'

interface MetricsState {
  visitors: number
  posts: number
  revenue: string
  orders: number
}

const initialState: MetricsState = {
  visitors: 416,
  posts: 16,
  revenue: '$416',
  orders: 46,
}

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {},
})

export default metricsSlice.reducer
