interface WorkshopCardProps {
  title: string
  level: string
  description: string
  color: string
  emoji: string
}

export default function WorkshopCard({ title, level, description, color, emoji }: WorkshopCardProps) {
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
        padding: '1.5rem 1.75rem',
        boxShadow: 'var(--t-card-shadow)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.25rem',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = `0 8px 40px rgba(255,255,255,0.12), 0 0 32px ${color}30, inset 0 1px 0 rgba(255,255,255,0.12)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 32px rgba(255, 255, 255, 0.07), inset 0 1px 0 rgba(255,255,255,0.08)'
      }}
    >
      {/* Emoji icon */}
      {/* <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: '48px',
          height: '48px',
          borderRadius: 'var(--radius-md)',
          background: `${color}18`,
          border: `1px solid ${color}35`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
        }}
      >
        {emoji}
      </div> */}

      {/* Content */}
      <div style={{ flex: 1 }}>
        {/* Level badge */}
        <span style={{
          display: 'inline-block',
          background: `${color}18`,
          color,
          border: `1px solid ${color}35`,
          borderRadius: 'var(--radius-full)',
          padding: '0.2rem 0.65rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: 'var(--text-xs)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '0.5rem',
        }}>
          {level}
        </span>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--text-lg)',
          color: 'var(--color-text-primary)',
          margin: '0 0 0.5rem',
        }}>
          {title}
        </h3>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          margin: 0,
        }}>
          {description}
        </p>
      </div>

      {/* Left accent bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: '3px',
          background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
          borderRadius: 'var(--radius-full)',
        }}
      />
    </article>
  )
}
