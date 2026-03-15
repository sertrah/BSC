'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/useTranslation'
import DressCodeCard from '@/components/ui/DressCodeCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface DressCodeSectionProps {
  lang: 'es' | 'en'
}

/* 7 bento images — replace seeds with real photos later */
const bentoImages = [
  { seed: 'dc-1', alt: 'Dress code noche blanca' },
  { seed: 'dc-2', alt: 'Pareja bachata social' },
  { seed: 'dc-3', alt: 'Look rojo y negro' },
  { seed: 'dc-4', alt: 'Social dancing night' },
  { seed: 'dc-5', alt: 'Dress code galaxia' },
  { seed: 'dc-6', alt: 'Bachata social congress look' },
  { seed: 'dc-7', alt: 'Dancers bachata event' },
]

/*
  Bento grid layout (3 cols × 4 rows):
  ┌──────────┬────┬────┐
  │  img 1   │ 2  │ 3  │  rows 1–2, img1 spans 2 rows
  │  (2×2)   ├────┴────┤
  │          │  img 4  │
  ├────┬─────┴─────────┤
  │ 5  │    img 6      │
  ├────┴──────┬────────┤
  │  img 7   │  ──    │   img7 full width row 4 spans 2
  └──────────┴────────┘

  Simplified named areas:
  "a a b"
  "a a c"
  "d e e"
  "f f g"
*/

export default function DressCodeSection({ lang }: DressCodeSectionProps) {
  const { t } = useTranslation(lang)

  const dressCodes = [
    {
      day: lang === 'es' ? 'Viernes' : 'Friday',
      date: '26 Jun',
      theme: 'NOCHE BLANCA',
      colors: ['#F5F0FF', '#A89FC0'],
      description: lang === 'es' ? 'Brilla en blanco y tonos plateados' : 'Shine in white and silver tones',
    },
    {
      day: lang === 'es' ? 'Sábado' : 'Saturday',
      date: '27 Jun',
      theme: 'ROJO Y NEGRO',
      colors: ['#C8102E', '#0A0A0F'],
      description: lang === 'es' ? 'Pasión y elegancia en rojo y negro' : 'Passion and elegance in red and black',
    },
    {
      day: lang === 'es' ? 'Domingo' : 'Sunday',
      date: '28 Jun',
      theme: 'GALAXIA',
      colors: ['#7B2FBE', '#D4AF37'],
      description: lang === 'es' ? 'Colores cósmicos: morado, dorado y azul eléctrico' : 'Cosmic colors: purple, gold and electric blue',
    },
  ]

  const gridAreas = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  return (
    <section
      id="dresscode"
      aria-labelledby="dresscode-title"
      className="theme-light"
      style={{
        padding: 'var(--space-section) var(--space-container)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* LEFT — Bento grid of 7 images */}
          <ScrollReveal direction="left">
            <div
              aria-label="Galería de dress code"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(4, 120px)',
                gridTemplateAreas: `
                  "a a b"
                  "a a c"
                  "d e e"
                  "f f g"
                `,
                gap: '10px',
              }}
            >
              {bentoImages.map((img, i) => (
                <div
                  key={img.seed}
                  style={{
                    gridArea: gridAreas[i],
                    position: 'relative',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  }}
                >
                  <Image
                    src={`https://picsum.photos/seed/${img.seed}/600/600`}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Subtle dark overlay */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(8,8,14,0.5) 100%)',
                    }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT — Header + day cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Header aligned right */}
            <ScrollReveal direction="right">
              <div style={{ textAlign: 'right' }}>
                {/* Eyebrow label */}
                <span className="section-label section-label--right" style={{
                  justifyContent: 'flex-end',
                  color: 'var(--color-accent-bright)',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 'var(--text-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {t('dresscode.label')}
                  <span style={{
                    display: 'block',
                    width: '1em',
                    height: '2px',
                    background: 'var(--gradient-accent)',
                    borderRadius: '2px',
                    flexShrink: 0,
                  }} />
                </span>

                {/* Title with gradient */}
                <h2
                  id="dresscode-title"
                  className="section-title"
                  style={{ textAlign: 'right' }}
                >
                  {t('dresscode.title')}
                </h2>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  marginTop: '1rem',
                  marginBottom: 0,
                  textAlign: 'right',
                }}>
                  {t('dresscode.subtitle')}
                </p>
              </div>
            </ScrollReveal>

            {/* Day cards stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {dressCodes.map((dc, i) => (
                <ScrollReveal key={dc.date} delay={i * 100} direction="right">
                  <DressCodeCard {...dc} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
