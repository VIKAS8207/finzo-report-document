/**
 * Content entry point
 * -------------------
 * Assembles every documentation section into the structures the UI needs.
 *
 * To add a new section: create a file in ./sections and add it to SECTIONS below.
 * To add a page to a section: add an entry to that section's `pages` array.
 * To add right-panel info (summary, plan, release): edit ./pageMeta.js.
 */
import { UPDATED, pageMeta } from './pageMeta'

import welcome from './sections/welcome'
import gettingStarted from './sections/getting-started'
import reports from './sections/reports'
import schedules from './sections/schedules'
import data from './sections/data'
import settingsAndTeam from './sections/settings-and-team'
import plansAndBilling from './sections/plans-and-billing'
import claudeConnector from './sections/claude-connector'
import faqAndTroubleshooting from './sections/faq-and-troubleshooting'

/**
 * Sections in the order they appear in the sidebar.
 * The first one is shown as a plain top-level link; the rest are collapsible groups.
 */
export const SECTIONS = [
  welcome,
  gettingStarted,
  reports,
  schedules,
  data,
  settingsAndTeam,
  plansAndBilling,
  claudeConnector,
  faqAndTroubleshooting,
]

/** The section shown as a plain link above the "Knowledge Base" heading. */
export const topLevelSection = SECTIONS[0]

/** Sections shown as collapsible groups under "Knowledge Base". */
export const knowledgeBaseSections = SECTIONS.slice(1)

/**
 * Every page, flattened, with its section name/icon and right-panel metadata attached.
 * @type {Array<{ id: string, title: string, intro: string, blocks: object[], group: string,
 *   icon: string, updated: string, summary?: string, plan?: string, added?: string }>}
 */
export const allPages = SECTIONS.flatMap((section) =>
  section.pages.map((page) => ({
    ...page,
    group: section.title,
    icon: section.icon,
    updated: UPDATED,
    ...(pageMeta[page.id] || {}),
  })),
)

/** The page opened when the URL has no (or an unknown) page id. */
export const homePage = allPages[0]

/** Look a page up by id. Falls back to the home page. */
export const findPage = (id) => allPages.find((page) => page.id === id) || homePage
