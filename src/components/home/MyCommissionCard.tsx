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

export const MyCommissionCard = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [email, setEmail] = useState('N/A')
  const [inputValue, setInputValue] = useState(email)

  const handleEdit = () => {
    setInputValue(email)
    setIsEditing(true)
  }

  const handleSave = () => {
    setEmail(inputValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

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
            <div className="flex flex-col gap-13.5">
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
        <div
          className={`flex border rounded ${isEditing ? 'p-1' : 'p-2'} w-full justify-between items-center`}
        >
          {isEditing ? (
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <TIcon className="h-5 w-5 flex-shrink-0" />
                <span className="text-base font-normal text-foreground whitespace-nowrap">
                  Payment Email:{' '}
                </span>
                <Input
                  type="email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  name="payment-email"
                  className="h-8"
                />
              </div>
              <div className="flex items-center gap-1">
                <Button onClick={handleSave} className="h-8" variant="ghost">
                  <span className="sr-only">Save</span>
                  <CheckIcon className="h-4 w-4 text-primary" />
                </Button>
                <Button onClick={handleCancel} className="h-8" variant="ghost">
                  <span className="sr-only">Cancel</span>
                  <XIcon className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <TIcon className="h-5 w-5" />
                <span className="text-base font-normal text-foreground">Payment Email: </span>
                <span className="text-base font-normal text-card-foreground-dark-grey">
                  {email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <EditIcon className="h-5 w-5 text-primary cursor-pointer" onClick={handleEdit} />
              </div>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
