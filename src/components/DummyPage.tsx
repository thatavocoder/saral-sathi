import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ROUTE_PATHS } from '../router/route-paths'

const excuses = [
  'Still putting this together. Thanks for your patience.',
  'Almost there. Tightening a few loose screws.',
  'Good things take time. This one is in the oven.',
  'Short break, long story. This page lands soon.',
  'Ship it? Soon. Snacks? Now.',
]

function getRandomExcuse() {
  return excuses[Math.floor(Math.random() * excuses.length)]
}

export default function DummyPage() {
  const [tagline, setTagline] = useState(getRandomExcuse())

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-2xl px-6 py-10 text-center">
        <div className="mx-auto w-full max-w-md rotate-1 rounded-md border border-yellow-500/40 bg-yellow-50 p-5 text-yellow-900 shadow-sm relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">📌</div>
          <h2 className="text-xl font-semibold">Oops! Page not found</h2>
          <p className="mt-1 text-sm text-yellow-900/80">
            This page is still learning tricks. It knows "sit" and "stay" already.
          </p>
          <p className="mt-3 text-sm">{tagline}</p>
          <div className="mt-5 flex justify-center gap-3">
            <Button asChild>
              <Link to={ROUTE_PATHS.HOME}>Go Home</Link>
            </Button>
            <Button variant="outline" onClick={() => setTagline(getRandomExcuse())}>
              New excuse
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
