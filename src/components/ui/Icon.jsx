import { Bot, CalendarClock, ChartColumn, CircleHelp, CreditCard, Database, Rocket, Settings, Sparkles } from 'lucide-react'

/**
 * Icon registry
 * -------------
 * Content files refer to icons by name (e.g. `icon: 'Rocket'`).
 * To use a new Lucide icon in the content, import it here and add it to ICONS.
 */
const ICONS = { Sparkles, Rocket, ChartColumn, CalendarClock, Database, Settings, CreditCard, Bot, CircleHelp }

/**
 * @param {{ name: string, className?: string }} props
 */
export default function Icon({ name, className = 'h-4 w-4' }) {
  const LucideIcon = ICONS[name]
  return LucideIcon ? <LucideIcon className={className} strokeWidth={1.75} aria-hidden /> : null
}
