import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { MobileNavbar } from '../components/MobileNavbar'
import { BottomBar } from '../components/BottomBar'

export const MainLayout = () => {
  return (
    <div className="mb-18 lg:mb-0">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <main>
        <Outlet />
      </main>
      <div className="block lg:hidden">
        <BottomBar />
      </div>
    </div>
  )
}
