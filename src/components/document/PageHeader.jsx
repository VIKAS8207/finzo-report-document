import { ChevronRight } from 'lucide-react'
import Icon from '../ui/Icon'
import CopyLinkButton from './CopyLinkButton'
import { pageHref } from '../../lib/navigation'
import { homePage } from '../../content'

/** Breadcrumb, copy-link button, icon + title and intro line at the top of a page. */
export default function PageHeader({ page }) {
  return (
    <header>
      <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-blue-600 sm:text-sm">
          <a href={pageHref(homePage.id)} className="hover:underline">
            Knowledge Base
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span>{page.group}</span>
        </nav>
        <CopyLinkButton />
      </div>

      <h1 className="flex items-center gap-3 text-[26px] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        <Icon name={page.icon} className="h-7 w-7 shrink-0 text-blue-600 sm:h-9 sm:w-9" />
        {page.title}
      </h1>
      <p className="mt-3 text-base leading-7 text-slate-500 sm:mt-4 sm:text-lg sm:leading-8">{page.intro}</p>
    </header>
  )
}
