import Image from 'next/image'

interface ArtistCardProps {
  name: string
  photo: string
  nationality: string
  role: string
  featured?: boolean
}

export default function ArtistCard({ name, photo, nationality, role, featured }: ArtistCardProps) {
  return (
    <article
      style={{
        background: 'var(--gradient-card)',
        border: `1px solid ${featured ? 'var(--color-accent-primary)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = featured ? 'var(--shadow-glow)' : '0 8px 24px rgba(0,0,0,0.3)'
        const img = e.currentTarget.querySelector('img')
        if (img) img.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        const img = e.currentTarget.querySelector('img')
        if (img) img.style.transform = 'scale(1)'
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
        <Image
          src={photo}
          alt={`${name} — ${role}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
        />
        {featured && (
          <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'var(--color-accent-primary)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
            FEATURED
          </div>
        )}
      </div>
      <div style={{ padding: '1rem' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', margin: '0 0 0.25rem' }}>
          {nationality} {name}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
          {role}
        </p>
      </div>
    </article>
  )
}
