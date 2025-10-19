import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'

export const UnprotectedRoute = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return <Outlet />
}
