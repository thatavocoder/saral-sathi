import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { MobileNavbar } from '../components/MobileNavbar'

export const MainLayout = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
