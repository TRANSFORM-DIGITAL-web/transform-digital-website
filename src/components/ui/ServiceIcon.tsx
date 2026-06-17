import {
  Dumbbell,
  Layout,
  Building2,
  RefreshCw,
  Palette,
  Smartphone,
  Zap,
  TrendingUp,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  layout: Layout,
  building: Building2,
  refresh: RefreshCw,
  palette: Palette,
  smartphone: Smartphone,
  zap: Zap,
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
}

interface ServiceIconProps {
  name: string
  className?: string
}

export function ServiceIcon({ name, className = 'w-6 h-6' }: ServiceIconProps) {
  const Icon = icons[name] ?? Zap
  return <Icon className={className} strokeWidth={1.5} />
}
