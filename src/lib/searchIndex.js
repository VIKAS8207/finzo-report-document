/**
 * Search
 * ------
 * A small in-memory full-text search over the documentation pages.
 */

/** Flattens one content block into searchable plain text. */
const blockToText = (block) =>
  [
    block.x,
    ...(block.items || []).map((item) => (typeof item === 'string' ? item : Object.values(item).join(' '))),
    ...(block.head || []),
    ...(block.rows || []).flat(),
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/[*`]/g, '')

/** Builds the index once: one lowercase text blob per page. */
export const buildSearchIndex = (pages) =>
  pages.map((page) => ({
    page,
    text: [page.title, page.intro, ...page.blocks.map(blockToText)].join(' ').toLowerCase(),
  }))

/** Returns the pages that contain every word of the query (best-effort, in page order). */
export const searchPages = (index, query, limit = 8) => {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (!words.length) return []
  return index
    .filter((entry) => words.every((word) => entry.text.includes(word)))
    .slice(0, limit)
    .map((entry) => entry.page)
}
