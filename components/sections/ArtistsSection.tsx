'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/useTranslation'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface ArtistsSectionProps {
  lang: 'es' | 'en'
}

/* ── Data ──────────────────────────────────────────────── */
const artists = [
  { name: 'Lisa Karist',    nationality: '🇺🇸', role: 'instructor', photo: 'https://picsum.photos/seed/lisa/320/420',      featured: true },
  { name: 'Carlos Solis',   nationality: '🇲🇽', role: 'instructor', photo: 'https://picsum.photos/seed/carlos/320/420' },
  { name: 'Sofia Reyes',    nationality: '🇨🇴', role: 'performer',  photo: 'https://picsum.photos/seed/sofia/320/420' },
  { name: 'Marco Diaz',     nationality: '🇦🇷', role: 'instructor', photo: 'https://picsum.photos/seed/marco/320/420' },
  { name: 'Ana Martins',    nationality: '🇧🇷', role: 'performer',  photo: 'https://picsum.photos/seed/ana/320/420' },
  { name: 'Valentina Cruz', nationality: '🇻🇪', role: 'instructor', photo: 'https://picsum.photos/seed/valentina/320/420' },
]

const djs = [
  { name: 'DJ Noche',   nationality: '🇪🇸', photo: 'https://picsum.photos/seed/djnoche/320/320' },
  { name: 'DJ Ritmo',   nationality: '🇩🇴', photo: 'https://picsum.photos/seed/djritmo/320/320' },
  { name: 'DJ Bachata', nationality: '🇨🇴', photo: 'https://picsum.photos/seed/djbachata/320/320' },
  { name: 'DJ Fuego',   nationality: '🇵🇷', photo: 'https://picsum.photos/seed/djfuego/320/320' },
]

/* ── Sub-components ─────────────────────────────────────── */

interface ArtistCarouselCardProps {
  name: string
  nationality: string
  role?: string
  photo: string
  featured?: boolean
  size?: 'portrait' | 'square'
}

function CarouselCard({ name, nationality, role, photo, featured, size = 'portrait' }: ArtistCarouselCardProps) {
  const w = 200
  const h = size === 'portrait' ? 268 : 200

  return (
    <div
      style={{
        position: 'relative',
        width: `${w}px`,
        height: `${h}px`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        flexShrink: 0,
        border: featured
          ? '1px solid rgba(139,60,247,0.6)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: featured
          ? '0 0 24px rgba(139,60,247,0.3)'
          : '0 4px 16px rgba(0,0,0,0.4)',
        transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(139,60,247,0.35)'
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = featured
          ? '0 0 24px rgba(139,60,247,0.3)'
          : '0 4px 16px rgba(0,0,0,0.4)'
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1)'
      }}
    >
      <Image
        src={photo}
        alt={`${name} — ${role ?? 'DJ'}`}
        fill
        sizes="200px"
        style={{ objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
      />

      {/* Bottom gradient + info */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 45%, rgba(8,4,20,0.95) 100%)',
      }} />

      {featured && (
        <div style={{
          position: 'absolute',
          top: '0.6rem',
          right: '0.6rem',
          background: 'var(--gradient-accent)',
          color: '#fff',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          padding: '0.2rem 0.5rem',
          borderRadius: 'var(--radius-full)',
        }}>
          Featured
        </div>
      )}

      <div style={{ position: 'absolute', bottom: '0.875rem', left: '0.875rem', right: '0.875rem' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--text-base)',
          color: '#fff',
          margin: '0 0 0.15rem',
          lineHeight: 1.2,
        }}>
          {nationality} {name}
        </p>
        {role && (
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-accent-bright)',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            {role}
          </p>
        )}
      </div>
    </div>
  )
}

/* Infinite marquee strip — duplicates items for seamless loop */
interface MarqueeProps {
  children: React.ReactNode[]
  direction?: 'left' | 'right'
  gap?: number
}

function Marquee({ children, direction = 'left', gap = 16 }: MarqueeProps) {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }} aria-hidden="true">
      <div
        className={`marquee-track marquee-track--${direction}`}
        style={{ gap: `${gap}px` }}
      >
        {/* Original set */}
        {children.map((child, i) => (
          <div key={`a-${i}`} style={{ flexShrink: 0 }}>{child}</div>
        ))}
        {/* Duplicate set for seamless loop */}
        {children.map((child, i) => (
          <div key={`b-${i}`} style={{ flexShrink: 0 }}>{child}</div>
        ))}
      </div>
    </div>
  )
}

/* ── Main section ───────────────────────────────────────── */

export default function ArtistsSection({ lang }: ArtistsSectionProps) {
  const { t } = useTranslation(lang)

  const getRoleLabel = (role: string) => {
    if (role === 'performer') return t('artists.role_performer')
    return t('artists.role_instructor')
  }

  const artistCards = artists.map((a) => (
    <CarouselCard
      key={a.name}
      name={a.name}
      nationality={a.nationality}
      role={getRoleLabel(a.role)}
      photo={a.photo}
      featured={a.featured}
      size="portrait"
    />
  ))

  const djCards = djs.map((d) => (
    <CarouselCard
      key={d.name}
      name={d.name}
      nationality={d.nationality}
      photo={d.photo}
      size="square"
    />
  ))

  return (
    <section
      id="artists"
      aria-labelledby="artists-title"
      className="theme-dark"
      style={{
        padding: 'var(--space-section) 0',
        overflow: 'hidden',
      }}
    >

      {/* ── ARTISTS ROW ── carousel left / text right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
        marginBottom: '5rem',
        padding: '0 var(--space-container)',
        maxWidth: 'var(--max-width)',
        margin: '0 auto 5rem',
      }}>

        {/* Left: carousel — extends beyond container */}
        <ScrollReveal direction="left">
          <div style={{ marginLeft: 'calc(-1 * var(--space-container))' }}>
            <Marquee direction="left">
              {artistCards}
            </Marquee>
          </div>
        </ScrollReveal>

        {/* Right: text */}
        <ScrollReveal direction="right">
          <div>
            <span className="section-label section-label--left">
              {t('artists.label')}
            </span>
            <h2
              id="artists-title"
              className="section-title"
              style={{ textAlign: 'left', marginTop: '0.25rem' }}
            >
              ARTISTS
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginTop: '1.25rem',
              maxWidth: '400px',
            }}>
              {t('artists.subtitle')}
            </p>
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {[
                { num: artists.length + '+', label: lang === 'es' ? 'Instructores internacionales' : 'International instructors' },
                { num: '45+', label: lang === 'es' ? 'Horas de formación' : 'Hours of training' },
                { num: '3', label: lang === 'es' ? 'Estilos de bachata' : 'Bachata styles' },
              ].map(({ num, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: 'var(--text-2xl)',
                    background: 'var(--gradient-accent)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    minWidth: '48px',
                  }}>
                    {num}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                  }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--color-border-accent), transparent)',
        margin: '0 var(--space-container) 5rem',
      }} aria-hidden="true" />

      {/* ── DJS ROW ── text left / carousel right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
        padding: '0 var(--space-container)',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
      }}>

        {/* Left: text */}
        <ScrollReveal direction="left">
          <div>
            <span className="section-label section-label--left">
              {lang === 'es' ? 'Música' : 'Music'}
            </span>
            <h2
              id="djs-title"
              className="section-title"
              style={{ textAlign: 'left', marginTop: '0.25rem' }}
            >
              DJS
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginTop: '1.25rem',
              maxWidth: '400px',
            }}>
              {lang === 'es'
                ? 'Los mejores DJs de bachata social del mundo. Sets ininterrumpidos durante las 3 noches para que la pista nunca pare.'
                : 'The best bachata social DJs in the world. Uninterrupted sets across 3 nights to keep the floor alive.'}
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 'var(--text-2xl)',
                background: 'var(--gradient-gold)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                3
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                {lang === 'es' ? 'Noches de música non-stop' : 'Nights of non-stop music'}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: carousel — extends beyond container */}
        <ScrollReveal direction="right">
          <div style={{ marginRight: 'calc(-1 * var(--space-container))' }}>
            <Marquee direction="right">
              {djCards}
            </Marquee>
          </div>
        </ScrollReveal>
      </div>

    </section>
  )
}
