import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import InfoIcon from '@/assets/icons/info.svg?react'
import { useState } from 'react'
import { useAppSelector } from '@/store/hooks'

export const PotentialEarningsCard = () => {
  const { revenue, posts } = useAppSelector((state) => state.metrics)
  const [sliderValue, setSliderValue] = useState(1)

  const revenueValue = parseFloat(revenue.replace('$', ''))
  const earningsPerPost = posts > 0 ? revenueValue / posts : 0
  const potentialEarnings = (sliderValue * earningsPerPost).toFixed(2)

  return (
    <Card className="gap-0 py-0">
      <CardContent className="p-6 flex flex-col gap-7.5">
        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-lg font-medium flex items-center gap-2 text-card-foreground">
              Potential Earnings <InfoIcon className="h-4 w-4" />
            </span>
            <span className="text-foreground text-sm font-normal">
              How much you might earn with more posts!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-(length:--font-xl) font-medium text-disabled w-17 text-center border-b">
              ${potentialEarnings}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-sm text-foreground font-medium">
              {sliderValue} Post{sliderValue > 1 && 's'}
            </span>
            <span className="text-sm text-foreground font-medium">15 Posts</span>
          </div>
          <Slider
            value={[sliderValue]}
            min={1}
            max={15}
            className="pb-2"
            onValueChange={(value) => setSliderValue(value[0])}
          />
        </div>
      </CardContent>
    </Card>
  )
}
