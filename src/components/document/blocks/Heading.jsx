import { slug } from '../../../lib/slug'

const STYLES = {
  2: 'mt-8 mb-2 scroll-mt-4 text-xl font-bold text-slate-900 sm:mt-10 sm:mb-3 sm:text-2xl',
  3: 'mt-6 mb-2 scroll-mt-4 text-[17px] font-semibold text-slate-900 sm:mt-8 sm:text-xl',
}

/**
 * A section heading. Its `id` is used by the "On this page" list to scroll to it.
 * @param {{ level: 2 | 3, text: string }} props
 */
export default function Heading({ level, text }) {
  const Tag = `h${level}`
  return (
    <Tag id={slug(text)} className={STYLES[level]}>
      {text}
    </Tag>
  )
}
