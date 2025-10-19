import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { ROUTE_PATHS } from '../router/route-paths'

export const NotFoundPage = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center p-6 text-center">
      <div>
        <div className="text-7xl">🐣</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">404</h1>
        <p className="mt-2 text-lg">We couldn’t find that page.</p>
        <p className="mt-1 text-muted-foreground">Maybe it moved, or maybe it was never here.</p>
        <Button className="mt-4" asChild>
          <Link to={ROUTE_PATHS.HOME}>Go Home</Link>
        </Button>
      </div>
    </section>
  )
}
