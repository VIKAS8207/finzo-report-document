import BlockRenderer from '../document/blocks/BlockRenderer'
import PageHeader from '../document/PageHeader'

/**
 * The centre column: a white "paper" page on a light grey surface.
 * On tablet/desktop the paper is fixed to the screen and only its text scrolls;
 * on phones it is plain text that scrolls with the whole page.
 *
 * @param {{ page: object, scrollRef: import('react').RefObject<HTMLElement> }} props
 *   `scrollRef` lets other components (e.g. the table of contents) observe this scroll area.
 */
export default function MainContent({ page, scrollRef }) {
  return (
    <main className="min-w-0 flex-1 bg-white sm:h-full sm:bg-[#f1f1f1] sm:px-3 sm:pt-6 sm:pb-0 lg:px-8">
      <article
        ref={scrollRef}
        className="hover-scroll mx-auto max-w-[820px] bg-white px-5 py-6 sm:h-full sm:overflow-y-auto sm:rounded-t-sm sm:px-14 sm:pt-12 sm:pb-16 sm:shadow-[0_1px_3px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.10)]"
      >
        <PageHeader page={page} />
        <div className="mt-6">
          {page.blocks.map((block, i) => (
            <BlockRenderer key={`${page.id}-${i}`} block={block} />
          ))}
        </div>
      </article>
    </main>
  )
}
