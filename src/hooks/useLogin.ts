import { useMutation } from '@tanstack/react-query'
import { useApi } from './useApi'
import { useAppDispatch } from '@/store/hooks'
import { login } from '@/store/slices/authSlice'
import type { LoginCredentials, LoginResponse } from '@/types/auth'

export const useLogin = () => {
  const { post } = useApi()
  const dispatch = useAppDispatch()

  return useMutation({
    mutationFn: (credentials: LoginCredentials) =>
      post<LoginResponse, LoginCredentials>('auth/login', credentials),
    onSuccess: (data) => {
      dispatch(login({ token: data.token, email: 'jennelsonfitness@gmail.com' }))
    },
  })
}
