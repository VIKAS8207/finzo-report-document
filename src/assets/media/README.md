# Media folder

Put every image and video for the docs here.

```
media/
├── images/   .png  .jpg  .jpeg  .webp  .gif  .svg
└── videos/   .mp4  .webm
```

Files are picked up automatically — no imports and no config.

## 1. Replace a screenshot placeholder (easiest)

Every `[Screenshot: …]` box in the docs has a label, e.g. `shot('Dashboard with numbered callouts')`.
Save your image in `images/` with the **label as the file name, lowercase, words joined by hyphens**:

All screenshots the docs are waiting for right now (use `.png`, `.jpg` or `.webp` — the extension doesn't matter):

| Placeholder label                 | File name to use                        | Page                      |
| --------------------------------- | --------------------------------------- | ------------------------- |
| Welcome page                      | `welcome-page.png`                      | First-time setup          |
| Business type page                | `business-type-page.png`                | First-time setup          |
| Top bar with labels               | `top-bar-with-labels.png`               | The top bar               |
| Dashboard with numbered callouts  | `dashboard-with-numbered-callouts.png`  | The Dashboard             |
| Library with categories           | `library-with-categories.png`           | The Library               |
| Library with search dropdown open | `library-with-search-dropdown-open.png` | The Library               |
| My Reports table                  | `my-reports-table.png`                  | My Reports                |
| Schedule page                     | `schedule-page.png`                     | The Schedule page         |
| Data Sync page                    | `data-sync-page.png`                    | Data Sync page            |
| Settings menu                     | `settings-menu.png`                     | Settings overview         |

The placeholder is replaced by the image the next time the page loads. Delete the file to bring the placeholder back.
If a label changes in `src/content/sections/` (search for `shot(`), the file name changes with it.

## 2. Add an image anywhere

Save the file in `images/`, then add a block to the page in `src/content/sections/…`:

```js
image('invite-team-member.png', 'The Add team member window')   // file name, description (alt text)
```

## 3. Add a video

Save the file in `videos/`, then add a block:

```js
video('create-a-report.mp4', 'How to create a report')           // file name, caption
```

## Tips

- Keep screenshots around 1600 px wide; PNG or WebP for screens, MP4 (H.264) for video.
- Use lowercase file names with hyphens, no spaces.
- Compress large files before adding them — everything here is shipped to the browser.
- Descriptive text (alt text / captions) helps accessibility, so please always fill it in.
