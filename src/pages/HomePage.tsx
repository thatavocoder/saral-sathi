import { MetricsCard } from '@/components/home/MetricsCard'
import { LinksAndCodesCard } from '@/components/home/LinksAndCodesCard'
import { PotentialEarningsCard } from '@/components/home/PotentialEarningsCard'
import { MyCommissionCard } from '@/components/home/MyCommissionCard'

export const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-91px)] p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 md:items-center lg:justify-center">
        <div className="flex w-full flex-col gap-4 lg:gap-6 md:w-3/4 lg:w-max">
          <div className="block lg:hidden">
            <MetricsCard />
          </div>
          <MyCommissionCard />
          <LinksAndCodesCard />
        </div>
        <div className="flex w-full flex-col gap-4 lg:gap-6 md:w-3/4 lg:w-max">
          <div className="hidden lg:block">
            <MetricsCard />
          </div>
          <PotentialEarningsCard />
        </div>
      </div>
    </div>
  )
}
