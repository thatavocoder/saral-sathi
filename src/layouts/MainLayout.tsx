import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { MobileNavbar } from '../components/MobileNavbar'

export const MainLayout = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
