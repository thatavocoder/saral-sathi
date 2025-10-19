import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const TOKEN_KEY = 'bearerToken'
const EMAIL_KEY = 'userEmail'
const PAYMENT_EMAIL_KEY = 'paymentEmail'
const COUPON_CODE_KEY = 'couponCode'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  email: string | null
  paymentEmail: string | null
  couponCode: string | null
}

const initialState: AuthState = {
  token: sessionStorage.getItem(TOKEN_KEY),
  isAuthenticated: !!sessionStorage.getItem(TOKEN_KEY),
  email: 'jennelsonfitness@gmail.com',
  paymentEmail: sessionStorage.getItem(PAYMENT_EMAIL_KEY),
  couponCode: sessionStorage.getItem(COUPON_CODE_KEY) || 'KIMAYA10',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; email: string }>) => {
      sessionStorage.setItem(TOKEN_KEY, action.payload.token)
      sessionStorage.setItem(EMAIL_KEY, action.payload.email)
      state.token = action.payload.token
      state.email = action.payload.email
      state.isAuthenticated = true
    },
    logout: (state) => {
      sessionStorage.removeItem(TOKEN_KEY)
      sessionStorage.removeItem(EMAIL_KEY)
      sessionStorage.removeItem(PAYMENT_EMAIL_KEY)
      sessionStorage.removeItem(COUPON_CODE_KEY)
      state.token = null
      state.email = null
      state.paymentEmail = null
      state.couponCode = null
      state.isAuthenticated = false
    },
    setEmail: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem(EMAIL_KEY, action.payload)
      state.email = action.payload
    },
    setPaymentEmail: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem(PAYMENT_EMAIL_KEY, action.payload)
      state.paymentEmail = action.payload
    },
    setCouponCode: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem(COUPON_CODE_KEY, action.payload)
      state.couponCode = action.payload
    },
  },
})

export const { login, logout, setEmail, setPaymentEmail, setCouponCode } = authSlice.actions
export default authSlice.reducer
