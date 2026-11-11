import { getMediaUrl } from '../../../lib/media'
import MissingMedia from './MissingMedia'

/**
 * An image from src/assets/media/images.
 * @param {{ file: string, alt: string, width?: number, center?: boolean }} props
 *   `alt`    - describes the picture; also shown as its caption
 *   `width`  - maximum width in pixels (default: natural size, never wider than the page)
 *   `center` - centre the image (and its caption) on the page
 */
export default function MediaImage({ file, alt, width, center = false }) {
  const url = getMediaUrl(file)
  if (!url) return <MissingMedia kind="image" file={file} />

  return (
    <figure className={`my-4 sm:my-5 ${center ? 'flex flex-col items-center' : ''}`}>
      {/* Natural size, shrinking only if wider than the page, so small images (icons, buttons) stay crisp. */}
      <img
        src={url}
        alt={alt}
        loading="lazy"
        style={width ? { width } : undefined}
        className="h-auto max-w-full rounded-lg"
      />
      {alt && <figcaption className="mt-2 text-[13px] text-slate-500">{alt}</figcaption>}
    </figure>
  )
}
