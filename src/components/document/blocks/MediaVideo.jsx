import { getMediaUrl } from '../../../lib/media'
import MissingMedia from './MissingMedia'

/**
 * A video from src/assets/media/videos, with player controls.
 * @param {{ file: string, caption?: string }} props
 */
export default function MediaVideo({ file, caption }) {
  const url = getMediaUrl(file)
  if (!url) return <MissingMedia kind="video" file={file} />

  return (
    <figure className="my-4 sm:my-5">
      <video
        src={url}
        controls
        playsInline
        preload="metadata"
        aria-label={caption}
        className="w-full rounded-lg border border-slate-200 bg-black"
      />
      {caption && <figcaption className="mt-2 text-center text-[13px] text-slate-500">{caption}</figcaption>}
    </figure>
  )
}
