interface SectionLabelProps {
  children: string
  align?: 'left' | 'center'
}

export default function SectionLabel({ children, align = 'left' }: SectionLabelProps) {
  return (
    <span className={`section-label section-label--${align}`}>
      {children}
    </span>
  )
}
