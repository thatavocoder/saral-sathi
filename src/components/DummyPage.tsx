import { useState } from 'react'
import { Link } from 'react-router-dom'

const funLines = [
  'Still putting this together. Thanks for your patience.',
  'Almost there. Tightening a few loose screws.',
  'Good things take time. This one is in the oven.',
  'Short break, long story. This page lands soon.',
  'Ship it? Soon. Snacks? Now.',
]

function getRandomFunLine() {
  return funLines[Math.floor(Math.random() * funLines.length)]
}

export default function DummyPage() {
  const [tagline, setTagline] = useState(getRandomFunLine())

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
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              Go Home
            </Link>
            <button
              type="button"
              onClick={() => setTagline(getRandomFunLine())}
              className="inline-flex items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              New excuse
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
