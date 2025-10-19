import { useAppSelector } from '@/store/hooks'

const BASE_URL = 'https://dev-api.mysathi.io'

type ApiResponse<T> = {
  status: 'success' | 'error'
  debugMessage: string
  data: T
}

type ApiHook = {
  post: <T, U>(endpoint: string, data: U) => Promise<T>
}

export const useApi = (): ApiHook => {
  const { token } = useAppSelector((state) => state.auth)

  const post = async <T, U>(endpoint: string, data: U): Promise<T> => {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })

    const jsonResponse: ApiResponse<T> = await response.json()

    if (!response.ok || (jsonResponse.status && jsonResponse.status !== 'success')) {
      const errorMessage =
        (jsonResponse as any).message || jsonResponse.debugMessage || 'Network response was not ok'
      throw new Error(errorMessage)
    }

    return jsonResponse.data
  }

  return { post }
}
