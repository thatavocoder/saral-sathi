import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import CopyIcon from '@/assets/icons/copy.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'

export const LinksAndCodesCard = () => {
  return (
    <Card className="gap-0 py-0">
      <CardHeader className="border-b p-6 gap-0">
        <CardTitle className="text-lg font-medium text-card-foreground-dark-grey">
          My Links & Codes
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-2 px-6 py-6 border-b">
          <Label className="text-foreground font-normal">Tracking Link :</Label>
          <div className="flex items-center justify-between rounded border border-dashed border-primary-border-light gap-33 px-2.5 py-2">
            <span className="text-primary font-[450] text-base">ds&durga.trysaral.com/kimiko</span>
            <CopyIcon className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-6 py-6">
          <Label className="text-foreground font-normal">Coupon Code :</Label>
          <div className="flex items-center gap-2">
            <div className="w-fit flex items-center justify-between rounded border border-dashed border-primary-border-light px-2.5 py-2 gap-2">
              <span className="text-primary font-[450] text-base">KIMAYA10</span>
              <CopyIcon className="h-5 w-5 text-primary" />
            </div>
            <EditIcon className="h-5 w-5 text-card-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
