declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export const trackEvent = (name: string, params?: Record<string, string>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params)
  }
}
