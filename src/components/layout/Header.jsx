import { Menu, Search } from 'lucide-react'
import { HEADER_LINKS, SITE } from '../../config/site'
import { homePage } from '../../content'
import { pageHref } from '../../lib/navigation'

/**
 * Top bar: menu button (mobile), logo, quick links and the search button.
 * Its content is centred in the same column as the page below it.
 *
 * @param {{ onToggleMenu: () => void, onOpenSearch: () => void }} props
 */
export default function Header({ onToggleMenu, onOpenSearch }) {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-[90rem] items-center gap-4 px-4 lg:px-8">
        {/* On phones the menu button sits on the right; from tablet up it sits on the left. */}
        <button className="order-last sm:order-first lg:hidden" onClick={onToggleMenu} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>

        <a href={pageHref(homePage.id)} className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-blue-400 text-sm text-white">
            {SITE.logoLetter}
          </span>
          {SITE.name}
        </a>

        <div className="flex-1" />

        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          {HEADER_LINKS.map((link) => (
            <a key={link.to} href={pageHref(link.to)} className="hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Search is hidden on phones. */}
        <button
          onClick={onOpenSearch}
          className="hidden w-44 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500 hover:border-slate-300 sm:flex sm:w-56"
        >
          <Search className="h-4 w-4" />
          <span className="flex-1 text-left">{SITE.searchPlaceholder}</span>
          <kbd className="hidden rounded bg-slate-100 px-1.5 text-xs sm:block">{SITE.searchShortcutLabel}</kbd>
        </button>
      </div>
    </header>
  )
}
