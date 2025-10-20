import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import CopyIcon from '@/assets/icons/copy.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'
import CheckIcon from '@/assets/icons/check.svg?react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import XIcon from '@/assets/icons/x.svg?react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCouponCode } from '@/store/slices/authSlice'

export const LinksAndCodesCard = () => {
  const dispatch = useAppDispatch()
  const couponCode = useAppSelector((state) => state.auth.couponCode)
  const [copied, setCopied] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(couponCode || '')

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => {
      setCopied(null)
    }, 2000)
  }

  const handleEdit = () => {
    setInputValue(couponCode || '')
    setIsEditing(true)
  }

  const handleSave = () => {
    dispatch(setCouponCode(inputValue))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <Card className="gap-0 lg:gap-0 py-0 lg:py-0">
      <CardHeader className="border-b py-4 lg:py-6 gap-0">
        <CardTitle className="text-base lg:text-lg font-medium text-card-foreground-dark-grey">
          My Links & Codes
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 lg:p-0">
        <div className="flex flex-col gap-2 p-4 lg:p-6 border-b">
          <Label className="text-foreground font-normal">Tracking Link :</Label>
          <div className="flex items-center justify-between rounded-xs lg:rounded border border-dashed border-primary-border-light px-2 lg:px-2.5 py-2 lg:gap-33">
            <span className="text-primary font-[450] text-sm lg:text-base">
              ds&durga.trysaral.com/kimiko
            </span>
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
        <div className="flex flex-col gap-2 p-4 lg:p-6">
          <Label className="text-foreground font-normal">Coupon Code :</Label>
          {isEditing ? (
            <div className="flex items-center gap-2 h-9.5 lg:h-10.5">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                name="coupon-code"
              />
              <Button
                onClick={handleSave}
                className="h-6 lg:h-8 w-4 lg:w-6"
                size="icon"
                variant="ghost"
              >
                <span className="sr-only">Save</span>
                <CheckIcon className="h-5 w-5 text-primary" />
              </Button>
              <Button
                onClick={handleCancel}
                className="h-6 lg:h-8 w-4 lg:w-8"
                size="icon"
                variant="ghost"
              >
                <span className="sr-only">Cancel</span>
                <XIcon className="h-5 w-5 text-destructive" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-fit flex items-center justify-between rounded-xs lg:rounded border border-dashed border-primary-border-light px-2 lg:px-2.5 py-2 gap-2">
                <span className="text-primary font-[450] text-sm lg:text-base">{couponCode}</span>
                {copied === 'couponCode' ? (
                  <CheckIcon className="h-5 w-5 text-primary" />
                ) : (
                  <CopyIcon
                    className="h-5 w-5 text-primary cursor-pointer"
                    onClick={() => handleCopy(couponCode || '', 'couponCode')}
                  />
                )}
              </div>
              <EditIcon
                className="h-6 w-6 lg:h-5 lg:w-5 text-card-foreground cursor-pointer"
                onClick={handleEdit}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
