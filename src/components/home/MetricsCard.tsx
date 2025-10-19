import { Card, CardContent } from '@/components/ui/card'
import avatarImg from '@/assets/avatar.png'
import EmailIcon from '@/assets/icons/email.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'
import PeopleIcon from '@/assets/icons/people.svg?react'
import { MetricBox } from './MetricBox'
import GalleryIcon from '@/assets/icons/gallery.svg?react'
import DollarIcon from '@/assets/icons/dollar.svg?react'
import BagHeartIcon from '@/assets/icons/bag-heart.svg?react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CheckIcon from '@/assets/icons/check.svg?react'
import XIcon from '@/assets/icons/x.svg?react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setEmail } from '@/store/slices/authSlice'

export const MetricsCard = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.auth.email)
  const name = useAppSelector((state) => state.auth.name)
  const metrics = useAppSelector((state) => state.metrics)
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(email || '')

  const metricsData = [
    {
      icon: <PeopleIcon className="h-4 w-4 lg:h-6 lg:w-6 text-destructive" />,
      value: metrics.visitors,
      label: 'Visitors',
      bgClassName: 'bg-destructive-light',
    },
    {
      icon: <GalleryIcon className="h-4 w-4 lg:h-6 lg:w-6 text-info" />,
      value: metrics.posts,
      label: 'Posts',
      bgClassName: 'bg-info-light',
    },
    {
      icon: <DollarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-warning" />,
      value: metrics.revenue,
      label: 'Revenue',
      bgClassName: 'bg-warning-light',
    },
    {
      icon: <BagHeartIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />,
      value: metrics.orders,
      label: 'Orders',
      bgClassName: 'bg-yellow-50',
    },
  ]

  const handleEdit = () => {
    setInputValue(email || '')
    setIsEditing(true)
  }

  const handleSave = () => {
    dispatch(setEmail(inputValue))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <Card className='bg-[url("@/assets/bg-pattern.png")] bg-contain bg-top bg-no-repeat'>
      <CardContent>
        <div className="flex flex-col items-center gap-4 lg:gap-6">
          <div className="flex flex-col items-center justify-center gap-1 lg:pt-3 w-full">
            <div className="rounded-full h-23 lg:h-31 w-23 lg:w-31 bg-grey-300">
              <img src={avatarImg} alt="avatar" className="h-full w-full object-cover" />
            </div>
            <span className="text-base lg:text-xl font-medium text-grey-900">{name}</span>
            {isEditing ? (
              <div className="flex items-center gap-2 w-full max-h-5 lg:max-h-6 mt-1">
                <EmailIcon className="h-3.5 w-3.5 lg:h-5 lg:w-5 text-card-foreground flex-shrink-0" />
                <Input
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  name="email"
                  className="w-full h-6 lg:h-7 text-sm lg:text-base"
                />
                <Button onClick={handleSave} className="h-6 lg:h-7" variant="ghost">
                  <span className="sr-only">Save</span>
                  <CheckIcon className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-primary" />
                </Button>
                <Button onClick={handleCancel} className="h-6 lg:h-7" variant="ghost">
                  <span className="sr-only">Cancel</span>
                  <XIcon className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-destructive" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <EmailIcon className="h-3.5 w-3.5 lg:h-5 lg:w-5 text-card-foreground" />
                <span className="text-sm lg:text-base font-normal text-foreground">{email}</span>
                <EditIcon
                  className="h-5 w-5 text-card-foreground cursor-pointer"
                  onClick={handleEdit}
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3.5 lg:gap-6">
            {metricsData.map((metric, index) => (
              <MetricBox
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
                bgClassName={metric.bgClassName}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
