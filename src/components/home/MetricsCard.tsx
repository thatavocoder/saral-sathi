import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const MetricsCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="rounded-full h-31 w-31 bg-grey-300"></div>
        </div>
      </CardContent>
    </Card>
  )
}
