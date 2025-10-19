import { Card, CardContent } from '@/components/ui/card'
import avatarImg from '@/assets/avatar.png'
import EmailIcon from '@/assets/icons/email.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'
import PeopleIcon from '@/assets/icons/people.svg?react'
import { MetricBox } from './MetricBox'
import GalleryIcon from '@/assets/icons/gallery.svg?react'
import DollarIcon from '@/assets/icons/dollar.svg?react'
import BagHeartIcon from '@/assets/icons/bag-heart.svg?react'

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
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2 pt-4.5">
            <div className="rounded-full h-31 w-31 bg-grey-300">
              <img src={avatarImg} alt="avatar" className="h-full w-full object-cover" />
            </div>
            <span className="text-xl font-medium text-grey-900">Jen Nelson</span>
            <div className="flex items-center justify-center gap-2">
              <EmailIcon className="h-5 w-5 text-card-foreground" />
              <span className="text-base font-normal text-foreground">
                jennelsonfitness@gmail.com
              </span>
              <EditIcon className="h-5 w-5 text-card-foreground" />
            </div>
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
