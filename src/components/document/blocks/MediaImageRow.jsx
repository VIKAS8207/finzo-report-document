import { getMediaUrl } from '../../../lib/media'
import MissingMedia from './MissingMedia'

/**
 * Several images side by side, each with its caption underneath.
 * On narrow screens they wrap onto the next line.
 *
 * @param {{ items: Array<{ file: string, alt: string }> }} props
 */
export default function MediaImageRow({ items }) {
  return (
    <div className="my-4 flex flex-wrap items-end gap-x-8 gap-y-4 sm:my-5">
      {items.map((item) => {
        const url = getMediaUrl(item.file)
        if (!url) return <MissingMedia key={item.file} kind="image" file={item.file} />
        return (
          <figure key={item.file}>
            <img src={url} alt={item.alt} loading="lazy" className="h-auto max-w-full rounded-lg" />
            {item.alt && <figcaption className="mt-2 text-[13px] text-slate-500">{item.alt}</figcaption>}
          </figure>
        )
      })}
    </div>
  )
}
