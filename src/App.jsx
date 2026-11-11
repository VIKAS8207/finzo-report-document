import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/layout/Header'
import MainContent from './components/layout/MainContent'
import RightPanel from './components/layout/RightPanel'
import Sidebar from './components/layout/Sidebar'
import SearchModal from './components/search/SearchModal'
import { SITE } from './config/site'
import useDocumentTitle from './hooks/useDocumentTitle'
import useGlobalShortcut from './hooks/useGlobalShortcut'
import useHashRoute from './hooks/useHashRoute'

/**
 * App shell
 * ---------
 * Composes the four screen areas and owns the little UI state they share:
 *
 *   ┌──────────────────────── Header ────────────────────────┐
 *   │ Sidebar │          MainContent (paper)          │ RightPanel │
 *   └─────────────────────────────────────────────────────────┘
 *
 * Which page is shown comes from the URL hash (see hooks/useHashRoute).
 */
export default function App() {
  const page = useHashRoute()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const scrollRef = useRef(null) // the scrolling paper, shared with the table of contents

  const openSearch = useCallback(() => setSearchOpen(true), [])

  useDocumentTitle(`${page.title} | ${SITE.name}`)
  useGlobalShortcut('k', openSearch)

  // Start every page at the top.
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0)
    window.scrollTo(0, 0)
  }, [page.id])

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 sm:h-screen sm:overflow-hidden">
      <Header onToggleMenu={() => setMenuOpen((open) => !open)} onOpenSearch={openSearch} />

      <div className="mx-auto flex max-w-[90rem] sm:h-[calc(100vh-4rem)]">
        <Sidebar activePageId={page.id} open={menuOpen} onNavigate={() => setMenuOpen(false)} />
        {menuOpen && (
          <div className="fixed inset-0 top-16 z-20 bg-slate-900/30 lg:hidden" onClick={() => setMenuOpen(false)} />
        )}

        <MainContent page={page} scrollRef={scrollRef} />
        <RightPanel page={page} scrollRef={scrollRef} />
      </div>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
