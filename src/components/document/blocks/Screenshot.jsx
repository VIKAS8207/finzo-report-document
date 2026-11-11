import { getScreenshotUrl } from '../../../lib/media'

/**
 * A screenshot slot.
 * Shows the image when a file named after the label exists in src/assets/media/images
 * (e.g. "Top bar with labels" -> top-bar-with-labels.png); otherwise a dashed placeholder.
 *
 * @param {{ label: string, width?: number, center?: boolean }} props
 *   `width`  - maximum width in pixels (default: natural size, never wider than the page)
 *   `center` - centre the image on the page
 */
export default function Screenshot({ label, width, center = false }) {
  const url = getScreenshotUrl(label)

  if (!url) {
    return (
      <div className="my-4 flex h-36 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500 sm:my-5 sm:h-48">
        [Screenshot: {label}]
      </div>
    )
  }

  return (
    <figure className={`my-4 sm:my-5 ${center ? 'flex justify-center' : ''}`}>
      <img
        src={url}
        alt={label}
        loading="lazy"
        style={width ? { width } : undefined}
        className="h-auto max-w-full rounded-lg border border-slate-200"
      />
    </figure>
  )
}
