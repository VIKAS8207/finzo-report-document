import Icon from '../../ui/Icon'
import { pageHref } from '../../../lib/navigation'

/**
 * A grid of link cards that jump to other pages.
 * @param {{ items: Array<{ icon: string, title: string, text: string, to: string }> }} props
 */
export default function CardGrid({ items }) {
  return (
    <div className="my-5 grid gap-3 sm:grid-cols-2">
      {items.map((card) => (
        <a
          key={card.to}
          href={pageHref(card.to)}
          className="block rounded-xl border border-slate-200 p-4 hover:border-blue-400 hover:shadow-sm"
        >
          <Icon name={card.icon} className="h-6 w-6 text-blue-600" />
          <div className="mt-2 font-semibold text-slate-900">{card.title}</div>
          <div className="mt-1 text-sm leading-6 text-slate-500">{card.text}</div>
        </a>
      ))}
    </div>
  )
}
