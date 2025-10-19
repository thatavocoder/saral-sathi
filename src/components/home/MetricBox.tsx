import React from 'react'
import { cn } from '@/lib/utils'

interface MetricBoxProps {
  icon: React.ReactElement<{ className?: string }>
  value: string | number
  label: string
  bgClassName?: string
}

export const MetricBox = ({
  icon,
  value,
  label,
  bgClassName = 'bg-destructive-light',
}: MetricBoxProps) => {
  return (
    <div className="border rounded-lg p-3.75 flex items-center gap-2 pr-6">
      <div
        className={cn('rounded-full h-13.5 w-13.5 flex items-center justify-center', bgClassName)}
      >
        {icon}
      </div>
      <div className="flex flex-col justify-center w-24">
        <span className="text-(length:--font-xl) font-medium text-metrics-text">{value}</span>
        <span className="text-base font-normal text-foreground">{label}</span>
      </div>
    </div>
  )
}
