import Inline from '../Inline'

/**
 * A bulleted or numbered list.
 * @param {{ items: string[], ordered?: boolean }} props
 */
export default function List({ items, ordered = false }) {
  const Tag = ordered ? 'ol' : 'ul'
  const marker = ordered ? 'list-decimal' : 'list-disc'
  return (
    <Tag className={`my-3 ${marker} space-y-1.5 pl-5 text-[15px] text-slate-700 sm:my-4 sm:space-y-2 sm:pl-6 sm:text-base`}>
      {items.map((item, i) => (
        <li key={i} className="pl-1 leading-7">
          <Inline text={item} />
        </li>
      ))}
    </Tag>
  )
}
