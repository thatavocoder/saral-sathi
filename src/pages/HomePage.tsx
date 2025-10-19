import { MetricsCard } from '@/components/home/MetricsCard'
import { LinksAndCodesCard } from '@/components/home/LinksAndCodesCard'
import { PotentialEarningsCard } from '@/components/home/PotentialEarningsCard'
import { MyCommissionCard } from '@/components/home/MyCommissionCard'

export const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-91px)] p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-center">
        <div className="flex w-full flex-col gap-6 md:w-max">
          <div className="block md:hidden">
            <MetricsCard />
          </div>
          <MyCommissionCard />
          <LinksAndCodesCard />
        </div>
        <div className="flex w-full flex-col gap-6 md:w-max">
          <div className="hidden md:block">
            <MetricsCard />
          </div>
          <PotentialEarningsCard />
        </div>
      </div>
    </div>
  )
}
