import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import chipImg from '@/assets/chip.png'
import logoWhiteImg from '@/assets/logo-white.png'
import TIcon from '@/assets/icons/t-icon.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'

export const MyCommissionCard = () => {
  return (
    <Card>
      <CardHeader className="gap-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium text-card-foreground">My Commission</CardTitle>
          <div className="text-sm font-normal text-foreground">20% Commission</div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-center justify-start">
        <Card className="bg-[url('@/assets/card-bg.png')] bg-cover bg-center bg-no-repeat rounded-2xl w-fit p-5">
          <CardContent className="px-0">
            <div className="flex flex-col gap-16">
              <div className="flex gap-37 items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-normal gap-2 text-commission-card-foreground">
                    Current Balance
                  </span>
                  <span className="text-card text-3xl font-normal">$ 28.75</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={chipImg} alt="chip" className="h-8.5 w-8.5" />
                </div>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex flex-col gap-0">
                  <span className="text-(length:--font-xs) font-normal text-commission-card-foreground">
                    Card Holder
                  </span>
                  <span className="text-sm font-medium text-card uppercase">Jen Nelson</span>
                </div>
                <img src={logoWhiteImg} alt="visa" className="h-6.25" />
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter>
        <div className="flex border rounded p-2 w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <TIcon className="h-5 w-5" />
            <span className="text-base font-normal text-foreground">Payment Email: </span>
            <span className="text-base font-normal text-card-foreground-dark-grey">N/A</span>
          </div>
          <div className="flex items-center gap-2">
            <EditIcon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
