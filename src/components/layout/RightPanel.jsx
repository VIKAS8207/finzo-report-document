import TableOfContents from './TableOfContents'

const LABEL = 'text-xs font-semibold uppercase tracking-wide text-slate-500'

/** Builds the "About this feature" rows. The section only exists when a page has a plan or release set. */
const getFeatureRows = (page) =>
  [
    ['Available on', page.plan],
    ['Added in', page.added],
    ...(page.plan || page.added ? [['Last updated', page.updated]] : []),
  ].filter(([, value]) => value)

/**
 * Right-hand panel: a summary of the page being read, optional feature info, and "On this page".
 * Visible on wide screens only. Its content comes from src/content/pageMeta.js.
 *
 * @param {{ page: object, scrollRef: import('react').RefObject<HTMLElement> }} props
 */
export default function RightPanel({ page, scrollRef }) {
  const featureRows = getFeatureRows(page)

  return (
    <aside className="hidden h-full w-72 shrink-0 overflow-y-auto border-l border-slate-200 bg-white px-5 py-8 xl:block">
      <section>
        <h2 className={`mb-2 ${LABEL}`}>Summary</h2>
        <p className="text-sm leading-6 text-slate-700">{page.summary || page.intro}</p>
      </section>

      {featureRows.length > 0 && (
        <section className="mt-6">
          <h2 className={`mb-3 ${LABEL}`}>About this feature</h2>
          <dl className="divide-y divide-slate-100 text-sm">
            {featureRows.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-3 py-2">
                <dt className="text-slate-500">{label}</dt>
                <dd className="text-right font-medium text-slate-800">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <TableOfContents page={page} scrollRef={scrollRef} />
    </aside>
  )
}
