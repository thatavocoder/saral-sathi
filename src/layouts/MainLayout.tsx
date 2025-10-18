import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
