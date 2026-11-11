/**
 * Site configuration
 * ------------------
 * Branding and navigation labels live here so they can be changed in one place.
 */

export const SITE = {
  name: 'Finzo Report Builder',
  /** Letter shown inside the logo badge. */
  logoLetter: 'F',
  searchPlaceholder: 'Search...',
  searchShortcutLabel: 'Ctrl K',
}

/** Quick links in the top bar (desktop only). `to` is a page id. */
export const HEADER_LINKS = [
  { label: 'Welcome', to: 'welcome' },
  { label: 'Getting Started', to: 'first-time-setup' },
  { label: 'Knowledge Base', to: 'library' },
  { label: 'FAQ', to: 'faq' },
]
