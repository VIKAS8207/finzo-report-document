/** Turns a heading into a URL-safe id, e.g. "Date range" -> "date-range". */
export const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
