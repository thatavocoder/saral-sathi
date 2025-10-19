import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const TOKEN_KEY = 'bearerToken'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  token: sessionStorage.getItem(TOKEN_KEY),
  isAuthenticated: !!sessionStorage.getItem(TOKEN_KEY),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem(TOKEN_KEY, action.payload)
      state.token = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      sessionStorage.removeItem(TOKEN_KEY)
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
