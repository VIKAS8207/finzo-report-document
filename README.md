# Finzo Report Builder – Documentation Site

A documentation site for the Finzo **Reports Builder** Shopify app.
Built with **React 19**, **Vite**, **Tailwind CSS v4** and **Lucide** icons. No router or state library — pages are
chosen from the URL hash (`/#/export`), so it can be hosted on any static host.

## Getting started

```bash
npm install
npm run dev      # start the dev server  → http://localhost:5173
npm run build    # production build into /dist
npm run preview  # serve the production build locally
npm run lint     # static checks (oxlint)
```

Requires Node 20+.

## Screen layout

```
┌───────────────────────── Header ──────────────────────────┐
│ Sidebar │        MainContent (paper page)       │ RightPanel │
└──────────────────────────────────────────────────────────────┘
```

| Area            | Component                                    | What it does                                          |
| --------------- | -------------------------------------------- | ----------------------------------------------------- |
| Top bar         | `components/layout/Header.jsx`               | Logo, quick links, search button, mobile menu button  |
| Left navigation | `components/layout/Sidebar.jsx`              | Section tree; slides in from the side on small screens |
| Centre          | `components/layout/MainContent.jsx`          | The fixed "paper" page; only its text scrolls         |
| Right panel     | `components/layout/RightPanel.jsx`           | Summary, feature info, "On this page" list            |
| Search          | `components/search/SearchModal.jsx`          | Full-text search (button or `Ctrl K`)                 |

`src/App.jsx` only composes these and holds the small amount of UI state they share.

## Project structure

```
src/
├── main.jsx                  entry point
├── App.jsx                   app shell (composition only)
├── index.css                 Tailwind import + minimal scrollbar
│
├── assets/
│   └── media/                ← PUT IMAGES AND VIDEOS HERE (images/, videos/)
│
├── config/
│   └── site.js               brand name, header links, labels
│
├── content/                  ALL the documentation text lives here
│   ├── index.js              assembles sections → pages
│   ├── builders.js           helpers: p(), h2(), ul(), ol(), table(), shot(), image(), video(), note(), cards()
│   ├── pageMeta.js           right-panel info per page (summary, plan, release)
│   └── sections/             one file per sidebar section
│
├── components/
│   ├── layout/               Header, Sidebar, SidebarSection, MainContent, RightPanel, TableOfContents
│   ├── document/             PageHeader, Inline, CopyLinkButton
│   │   └── blocks/           one component per content block type + BlockRenderer
│   ├── search/               SearchModal
│   └── ui/                   Icon (Lucide registry)
│
├── hooks/                    useHashRoute, useGlobalShortcut, useDocumentTitle
└── lib/                      slug, navigation (URL helpers), searchIndex, media (finds files in assets/media)
```

## Everyday tasks

### Edit text or add a page
Open the file for that section in `src/content/sections/` and edit or add an entry to its `pages` array:

```js
{
  id: 'my-page',                // used in the URL: /#/my-page (must be unique)
  title: 'My page',
  intro: 'One-line description shown under the title.',
  blocks: [
    p('A paragraph with **bold**, *italic* and `code`.'),
    h2('A heading'),            // also appears in "On this page"
    ol(['Step one', 'Step two']),
    table(['Column A', 'Column B'], [['a1', 'b1'], ['a2', 'b2']]),
    shot('Name of the screenshot to add later'),
    note('A highlighted tip.'),
  ],
}
```

### Add or update an integration
Edit `src/content/integrations.js`. Each entry becomes a page in the **Integrations** sidebar section and a row in the overview table.
Set `status` (`Live` / `Coming soon` / `Connected`), `introduced` (release date) and `planned` (planned date) — the last two show in the right panel.

### Add a new section
1. Create `src/content/sections/my-section.js` (copy an existing one — it exports `{ title, icon, pages }`).
2. Import it in `src/content/index.js` and add it to `SECTIONS` (order = sidebar order).

### Fill in the right panel
Edit `src/content/pageMeta.js`. For each page id you can set:

| Field     | Shown as                                            |
| --------- | --------------------------------------------------- |
| `summary` | The paragraph at the top of the right panel         |
| `plan`    | "Available on" (the feature box only shows if set)  |
| `added`   | "Added in", e.g. `'v1.4 · Mar 2026'`                |

Update `UPDATED` in the same file when the docs are revised.

### Add screenshots, images and videos
Everything goes in **`src/assets/media/`** (`images/` and `videos/`) and is picked up automatically.

- **Screenshot placeholders:** save the image as the placeholder label, lowercase with hyphens
  (`Top bar with labels` → `images/top-bar-with-labels.png`) and it replaces the dashed box.
- **Any other image:** `image('file.png', 'Description')` in a page's `blocks`.
- **Images side by side:** `imageRow([{ file, alt }, { file, alt }])`.
- **Video:** `video('file.mp4', 'Caption')` in a page's `blocks`.

See [`src/assets/media/README.md`](src/assets/media/README.md) for the exact file names the docs are waiting for.

### Add or change an icon
Content refers to icons by name (`icon: 'Rocket'`). To use another [Lucide](https://lucide.dev/icons) icon, import it
in `components/ui/Icon.jsx` and add it to the `ICONS` map.

### Add a new block type
1. Add a builder in `content/builders.js`.
2. Create a component in `components/document/blocks/`.
3. Register it in `components/document/blocks/BlockRenderer.jsx`.

## Conventions

- **Content and code are separate.** Text changes should never need a component change.
- One component per file; the file name matches the component name.
- Components receive data through props; shared state lives in `App.jsx`.
- Styling is Tailwind utility classes. Brand blue is Tailwind `blue-600`; the page surface is `#f1f1f1`.
- Responsive breakpoints: phone `< 640px` (plain text page), tablet `≥ 640px` (paper page), desktop `≥ 1024px`
  (permanent sidebar), wide `≥ 1280px` (right panel).
- Run `npm run lint` and `npm run build` before committing.

## Content rules

The user-facing text comes from the product team's "Finzo Report Builder – User Documentation" drafts.
Features marked as unfinished in those drafts (Integrations connection flow, AI report chat, share links) are
intentionally **not** documented yet.
