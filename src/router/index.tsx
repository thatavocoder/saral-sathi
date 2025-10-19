import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { UnprotectedRoute } from './UnprotectedRoute'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { ROUTE_PATHS } from './route-paths'
import { MainLayout } from '../layouts/MainLayout'
import { PostsPage } from '../pages/PostsPage'
import { AssetsPage } from '../pages/AssetsPage'
import { UploadsPage } from '../pages/UploadsPage'
import { PaymentsPage } from '../pages/PaymentsPage'
import { ProfilePage } from '../pages/ProfilePage'

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
          {
            path: ROUTE_PATHS.POSTS,
            element: <PostsPage />,
          },
          {
            path: ROUTE_PATHS.ASSETS,
            element: <AssetsPage />,
          },
          {
            path: ROUTE_PATHS.UPLOADS,
            element: <UploadsPage />,
          },
          {
            path: ROUTE_PATHS.PAYMENTS,
            element: <PaymentsPage />,
          },
          {
            path: ROUTE_PATHS.PROFILE,
            element: <ProfilePage />,
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
