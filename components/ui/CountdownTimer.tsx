'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/useTranslation'

interface CountdownTimerProps {
  targetDate: string
  lang: 'es' | 'en'
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

export default function CountdownTimer({ targetDate, lang }: CountdownTimerProps) {
  const { t } = useTranslation(lang)
  // Start with zeros to match server HTML, then hydrate on client
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft(targetDate))
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const units = [
    { value: timeLeft.days, label: t('countdown.days') },
    { value: timeLeft.hours, label: t('countdown.hours') },
    { value: timeLeft.minutes, label: t('countdown.minutes') },
    { value: timeLeft.seconds, label: t('countdown.seconds') },
  ]

  return (
    <div
      role="timer"
      aria-label="Cuenta regresiva al evento"
      style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {units.map(({ value, label }) => (
        <div
          key={label}
          style={{
            background: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border-accent)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
            minWidth: '72px',
            textAlign: 'center',
          }}
        >
          <div
            suppressHydrationWarning
            style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--text-4xl)', color: 'var(--color-text-primary)', lineHeight: 1, opacity: mounted ? 1 : 0, transition: 'opacity 0.3s ease' }}
          >
            {String(value).padStart(2, '0')}
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}
