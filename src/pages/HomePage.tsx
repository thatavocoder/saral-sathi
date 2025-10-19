import { MetricsCard } from '@/components/home/MetricsCard'
import { LinksAndCodesCard } from '@/components/home/LinksAndCodesCard'
import { PotentialEarningsCard } from '@/components/home/PotentialEarningsCard'
import { MyCommissionCard } from '@/components/home/MyCommissionCard'

export const HomePage = () => {
  return (
    <div className="flex min-h-[calc(100vh-91px)] items-center justify-center gap-6 py-6">
      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <MyCommissionCard />
          <LinksAndCodesCard />
        </div>
        <div className="flex flex-shrink-0 flex-col gap-6">
          <MetricsCard />
          <PotentialEarningsCard />
        </div>
      </div>
    </div>
  )
}
