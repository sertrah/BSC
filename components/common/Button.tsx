import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  ariaLabel?: string
}

export default function Button({ children, variant = 'primary', href, onClick, ariaLabel }: ButtonProps) {
  const styles: Record<string, string | number> = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.875rem 2rem',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: 'var(--text-sm)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'transform var(--transition-fast), filter var(--transition-fast)',
    border: 'none',
  }

  if (variant === 'primary') {
    styles.background = 'var(--gradient-accent)'
    styles.color = '#fff'
    styles.boxShadow = 'var(--shadow-glow)'
  } else if (variant === 'secondary') {
    styles.background = 'transparent'
    styles.color = 'var(--color-text-primary)'
    styles.border = '1px solid var(--color-border)'
  } else {
    styles.background = 'transparent'
    styles.color = 'var(--color-accent-primary)'
  }

  if (href) {
    return (
      <a href={href} style={styles} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button style={styles} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
