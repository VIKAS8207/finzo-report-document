/**
 * Shown when a page refers to an image/video file that is not in src/assets/media yet,
 * so a missing file is easy to spot instead of silently leaving a gap.
 *
 * @param {{ kind: 'image' | 'video', file: string }} props
 */
export default function MissingMedia({ kind, file }) {
  const folder = kind === 'video' ? 'videos' : 'images'
  return (
    <div className="my-4 rounded-lg border-2 border-dashed border-amber-300 bg-amber-50 px-4 py-6 text-center text-sm text-amber-800 sm:my-5">
      Missing {kind}: <code className="font-semibold">{file}</code>
      <div className="mt-1 text-xs">Add it to src/assets/media/{folder}/</div>
    </div>
  )
}
