import { useMemo } from 'react'

function seededRandom(seed) {
  let state = seed
  return () => {
    state = (state * 9301 + 49297) % 233280
    return state / 233280
  }
}

function RainEffect({ seed }) {
  const drops = useMemo(() => {
    const rand = seededRandom(seed + 101)
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      delay: `${rand() * 4}s`,
      duration: `${0.55 + rand() * 0.65}s`,
      opacity: 0.12 + rand() * 0.22,
      height: `${14 + rand() * 22}px`,
    }))
  }, [seed])

  return (
    <div className="chapter-effects chapter-effects--rain" aria-hidden="true">
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="rain-drop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            opacity: drop.opacity,
            height: drop.height,
          }}
        />
      ))}
    </div>
  )
}

function CherryBlossomEffect({ seed }) {
  const petals = useMemo(() => {
    const rand = seededRandom(seed + 202)
    const pinks = ['#f4b4c4', '#e8a0b4', '#ffc9d6', '#d4909f']

    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      delay: `${rand() * 8}s`,
      duration: `${9 + rand() * 7}s`,
      size: `${7 + rand() * 9}px`,
      drift: `${-30 + rand() * 60}px`,
      spin: `${180 + rand() * 540}deg`,
      color: pinks[Math.floor(rand() * pinks.length)],
      opacity: 0.35 + rand() * 0.35,
    }))
  }, [seed])

  return (
    <div className="chapter-effects chapter-effects--petals" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="cherry-petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            backgroundColor: petal.color,
            opacity: petal.opacity,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            '--petal-drift': petal.drift,
            '--petal-spin': petal.spin,
          }}
        />
      ))}
    </div>
  )
}

export default function ChapterEffects({ tone, seed }) {
  if (tone === 'muted') {
    return <RainEffect seed={seed} />
  }

  if (tone === 'warm' || tone === 'quiet') {
    return <CherryBlossomEffect seed={seed} />
  }

  return null
}
