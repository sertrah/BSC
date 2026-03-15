'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  const toggle = () => {
    if (!open) trackEvent('faq_open', { question })
    setOpen(!open)
  }

  return (
    <div
      style={{
        background: 'var(--t-card-bg)',
        border: '1px solid var(--t-card-border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color var(--transition-fast)',
        boxShadow: 'var(--t-card-shadow)',
        borderColor: open ? 'var(--color-border-accent)' : 'var(--t-card-border)',
      }}
    >
      <button
        onClick={toggle}
        aria-expanded={open}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)' }}>
          {question}
        </span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          style={{
            color: 'var(--color-accent-primary)',
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform var(--transition-base)',
          }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height var(--transition-base)',
        }}
      >
        <p style={{ padding: '0 1.5rem 1.25rem', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
          {answer}
        </p>
      </div>
    </div>
  )
}
