import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { UnprotectedRoute } from './UnprotectedRoute'
import HomePage from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { ROUTE_PATHS } from './route-paths'
import { MainLayout } from '../layouts/MainLayout'

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTE_PATHS.HOME,
            element: <HomePage />,
          },
        ],
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
