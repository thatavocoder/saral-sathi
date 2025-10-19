import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import chipImg from '@/assets/chip.png'
import logoWhiteImg from '@/assets/logo-white.png'
import TIcon from '@/assets/icons/t-icon.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'
import CheckIcon from '@/assets/icons/check.svg?react'
import XIcon from '@/assets/icons/x.svg?react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setPaymentEmail } from '@/store/slices/authSlice'

export const MyCommissionCard = () => {
  const dispatch = useAppDispatch()
  const paymentEmail = useAppSelector((state) => state.auth.paymentEmail)
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(paymentEmail || 'N/A')

  const handleEdit = () => {
    setInputValue(paymentEmail || 'N/A')
    setIsEditing(true)
  }

  const handleSave = () => {
    dispatch(setPaymentEmail(inputValue))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <Card>
      <CardHeader className="gap-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base lg:text-lg font-medium text-card-foreground">
            My Commission
          </CardTitle>
          <div className="text-(length:--font-sm) lg:text-sm font-normal text-foreground">
            20% Commission
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-center justify-start">
        <Card className="bg-[url('@/assets/card-bg.png')] bg-cover bg-center bg-no-repeat rounded-xl lg:rounded-2xl w-fit p-3 lg:p-5">
          <CardContent className="px-0 lg:px-0">
            <div className="flex flex-col gap-7.5 lg:gap-13.5">
              <div className="flex gap-23 lg:gap-37 items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-(length:--font-xs-sm) lg:text-sm font-normal gap-2 text-commission-card-foreground">
                    Current Balance
                  </span>
                  <span className="text-card text-(length:--font-xl) lg:text-3xl font-normal">
                    $ 28.75
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={chipImg} alt="chip" className="h-6 lg:h-8.5 w-6 lg:w-8.5 m-1.5" />
                </div>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex flex-col gap-0">
                  <span className="text-(length:--font-2xs) lg:text-(length:--font-xs) font-normal text-commission-card-foreground">
                    Card Holder
                  </span>
                  <span className="text-(length:--font-xs-sm) lg:text-sm font-medium text-card uppercase">
                    Jen Nelson
                  </span>
                </div>
                <img src={logoWhiteImg} alt="visa" className="h-4 lg:h-6.25 w-auto" />
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter>
        <div
          className={`flex border rounded-xs lg:rounded ${isEditing ? 'p-1' : 'p-2'} w-full justify-between items-center`}
        >
          {isEditing ? (
            <div className="flex items-center gap-1 p-1 lg:p-0">
              <div className="flex items-center gap-1">
                <TIcon className="h-3.5 w-3.5 lg:h-5 lg:w-5 flex-shrink-0" />
                <span className="text-xs lg:text-base font-normal text-foreground whitespace-nowrap">
                  Payment Email:{' '}
                </span>
                <Input
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  name="payment-email"
                  className="h-6 lg:h-8 text-xs lg:text-base"
                />
              </div>
              <div className="flex items-center gap-1">
                <Button onClick={handleSave} className="h-6 lg:h-8 w-4 lg:w-6" variant="ghost">
                  <span className="sr-only">Save</span>
                  <CheckIcon className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-primary" />
                </Button>
                <Button onClick={handleCancel} className="h-6 lg:h-8 w-4 lg:w-8" variant="ghost">
                  <span className="sr-only">Cancel</span>
                  <XIcon className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <TIcon className="h-3.5 w-3.5 lg:h-5 lg:w-5" />
                <span className="text-xs lg:text-base font-normal text-foreground">
                  Payment Email:{' '}
                </span>
                <span className="text-xs lg:text-base font-normal text-card-foreground-dark-grey">
                  {paymentEmail || 'N/A'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <EditIcon
                  className="h-6 w-6 lg:h-5 lg:w-5 text-primary cursor-pointer"
                  onClick={handleEdit}
                />
              </div>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
