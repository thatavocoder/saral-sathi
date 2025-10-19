import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import filterReducer from './slices/filterSlice'
import metricsReducer from './slices/metricsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filterReducer,
    metrics: metricsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
