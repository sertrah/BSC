'use client'

import Image from 'next/image'
import { Trophy, Flame, Music2 } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface AboutUsSectionProps {
  lang: 'es' | 'en'
}

export default function AboutUsSection({ lang }: AboutUsSectionProps) {
  const es = lang === 'es'

  return (
    <section
      id="about-us"
      aria-labelledby="about-title"
      className="theme-light"
      style={{
        padding: 'var(--space-section) var(--space-container)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--gradient-section-glow)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', position: 'relative' }}>

        {/* Two-column layout: text left, image right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
          className="about-grid"
        >
          {/* Left: text content */}
          <div>
            <ScrollReveal>
              <SectionTitle
                id="about-title"
                label={es ? 'Sobre el Evento' : 'About the Event'}
                title={es ? 'BACHATA SOCIAL CONGRESS' : 'BACHATA SOCIAL CONGRESS'}
                align="left"
              />
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginTop: '1.75rem' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  {es
                    ? 'El Bachata Social Congress es el primer congreso en Colombia creado exclusivamente para los amantes del baile social en bachata.'
                    : 'Bachata Social Congress is the first congress in Colombia created exclusively for lovers of social bachata dancing.'}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  {es
                    ? 'En su tercera edición, el evento se consolida como una plataforma dedicada al crecimiento del baile social desde la técnica, estilo, creatividad y musicalidad, integrando todos los estilos de la bachata y las tendencias actuales que están marcando el movimiento a nivel mundial.'
                    : 'In its third edition, the event is established as a platform dedicated to the growth of social dancing through technique, style, creativity and musicality, integrating all bachata styles and current trends shaping the global movement.'}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  {es
                    ? 'Durante tres noches de baile social y más de 45 horas de formación especializada, los asistentes pueden elegir entre una amplia variedad de clases, masterclass con diferentes artistas y bootcamp para vivir la experiencia más cercana.'
                    : 'Across three nights of social dancing and over 45 hours of specialized training, attendees can choose from classes, masterclasses with different artists, and a bootcamp for the most immersive experience.'}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  {es
                    ? 'El Bachata Social Congress reúne artistas internacionales que están marcando tendencia en el mundo, al mismo tiempo que impulsa y visibiliza el talento colombiano de distintas ciudades del país.'
                    : 'Bachata Social Congress brings together international artists setting trends worldwide, while also promoting and highlighting Colombian talent from different cities across the country.'}
                </p>
              </div>
            </ScrollReveal>

            {/* Pillars */}
            <ScrollReveal delay={120}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.75rem' }}>
                {[
                  es ? '100% bachata' : '100% bachata',
                  es ? 'Baile social' : 'Social dancing',
                  es ? 'Improvisación' : 'Improvisation',
                ].map((text, i) => (
                  <div key={i} style={{
                    background: 'rgba(139,60,247,0.08)',
                    border: '1px solid rgba(139,60,247,0.22)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.4rem 1rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-accent-bright)',
                  }}>
                    {text}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Essence cards */}
            <ScrollReveal delay={160}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                <article style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderTop: '1px solid rgba(139,60,247,0.6)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(139,60,247,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Flame size={20} style={{ color: '#8B3CF7' }} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', margin: 0 }}>
                    Bachata Jam Session
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {es
                      ? 'Batallas de solista y pareja que exaltan creatividad, musicalidad y presencia escénica.'
                      : 'Solo and partner battles celebrating creativity, musicality and stage presence.'}
                  </p>
                </article>

                <article style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderTop: '1px solid rgba(245,158,11,0.6)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(245,158,11,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Trophy size={20} style={{ color: '#F59E0B' }} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', margin: 0 }}>
                    {es ? 'Qualifier Oficial al Mundial' : 'Official World Cup Qualifier'}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {es
                      ? 'Formato Jack & Jill. Los representantes latinoamericanos clasifican a la final en Suiza.'
                      : 'Jack & Jill format. Latin American representatives qualify for the final in Switzerland.'}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: 'auto', paddingTop: '0.25rem' }}>
                    <Music2 size={12} style={{ color: '#F59E0B' }} aria-hidden="true" />
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {es ? 'Ginebra · Oct 10–11, 2026' : 'Geneva · Oct 10–11, 2026'}
                    </span>
                  </div>
                </article>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: image */}
          <ScrollReveal delay={100} direction="right">
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 5',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: '0 0 60px rgba(139,60,247,0.2)',
              border: '1px solid rgba(139,60,247,0.2)',
            }}>
              <Image
                src="/images/formacion-1.jpg"
                alt={es ? 'Bachata Social Congress — bailarines en pista' : 'Bachata Social Congress — dancers on the floor'}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              {/* Subtle gradient overlay at bottom */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(8,8,14,0.7) 0%, transparent 100%)',
              }} />
            </div>
          </ScrollReveal>
        </div>

      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 55% 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
