import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTimeRange } from '@/store/slices/filterSlice'
import { TimeRange } from '@/types/filters'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import HomeIcon from '../assets/icons/home.svg?react'
import AlbumIcon from '../assets/icons/album.svg?react'
import AssetsIcon from '../assets/icons/assets.svg?react'
import UploadsIcon from '../assets/icons/uploads.svg?react'
import PaymentsIcon from '../assets/icons/payments.svg?react'
import ProfileIcon from '../assets/icons/profile.svg?react'
import CalendarIcon from '../assets/icons/calendar.svg?react'
import BellIcon from '../assets/icons/bell.svg?react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { logout } from '@/store/slices/authSlice'

const navLinks = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/posts', label: 'Posts', icon: AlbumIcon },
  { to: '/assets', label: 'Assets', icon: AssetsIcon },
  { to: '/uploads', label: 'Uploads', icon: UploadsIcon },
  { to: '/payments', label: 'Payments', icon: PaymentsIcon },
  { to: '/profile', label: 'Profile', icon: ProfileIcon },
]

const timeRangeOptions = [
  { value: TimeRange.AllTime, label: 'All time' },
  { value: TimeRange.Last7Days, label: 'Last 7 days' },
  { value: TimeRange.Last30Days, label: 'Last 30 days' },
  { value: TimeRange.Last90Days, label: 'Last 90 days' },
]

export const Navbar = () => {
  const dispatch = useAppDispatch()
  const selectedValue = useAppSelector((state) => state.filters.timeRange)

  const handleTimeRangeChange = (value: string) => {
    dispatch(setTimeRange(value as TimeRange))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="flex items-center justify-between py-2.5 px-6 bg-white border-b">
      <div className="flex items-center gap-2">
        <img src={'/saral-logo.png'} alt="logo" className="h-10 w-36" />
      </div>
      <nav className="flex items-center gap-4">
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-sm font-normal py-2.5 px-3.5 ${
                isActive ? 'text-primary' : 'text-foreground hover:text-primary'
              }`
            }
          >
            <Icon className="w-6.5 h-6.5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-6">
        <Select value={selectedValue} onValueChange={handleTimeRangeChange}>
          <SelectTrigger className="font-medium data-[placeholder]:text-select-foreground [&_svg:not([class*='text-'])]:text-select-foreground border-select-border rounded-sm px-2.5 data-[size=default]:h-10">
            <div className="flex items-center gap-1 text-select-foreground">
              <CalendarIcon className="h-4 w-4 " />
              <SelectValue placeholder="All time" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {timeRangeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <BellIcon className="w-5 h-5" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="size-9 cursor-pointer">
              <AvatarImage src={'/src/assets/profile-pic.png'} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={handleLogout}
              variant="destructive"
              className="cursor-pointer"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
