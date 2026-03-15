import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Bachata Social Congress 2026 — Bogotá | World Cup Qualifier Latinoamérica',
  description: '3 días de bachata social en Bogotá, Colombia. Junio 26-28, 2026. Sede oficial del Qualifier Latinoamericano del Bachata Social World Cup en Ginebra. +45 horas de talleres, artistas internacionales y competencia mundial.',
  keywords: 'bachata social congress, bachata bogota 2026, world cup qualifier bachata, bachata festival colombia',
  metadataBase: new URL('https://bachatasocialcongress.com'),
  alternates: { canonical: 'https://bachatasocialcongress.com' },
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Bachata Social Congress 2026 — Bogotá',
    description: 'Qualifier Oficial Latinoamérica para la Bachata Social World Cup en Ginebra.',
    images: ['/og-image.jpg'],
    url: 'https://bachatasocialcongress.com',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bachata Social Congress 2026',
    description: 'Bogotá · Junio 26-28, 2026 · World Cup Qualifier',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Saltar al contenido</a>
        {children}
      </body>
    </html>
  )
}
