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
    <div className="border rounded md:rounded-lg p-3 md:p-4 flex items-center gap-1 md:pr-6.75">
      <div
        className={cn(
          'rounded-full h-9.5 md:h-13.5 w-9.5 md:w-13.5 flex items-center justify-center flex-shrink-0',
          bgClassName
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col md:justify-center md:w-24 gap-0">
        <span className="text-base md:text-(length:--font-xl) font-medium text-metrics-text">
          {value}
        </span>
        <span className="text-sm md:text-base font-normal text-foreground">{label}</span>
      </div>
    </div>
  )
}
