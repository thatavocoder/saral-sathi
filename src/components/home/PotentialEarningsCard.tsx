import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import InfoIcon from '@/assets/icons/info.svg?react'

export const PotentialEarningsCard = () => {
  return (
    <Card className="gap-0 py-0">
      <CardContent className="p-6 flex flex-col gap-6">
        <div className="flex gap-2 items-start">
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
              $0
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-sm text-foreground font-medium">1 Post</span>
            <span className="text-sm text-foreground font-medium">15 Posts</span>
          </div>
          <Slider defaultValue={[1]} min={1} max={15} className="pb-2" />
        </div>
      </CardContent>
    </Card>
  )
}
