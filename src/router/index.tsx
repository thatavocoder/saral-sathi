import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { UnprotectedRoute } from './UnprotectedRoute'
import HomePage from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { ROUTE_PATHS } from './route-paths'

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <UnprotectedRoute />,
    children: [
      {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
])
