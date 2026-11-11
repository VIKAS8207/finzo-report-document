import { Fragment } from 'react'

/** Splits text on **bold**, `code` and *italic* markers. */
const TOKENS = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g

/**
 * Renders a string with light inline markup:
 *   **bold**   *italic*   `code`
 */
export default function Inline({ text }) {
  return text
    .split(TOKENS)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith('`')) {
        return (
          <code key={i} className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.85em] text-slate-800">
            {part.slice(1, -1)}
          </code>
        )
      }
      if (part.startsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>
      return <Fragment key={i}>{part}</Fragment>
    })
}
