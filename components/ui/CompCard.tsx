import Image from 'next/image'
import { Trophy } from 'lucide-react'

interface Placement {
  rank: string
  prizes: string[]
}

interface CompCardProps {
  title: string
  category: string
  prizes: string[]
  placements?: Placement[]
  image: string
  featured?: boolean
  ctaLabel: string
  lang: 'es' | 'en'
}

export default function CompCard({ title, category, prizes, placements, image, featured }: CompCardProps) {
  const accentColor = featured ? '#F59E0B' : '#8B3CF7'
  const accentColorDim = featured ? 'rgba(245,158,11,0.4)' : 'rgba(139,60,247,0.5)'

  return (
    <article
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        minHeight: '420px',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${featured ? 'rgba(245,158,11,0.35)' : 'rgba(139,60,247,0.25)'}`,
        boxShadow: featured ? 'var(--shadow-glow-gold)' : 'var(--shadow-card)',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = featured
          ? '0 0 60px rgba(245,158,11,0.35)'
          : '0 0 60px rgba(139,60,247,0.4)'
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1.06)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = featured ? 'var(--shadow-glow-gold)' : 'var(--shadow-card)'
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1)'
      }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center top',
          transition: 'transform var(--transition-slow)',
        }}
      />

      {/* Overlay: purple + black gradient from bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              to bottom,
              rgba(8, 4, 20, 0.45) 0%,
              rgba(60, 10, 120, 0.55) 35%,
              rgba(15, 5, 30, 0.82) 65%,
              rgba(8, 4, 20, 0.97) 100%
            )
          `,
        }}
      />

      {/* Top accent bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: featured
            ? 'linear-gradient(90deg, #D97706, #F59E0B, #FCD34D)'
            : 'linear-gradient(90deg, #6D28D9, #8B3CF7, #A855F7)',
        }}
      />

      {/* Category badge — top right */}
      <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 2 }}>
        <span style={{
          background: featured ? 'rgba(245,158,11,0.2)' : 'rgba(139,60,247,0.2)',
          backdropFilter: 'blur(8px)',
          border: `1px solid ${accentColorDim}`,
          borderRadius: 'var(--radius-full)',
          padding: '0.25rem 0.75rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: 'var(--text-xs)',
          color: accentColor,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          {category}
        </span>
      </div>

      {/* Content — pinned to bottom */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        marginTop: 'auto',
        padding: '1.75rem 1.5rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        {/* Icon + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: featured ? 'rgba(245,158,11,0.15)' : 'rgba(139,60,247,0.2)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${accentColorDim}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Trophy size={20} style={{ color: accentColor }} aria-hidden="true" />
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'var(--text-xl)',
            color: '#FFFFFF',
            margin: 0,
            lineHeight: 1.2,
            textShadow: '0 2px 12px rgba(0,0,0,0.8)',
          }}>
            {title}
          </h3>
        </div>

        {/* Prize list */}
        {placements ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', height: 200 }}>
            {placements.map((placement, pi) => {
              const medals = ['🥇', '🥈', '🥉']
              return (
                <div key={pi}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 'var(--text-xs)',
                    color: accentColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}>
                    {medals[pi]} {placement.rank}
                  </span>
                  <ul style={{ listStyle: 'none', padding: '0 0 0 1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    {placement.prizes.map((prize, i) => (
                      <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.8)', textShadow: '0 1px 8px rgba(0,0,0,0.9)', lineHeight: 1.4 }}>
                        · {prize}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {prizes.map((prize, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
                <span aria-hidden="true" style={{ color: accentColor, fontWeight: 700, fontSize: '0.7rem' }}>✦</span>
                {prize}
              </li>
            ))}
          </ul>
        )}

        {/* CTA button */}
  {/*       <button
          onClick={() => trackEvent('competition_cta', { category: title })}
          style={{
            marginTop: '0.5rem',
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            background: featured
              ? 'rgba(245,158,11,0.15)'
              : 'rgba(139,60,247,0.15)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${accentColorDim}`,
            color: featured ? '#F59E0B' : '#A855F7',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 'var(--text-sm)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            cursor: 'pointer',
            transition: 'background var(--transition-fast), color var(--transition-fast)',
            width: '100%',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = featured ? 'rgba(245,158,11,0.28)' : 'rgba(139,60,247,0.32)'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = featured ? 'rgba(245,158,11,0.15)' : 'rgba(139,60,247,0.15)'
            e.currentTarget.style.color = featured ? '#F59E0B' : '#A855F7'
          }}
        >
          {ctaLabel}
        </button> */}
      </div>
    </article>
  )
}
