/**
 * Navigation helpers
 * ------------------
 * The site uses hash URLs (e.g. `/#/export`) so it works on any static host
 * without server configuration.
 */

/** The link target for a page id. */
export const pageHref = (id) => `#/${id}`

/** Navigates to a page. */
export const goToPage = (id) => {
  window.location.hash = `/${id}`
}

/** Reads the current page id from the URL ('' when there is none). */
export const readPageIdFromUrl = () => window.location.hash.replace(/^#\/?/, '')
