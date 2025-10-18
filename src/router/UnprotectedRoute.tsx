import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const UnprotectedRoute = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
