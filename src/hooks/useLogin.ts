import { useMutation } from '@tanstack/react-query'
import { useApi } from './useApi'
import { useAuth } from '@/contexts/AuthContext'
import type { LoginCredentials, LoginResponse } from '@/types/auth'

export const useLogin = () => {
  const { post } = useApi()
  const { login } = useAuth()

  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      post<LoginResponse, LoginCredentials>('auth/login', credentials),
    onSuccess: (data) => {
      login(data.token)
    },
  })
}
