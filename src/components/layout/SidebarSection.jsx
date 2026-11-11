import { ChevronRight } from 'lucide-react'
import Icon from '../ui/Icon'
import { pageHref } from '../../lib/navigation'

/**
 * One collapsible group in the sidebar (icon, title, chevron, and a tree of its pages).
 *
 * @param {{
 *   section: { title: string, icon: string, pages: Array<{ id: string, title: string }> },
 *   activePageId: string,
 *   isOpen: boolean,
 *   onToggle: () => void,
 *   onNavigate: () => void,
 * }} props
 */
export default function SidebarSection({ section, activePageId, isOpen, onToggle, onNavigate }) {
  return (
    <div className="mb-0.5">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"
      >
        <Icon name={section.icon} className="h-[18px] w-[18px] shrink-0 text-slate-500" />
        <span className="flex-1">{section.title}</span>
        <ChevronRight className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {isOpen && (
        <div className="my-1 ml-[18px] border-l border-slate-200">
          {section.pages.map((page) => {
            const isActive = page.id === activePageId
            return (
              <a
                key={page.id}
                href={pageHref(page.id)}
                onClick={onNavigate}
                className={`-ml-px block border-l-2 py-1.5 pl-5 pr-2 text-[13.5px] leading-5 ${
                  isActive
                    ? 'border-blue-600 font-medium text-blue-600'
                    : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {page.title}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
