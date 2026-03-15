import es from '@/locales/es.json'
import en from '@/locales/en.json'

type Lang = 'es' | 'en'

const translations = { es, en }

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return typeof current === 'string' ? current : path
}

export function useTranslation(lang: Lang) {
  const t = (key: string): string => {
    return getNestedValue(translations[lang] as unknown as Record<string, unknown>, key)
  }
  return { t }
}
