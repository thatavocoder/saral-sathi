import { NavLink } from 'react-router-dom'
import HomeIcon from '@/assets/icons/home.svg?react'
import AlbumIcon from '@/assets/icons/album.svg?react'
import AssetsIcon from '@/assets/icons/assets.svg?react'
import UploadsIcon from '@/assets/icons/uploads.svg?react'
import PaymentsIcon from '@/assets/icons/payments.svg?react'
import ProfileIcon from '@/assets/icons/profile.svg?react'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/', icon: HomeIcon },
  { to: '/posts', icon: AlbumIcon },
  { to: '/assets', icon: AssetsIcon },
  { to: '/uploads', icon: UploadsIcon },
  { to: '/payments', icon: PaymentsIcon },
  { to: '/profile', icon: ProfileIcon },
]

export const BottomBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-card px-7 py-6">
      <nav className="flex items-center justify-around md:w-3/4 md:mx-auto">
        {navLinks.map(({ to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => cn(isActive ? 'text-primary' : 'text-card-foreground')}
          >
            <Icon className="w-6 h-6" />
          </NavLink>
        ))}
      </nav>
    </footer>
  )
}
