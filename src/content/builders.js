/**
 * Content builders
 * ----------------
 * Tiny helpers that create the "blocks" a documentation page is made of.
 * Writing `p('text')` is shorter and safer than writing `{ t: 'p', x: 'text' }` by hand.
 *
 * Inline markup supported inside any text string:
 *   **bold**   *italic*   `code`
 *
 * @typedef {{ t: 'p',     x: string }}                            ParagraphBlock
 * @typedef {{ t: 'h2',    x: string }}                            HeadingBlock
 * @typedef {{ t: 'ul',    items: string[] }}                      BulletListBlock
 * @typedef {{ t: 'ol',    items: string[] }}                      NumberedListBlock
 * @typedef {{ t: 'table', head: string[], rows: string[][] }}     TableBlock
 * @typedef {{ t: 'shot',  x: string }}                            ScreenshotBlock
 * @typedef {{ t: 'image', file: string, alt: string }}            ImageBlock
 * @typedef {{ t: 'video', file: string, caption?: string }}       VideoBlock
 * @typedef {{ t: 'note',  x: string }}                            CalloutBlock
 * @typedef {{ t: 'cards', items: CardItem[] }}                    CardsBlock
 * @typedef {{ icon: string, title: string, text: string, to: string }} CardItem
 */

/** A paragraph of text. */
export const p = (x) => ({ t: 'p', x })

/** A section heading. Also appears in the "On this page" list. */
export const h2 = (x) => ({ t: 'h2', x })

/** A bulleted list. */
export const ul = (items) => ({ t: 'ul', items })

/** A numbered list (steps). */
export const ol = (items) => ({ t: 'ol', items })

/** A table: `head` is the column titles, `rows` is an array of rows (arrays of cell text). */
export const table = (head, rows) => ({ t: 'table', head, rows })

/**
 * A screenshot slot. Shows a dashed placeholder until an image named after the label
 * (lowercase, hyphens) is added to src/assets/media/images, e.g. 'Top bar with labels' -> top-bar-with-labels.png
 */
export const shot = (x, options = {}) => ({ t: 'shot', x, ...options })
// Options: { width: 340 }  shows the image at most 340px wide (default: natural size, up to page width)
//          { center: true } centres it on the page

/** An image from src/assets/media/images. `alt` describes the picture and is shown as its caption. */
export const image = (file, alt, options = {}) => ({ t: 'image', file, alt, ...options })
// Options (same as shot): { width: 340 } maximum width in px, { center: true } centre it on the page.

/**
 * Several images side by side (they wrap onto the next line on narrow screens).
 * `items` is an array of `{ file, alt }`.
 */
export const imageRow = (items) => ({ t: 'imageRow', items })

/** A video from src/assets/media/videos, with player controls and an optional caption. */
export const video = (file, caption) => ({ t: 'video', file, caption })

/** A highlighted callout / tip box. */
export const note = (x) => ({ t: 'note', x })

/** A grid of link cards. Each item needs an icon name, a title, a text and a target page id. */
export const cards = (items) => ({ t: 'cards', items })
