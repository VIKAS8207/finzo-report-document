/**
 * Media lookup
 * ------------
 * Every file in src/assets/media/ (images and videos) is discovered automatically at build time.
 * Vite fingerprints each file and gives us its final URL.
 *
 * Files are found by their file name ("create-a-report.mp4") or, for screenshots, by their
 * name without extension matching the placeholder label ("dashboard-with-numbered-callouts").
 */
import { slug } from './slug'

const files = import.meta.glob('../assets/media/**/*.{png,jpg,jpeg,webp,gif,svg,mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
})

/** Map of "file-name.ext" -> url, and "file-name" -> url (extension-less). */
const byName = new Map()
for (const [path, url] of Object.entries(files)) {
  const fileName = path.split('/').pop().toLowerCase()
  const baseName = fileName.replace(/\.[^.]+$/, '')
  byName.set(fileName, url)
  byName.set(baseName, url)
  byName.set(slug(baseName), url) // so "My Image.png" is also found as "my-image"
}

/** URL of a media file by its file name (with or without extension), or undefined if it is not there. */
export const getMediaUrl = (name) => byName.get(name.toLowerCase()) || byName.get(slug(name.replace(/\.[^.]+$/, '')))

/** URL of the image for a screenshot placeholder label, or undefined while it is still a placeholder. */
export const getScreenshotUrl = (label) => byName.get(slug(label))
