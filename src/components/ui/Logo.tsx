import { siteConfig } from '../../data/content'

type LogoVariant = 'navbar' | 'footer' | 'hero' | 'hero-large'

interface LogoProps {
  variant?: LogoVariant
  className?: string
  onClick?: () => void
  showGlow?: boolean
}

const sizeMap: Record<LogoVariant, string> = {
  navbar: 'h-8 md:h-9',
  footer: 'h-11 md:h-12',
  hero: 'h-20 md:h-24',
  'hero-large': 'h-28 md:h-36 lg:h-44',
}

const pillMap: Record<LogoVariant, string> = {
  navbar: 'px-2.5 py-1 rounded-lg',
  footer: 'px-3 py-1.5 rounded-xl',
  hero: 'px-4 py-3 rounded-2xl',
  'hero-large': 'px-6 py-5 rounded-3xl',
}

export function Logo({
  variant = 'navbar',
  className = '',
  onClick,
  showGlow = true,
}: LogoProps) {
  const Wrapper = onClick ? 'button' : 'div'

  return (
    <Wrapper
      onClick={onClick}
      className={`group inline-flex items-center ${onClick ? 'cursor-pointer' : ''} ${className}`}
      aria-label={onClick ? `${siteConfig.name} — go to home` : undefined}
    >
      <span
        className={`relative inline-flex items-center justify-center bg-white/98 ${pillMap[variant]} shadow-[0_4px_20px_rgba(0,114,255,0.12)] transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(0,114,255,0.22)] group-hover:scale-[1.02]`}
      >
        {showGlow && (
          <span
            className="absolute -inset-1 rounded-[inherit] bg-gradient-to-br from-[#00C6FF]/20 to-[#0072FF]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            aria-hidden="true"
          />
        )}
        <img
          src={siteConfig.logo}
          alt={siteConfig.name}
          className={`${sizeMap[variant]} w-auto object-contain`}
          width={variant === 'hero-large' ? 280 : variant === 'hero' ? 180 : 140}
          height={variant === 'hero-large' ? 120 : 60}
        />
      </span>
    </Wrapper>
  )
}
