
interface LanguageToggleProps {
  currentLang: 'es' | 'en'
  onChange: (lang: 'es' | 'en') => void
}

export default function LanguageToggle({ currentLang, onChange }: LanguageToggleProps) {
  return (
    <div
      role="group"
      className="m-auto"
      aria-label="Seleccionar idioma"
      style={{
        display: 'flex',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
        width: 80,
      }}
    >
      {(['es', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          aria-pressed={currentLang === l}
          aria-label={l === 'es' ? 'Español' : 'English'}
          style={{
            background: currentLang === l ? 'var(--color-accent-primary)' : 'transparent',
            color: currentLang === l ? '#fff' : 'var(--color-text-secondary)',
            border: 'none',
            padding: '0.35rem 0.75rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: 'var(--text-xs)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            transition: 'background var(--transition-fast), color var(--transition-fast)',
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
