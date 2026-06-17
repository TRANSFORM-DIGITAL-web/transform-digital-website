interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-14 md:mb-16 ${alignClass}`}>
      {label && (
        <span className="inline-block text-accent text-xs font-medium tracking-[0.25em] uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-text-muted text-base md:text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  )
}
