import { useEffect, useState } from 'react'
import { TextAlignStart } from 'lucide-react'
import { slug } from '../../lib/slug'

/**
 * "On this page": lists the page's headings, highlights the one being read, and scrolls to one on click.
 * Renders nothing when the page has no headings.
 *
 * @param {{ page: object, scrollRef: import('react').RefObject<HTMLElement> }} props
 */
export default function TableOfContents({ page, scrollRef }) {
  const headings = page.blocks.filter((block) => block.t === 'h2' || block.t === 'h3')
  const [activeId, setActiveId] = useState('')

  // Highlight the heading that is currently in the upper part of the reading area.
  useEffect(() => {
    setActiveId('')
    const elements = headings.map((h) => document.getElementById(slug(h.x))).filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id)),
      { root: scrollRef.current, rootMargin: '0px 0px -70% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-run only when the page changes
  }, [page.id])

  if (!headings.length) return null

  const scrollToHeading = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="mt-8 text-sm" aria-label="On this page">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        <TextAlignStart className="h-4 w-4" />
        On this page
      </div>
      <ul className="space-y-2 border-l border-slate-200">
        {headings.map((heading) => {
          const id = slug(heading.x)
          const isActive = activeId === id
          return (
            <li key={id}>
              <a
                href={`#/${page.id}`}
                onClick={(event) => scrollToHeading(event, id)}
                className={`-ml-px block border-l py-0.5 ${heading.t === 'h3' ? 'pl-7' : 'pl-4'} ${
                  isActive ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                {heading.x}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
