import { Check } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

interface PassCardProps {
  type: string
  name: string
  description: string
  price: string
  nextTierPrice?: string
  pricePeriodLabel: string
  features: string[]
  highlighted: boolean
  accentColor: string
  glowColor: string
  ctaLabel: string
  bestValueLabel: string
  includesLabel: string
}

export default function PassCard({ name, description, price, nextTierPrice, pricePeriodLabel, features, highlighted, accentColor, glowColor, ctaLabel, bestValueLabel, includesLabel }: PassCardProps) {
  const handleClick = () => {
    trackEvent('select_item', { item_name: name })
    trackEvent('purchase_cta', { location: 'passes_section' })
  }

  const shadow = `0 0 40px ${glowColor}`

  return (
    <article
      style={{
        background: `linear-gradient(145deg, #0F0E1A, #161525)`,
        border: `1px solid ${accentColor}40`,
        borderTop: `3px solid ${accentColor}`,
        borderRadius: 'var(--radius-lg)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        position: 'relative',
        height: '100%',
        boxSizing: 'border-box',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
        boxShadow: highlighted ? shadow : 'var(--shadow-card)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = shadow
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = highlighted ? shadow : 'var(--shadow-card)'
      }}
    >
      {highlighted && (
        <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: accentColor, color: '#000', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.3rem 1rem', borderRadius: '0 0 var(--radius-sm) var(--radius-sm)', whiteSpace: 'nowrap' }}>
          {bestValueLabel}
        </div>
      )}

      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: accentColor, margin: '0 0 0.5rem' }}>
          {name}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
          {description}
        </p>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)' }}>
            {price}
          </span>
          {nextTierPrice && (
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>
              {nextTierPrice}
            </span>
          )}
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: accentColor, marginTop: '0.25rem', opacity: 0.85 }}>
          {pricePeriodLabel}
        </p>
      </div>

      <div>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
          {includesLabel}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {features.map((feature, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              <Check size={14} style={{ color: accentColor, flexShrink: 0 }} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="https://www.eventbrite.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label={`${ctaLabel} — ${name}`}
        style={{
          display: 'block',
          marginTop: 'auto',
          padding: '0.875rem',
          borderRadius: 'var(--radius-md)',
          background: highlighted ? accentColor : `${accentColor}18`,
          border: highlighted ? 'none' : `1px solid ${accentColor}60`,
          color: highlighted ? '#000' : accentColor,
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: 'var(--text-sm)',
          textAlign: 'center',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          transition: 'filter var(--transition-fast)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
      >
        {ctaLabel}
      </a>
    </article>
  )
}
