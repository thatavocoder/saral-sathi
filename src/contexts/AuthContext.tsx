import { createContext, useContext, useState } from 'react'

const TOKEN_KEY = 'bearerToken'

type AuthContextType = {
  token: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem(TOKEN_KEY))

  const isAuthenticated = !!token

  const login = (newToken: string) => {
    sessionStorage.setItem(TOKEN_KEY, newToken)
    setToken(newToken)
  }

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
