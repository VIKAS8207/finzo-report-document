import { useState } from 'react'
import { TextAlignStart } from 'lucide-react'
import Icon from '../ui/Icon'
import SidebarSection from './SidebarSection'
import { knowledgeBaseSections, topLevelSection } from '../../content'
import { pageHref } from '../../lib/navigation'

/**
 * Left navigation.
 * - Desktop: always visible and sticky.
 * - Tablet: slides in from the left. Phone: slides in from the right.
 *
 * @param {{ activePageId: string, open: boolean, onNavigate: () => void }} props
 */
export default function Sidebar({ activePageId, open, onNavigate }) {
  // Remembers sections the user opened/closed by hand. Untouched sections follow the current page.
  const [manualState, setManualState] = useState({})

  const isSectionOpen = (section) => {
    const manual = manualState[section.title]
    if (manual !== undefined) return manual
    return section.pages.some((page) => page.id === activePageId)
  }

  const toggleSection = (section) =>
    setManualState((state) => ({ ...state, [section.title]: !isSectionOpen(section) }))

  return (
    <aside
      className={`hover-scroll fixed inset-y-0 right-0 top-16 z-30 w-72 max-w-[85vw] overflow-y-auto border-l border-slate-200 bg-white px-4 py-6 transition-transform sm:left-0 sm:right-auto sm:max-w-none sm:border-l-0 sm:border-r lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0 ${
        open ? 'translate-x-0' : 'translate-x-full sm:-translate-x-full'
      }`}
    >
      {/* Top-level page(s), shown as plain links */}
      <div className="mb-4">
        {topLevelSection.pages.map((page) => (
          <a
            key={page.id}
            href={pageHref(page.id)}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-slate-50 ${
              page.id === activePageId ? 'font-medium text-blue-600' : 'text-slate-600'
            }`}
          >
            <Icon name={topLevelSection.icon} className="h-[18px] w-[18px] shrink-0 text-slate-500" />
            <span>{topLevelSection.title}</span>
          </a>
        ))}
      </div>

      <div className="mb-2 mt-2 flex items-center gap-2 px-2 pt-2 text-xs font-bold uppercase tracking-wide text-slate-900">
        <TextAlignStart className="h-4 w-4" />
        Knowledge Base
      </div>

      {knowledgeBaseSections.map((section) => (
        <SidebarSection
          key={section.title}
          section={section}
          activePageId={activePageId}
          isOpen={isSectionOpen(section)}
          onToggle={() => toggleSection(section)}
          onNavigate={onNavigate}
        />
      ))}
    </aside>
  )
}
