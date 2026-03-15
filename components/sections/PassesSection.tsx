'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/lib/useTranslation'
import SectionTitle from '@/components/ui/SectionTitle'
import PassCard from '@/components/ui/PassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface PassesSectionProps {
  lang: 'es' | 'en'
}

const TIERS = [
  {
    key: 'primera',
    labelEs: '1ª Fecha',
    labelEn: '1st Date',
    dateEs: 'Hasta el 31 de marzo',
    dateEn: 'Until March 31',
  },
  {
    key: 'segunda',
    labelEs: '2ª Fecha',
    labelEn: '2nd Date',
    dateEs: '1 abr – 23 may',
    dateEn: 'Apr 1 – May 23',
  },
  {
    key: 'tercera',
    labelEs: '3ª Fecha',
    labelEn: '3rd Date',
    dateEs: '24 may – 23 jun',
    dateEn: 'May 24 – Jun 23',
  },
]

const PRICES = {
  diamond: [300000, 355000, 410000],
  gold:    [240000, 260000, 280000],
  day:     [200000, 220000, 240000],
  night:   [140000, 150000, 160000],
}

function formatCOP(amount: number): string {
  return `$${amount.toLocaleString('es-CO')} COP`
}

export default function PassesSection({ lang }: PassesSectionProps) {
  const { t } = useTranslation(lang)
  const [tierIndex, setTierIndex] = useState(0)

  const getPrice = (type: keyof typeof PRICES) => formatCOP(PRICES[type][tierIndex])
  const getNextTierPrice = (type: keyof typeof PRICES) =>
    tierIndex < 2 ? formatCOP(PRICES[type][tierIndex + 1]) : undefined

  const pricePeriodLabel =
    lang === 'es' ? TIERS[tierIndex].dateEs : TIERS[tierIndex].dateEn

  const passes = [
    {
      type: 'diamond',
      name: t('passes.diamond_name'),
      description: t('passes.diamond_desc'),
      price: getPrice('diamond'),
      nextTierPrice: getNextTierPrice('diamond'),
      accentColor: '#67E8F9',
      glowColor: 'rgba(103, 232, 249, 0.35)',
      features: lang === 'es'
        ? ['3 días de talleres (+30h)', '3 noches de sociales + pre party', 'Acceso a World Cup & Bachata Jam Session']
        : ['3 days of workshops (+30h)', '3 social nights + pre party', 'Access to World Cup & Bachata Jam Session'],
      highlighted: true,
    },
    {
      type: 'gold',
      name: t('passes.gold_name'),
      description: t('passes.gold_desc'),
      price: getPrice('gold'),
      nextTierPrice: getNextTierPrice('gold'),
      accentColor: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.35)',
      features: lang === 'es'
        ? ['2 días de talleres', 'No incluye noches de sociales']
        : ['2 days of workshops', 'Does not include social nights'],
      highlighted: false,
    },
    {
      type: 'day',
      name: t('passes.day_name'),
      description: t('passes.day_desc'),
      price: getPrice('day'),
      nextTierPrice: getNextTierPrice('day'),
      accentColor: '#FB923C',
      glowColor: 'rgba(251, 146, 60, 0.35)',
      features: lang === 'es'
        ? ['1 día de talleres', 'No incluye noche de social']
        : ['1 day of workshops', 'Does not include social night'],
      highlighted: false,
    },
    {
      type: 'night',
      name: t('passes.night_name'),
      description: t('passes.night_desc'),
      price: getPrice('night'),
      nextTierPrice: getNextTierPrice('night'),
      accentColor: '#8B3CF7',
      glowColor: 'rgba(139, 60, 247, 0.4)',
      features: lang === 'es'
        ? ['3 noches de sociales', 'Ver batalla de Jam Session', 'Ver final: Bachata Social World Cup']
        : ['3 social nights', 'Watch Jam Session battle', 'Watch final: Bachata Social World Cup'],
      highlighted: false,
    },
  ]

  return (
    <section
      id="passes"
      aria-labelledby="passes-title"
      className="theme-dark"
      style={{
        padding: 'var(--space-section) var(--space-container)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/formacion-1.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority={false}
        />
        {/* Dark overlay so content stays readable */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(8,8,14,0.82) 0%, rgba(8,8,14,0.75) 50%, rgba(8,8,14,0.90) 100%)',
        }} />
      </div>

      {/* Purple glow */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,47,190,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <ScrollReveal>
          <SectionTitle
            id="passes-title"
            label={t('passes.label')}
            title={t('passes.title')}
            subtitle={t('passes.subtitle')}
          />
        </ScrollReveal>

        {/* Tier selector */}
        <ScrollReveal delay={80}>
          <div
            role="tablist"
            aria-label={lang === 'es' ? 'Seleccionar fecha de precio' : 'Select pricing date'}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '2.5rem',
              flexWrap: 'wrap',
            }}
          >
            {TIERS.map((tier, i) => {
              const active = tierIndex === i
              return (
                <button
                  key={tier.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTierIndex(i)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0.625rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    border: active
                      ? '1px solid var(--color-accent-primary)'
                      : '1px solid var(--color-border)',
                    background: active
                      ? 'rgba(139,60,247,0.15)'
                      : 'transparent',
                    color: active
                      ? 'var(--color-white)'
                      : 'var(--color-text-muted)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: active ? 700 : 400,
                    fontSize: 'var(--text-sm)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    lineHeight: 1.3,
                  }}
                >
                  <span style={{ fontWeight: 700 }}>
                    {lang === 'es' ? tier.labelEs : tier.labelEn}
                  </span>
                  <span style={{ fontSize: 'var(--text-xs)', opacity: 0.8 }}>
                    {lang === 'es' ? tier.dateEs : tier.dateEn}
                  </span>
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {passes.map((pass, i) => (
            <ScrollReveal key={pass.type} delay={i * 80}>
              <PassCard
                {...pass}
                pricePeriodLabel={pricePeriodLabel}
                ctaLabel={t('passes.cta')}
                bestValueLabel={t('passes.best_value')}
                includesLabel={t('passes.includes')}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>
            {lang === 'es'
              ? tierIndex < 2
                ? `* El precio sube a partir del ${tierIndex === 0 ? '1 de abril' : '24 de mayo'} de 2026`
                : '* Precio válido hasta el 23 de junio de 2026'
              : tierIndex < 2
                ? `* Price increases from ${tierIndex === 0 ? 'April 1' : 'May 24'}, 2026`
                : '* Price valid until June 23, 2026'}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
