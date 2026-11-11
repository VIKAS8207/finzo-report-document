import { useEffect, useMemo, useRef, useState } from 'react'
import { allPages } from '../../content'
import { goToPage } from '../../lib/navigation'
import { buildSearchIndex, searchPages } from '../../lib/searchIndex'

/**
 * Full-text search dialog (opened with the search button or Ctrl+K).
 * Enter opens the first result, Escape closes the dialog.
 *
 * @param {{ onClose: () => void }} props
 */
export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const index = useMemo(() => buildSearchIndex(allPages), [])
  const results = searchPages(index, query)

  useEffect(() => inputRef.current?.focus(), [])

  const openPage = (page) => {
    goToPage(page.id)
    onClose()
  }

  const onKeyDown = (event) => {
    if (event.key === 'Escape') onClose()
    if (event.key === 'Enter' && results[0]) openPage(results[0])
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/40 p-4 pt-24" onClick={onClose}>
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-2xl"
        role="dialog"
        aria-label="Search documentation"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search documentation..."
          className="w-full border-b border-slate-200 px-5 py-4 text-base outline-none"
        />
        <div className="max-h-80 overflow-y-auto">
          {query && !results.length && <p className="px-5 py-6 text-sm text-slate-500">No results for "{query}"</p>}
          {results.map((page) => (
            <button key={page.id} onClick={() => openPage(page)} className="block w-full px-5 py-3 text-left hover:bg-slate-50">
              <div className="font-medium text-slate-900">{page.title}</div>
              <div className="text-xs text-slate-500">{page.group}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
