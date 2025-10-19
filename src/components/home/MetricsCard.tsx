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

const metricsData = [
  {
    icon: <PeopleIcon className="h-6 w-6 text-destructive" />,
    value: 416,
    label: 'Visitors',
    bgClassName: 'bg-destructive-light',
  },
  {
    icon: <GalleryIcon className="h-6 w-6 text-info" />,
    value: 16,
    label: 'Posts',
    bgClassName: 'bg-info-light',
  },
  {
    icon: <DollarIcon className="h-6 w-6 text-warning" />,
    value: '$416',
    label: 'Revenue',
    bgClassName: 'bg-warning-light',
  },
  {
    icon: <BagHeartIcon className="h-6 w-6 text-yellow-500" />,
    value: 46,
    label: 'Orders',
    bgClassName: 'bg-yellow-50',
  },
]

export const MetricsCard = () => {
  const dispatch = useAppDispatch()
  const email = useAppSelector((state) => state.auth.email)
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(email || '')

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
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2 pt-3 w-full">
            <div className="rounded-full h-31 w-31 bg-grey-300">
              <img src={avatarImg} alt="avatar" className="h-full w-full object-cover" />
            </div>
            <span className="text-xl font-medium text-grey-900">Jen Nelson</span>
            {isEditing ? (
              <div className="flex items-center gap-2 w-full max-h-6">
                <EmailIcon className="h-5 w-5 text-card-foreground flex-shrink-0" />
                <Input
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  name="email"
                  className="w-full h-7"
                />
                <Button onClick={handleSave} className="h-7" variant="ghost">
                  <span className="sr-only">Save</span>
                  <CheckIcon className="h-4 w-4 text-primary" />
                </Button>
                <Button onClick={handleCancel} className="h-7" variant="ghost">
                  <span className="sr-only">Cancel</span>
                  <XIcon className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <EmailIcon className="h-5 w-5 text-card-foreground" />
                <span className="text-base font-normal text-foreground">{email}</span>
                <EditIcon
                  className="h-5 w-5 text-card-foreground cursor-pointer"
                  onClick={handleEdit}
                />
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-6">
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
