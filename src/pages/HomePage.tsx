import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import CopyIcon from '@/assets/icons/copy.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'

const HomePage = () => {
  return (
    <div className="flex min-h-[calc(100vh-91px)] items-start justify-center gap-6 pt-10">
      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
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
                  <span className="text-primary font-[450] text-base">
                    ds&durga.trysaral.com/kimiko
                  </span>
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
        </div>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomePage
