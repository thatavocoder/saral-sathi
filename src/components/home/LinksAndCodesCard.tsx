import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import CopyIcon from '@/assets/icons/copy.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'
import CheckIcon from '@/assets/icons/check.svg?react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import XIcon from '@/assets/icons/x.svg?react'

export const LinksAndCodesCard = () => {
  const [copied, setCopied] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [couponCode, setCouponCode] = useState('KIMAYA10')
  const [inputValue, setInputValue] = useState(couponCode)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => {
      setCopied(null)
    }, 2000)
  }

  const handleEdit = () => {
    setInputValue(couponCode)
    setIsEditing(true)
  }

  const handleSave = () => {
    setCouponCode(inputValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

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
            {copied === 'trackingLink' ? (
              <CheckIcon className="h-5 w-5 text-primary" />
            ) : (
              <CopyIcon
                className="h-5 w-5 text-primary cursor-pointer"
                onClick={() => handleCopy('ds&durga.trysaral.com/kimiko', 'trackingLink')}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 px-6 py-6">
          <Label className="text-foreground font-normal">Coupon Code :</Label>
          {isEditing ? (
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                name="coupon-code"
                className="h-11"
              />
              <Button onClick={handleSave} size="icon" variant="ghost">
                <span className="sr-only">Save</span>
                <CheckIcon className="h-5 w-5 text-primary" />
              </Button>
              <Button onClick={handleCancel} size="icon" variant="ghost">
                <span className="sr-only">Cancel</span>
                <XIcon className="h-5 w-5 text-destructive" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-fit flex items-center justify-between rounded border border-dashed border-primary-border-light px-2.5 py-2 gap-2">
                <span className="text-primary font-[450] text-base">{couponCode}</span>
                {copied === 'couponCode' ? (
                  <CheckIcon className="h-5 w-5 text-primary" />
                ) : (
                  <CopyIcon
                    className="h-5 w-5 text-primary cursor-pointer"
                    onClick={() => handleCopy(couponCode, 'couponCode')}
                  />
                )}
              </div>
              <EditIcon
                className="h-5 w-5 text-card-foreground cursor-pointer"
                onClick={handleEdit}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
