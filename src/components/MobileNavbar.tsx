import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTimeRange } from '@/store/slices/filterSlice'
import { TimeRange } from '@/types/filters'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import CalendarIcon from '../assets/icons/calendar.svg?react'
import BellIcon from '../assets/icons/bell.svg?react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'
import { Button } from './ui/button'
import profileImg from '../assets/profile-pic.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { logout } from '@/store/slices/authSlice'

const timeRangeOptions = [
  { value: TimeRange.AllTime, label: 'All time' },
  { value: TimeRange.Last7Days, label: 'Last 7 days' },
  { value: TimeRange.Last30Days, label: 'Last 30 days' },
  { value: TimeRange.Last90Days, label: 'Last 90 days' },
]

export const MobileNavbar = () => {
  const dispatch = useAppDispatch()
  const selectedValue = useAppSelector((state) => state.filters.timeRange)

  const handleTimeRangeChange = (value: string) => {
    dispatch(setTimeRange(value as TimeRange))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const pathName = useLocation().pathname.split('/').pop() || ''
  const pageTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1) || 'Home'

  return (
    <header className="flex items-center justify-between py-4 px-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium text-black">{pageTitle}</span>
      </div>
      <div className="flex items-center gap-4">
        <BellIcon className="w-5 h-5" />
        <Drawer>
          <DrawerTrigger>
            <CalendarIcon className="h-5 w-5" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Select Time Range</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-2 p-4">
              {timeRangeOptions.map((option) => (
                <DrawerClose key={option.value} asChild>
                  <Button
                    variant={selectedValue === option.value ? 'default' : 'outline'}
                    onClick={() => handleTimeRangeChange(option.value)}
                  >
                    {option.label}
                  </Button>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="size-6 cursor-pointer">
              <AvatarImage src={profileImg} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={handleLogout}
              className="cursor-pointer"
              variant="destructive"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
