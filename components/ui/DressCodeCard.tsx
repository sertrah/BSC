interface DressCodeCardProps {
  day: string
  date: string
  theme: string
  colors: string[]
  description: string
}

export default function DressCodeCard({ day, date, theme, colors, description }: DressCodeCardProps) {
  return (
    <article
      style={{
        /* Glassmorphism — adapts via CSS theme tokens */
        position: 'relative',
        background: 'var(--t-card-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid var(--t-card-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        boxShadow: 'var(--t-card-shadow)',
        overflow: 'hidden',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(0)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)'
      }}
    >
      {/* Color swatches — split pill */}
      <div
        aria-label={`Colores: ${colors.join(', ')}`}
        style={{
          flexShrink: 0,
          width: '52px',
          height: '52px',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {colors.map((color, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: color,
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          margin: '0 0 0.3rem',
        }}>
          {day} · {date}
        </p>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--text-xl)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          margin: '0 0 0.3rem',
          background: `linear-gradient(90deg, ${colors[0]}, ${colors[1] || colors[0]})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {theme}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          margin: 0,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {description}
        </p>
      </div>

      {/* Right accent bar (matches first color) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          top: '15%',
          bottom: '15%',
          width: '3px',
          background: `linear-gradient(to bottom, transparent, ${colors[0]}, transparent)`,
          borderRadius: 'var(--radius-full)',
        }}
      />
    </article>
  )
}
