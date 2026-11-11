import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const CONFIRMATION_MS = 1500

/** Icon-only button that copies the current page link and briefly shows a check mark. */
export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), CONFIRMATION_MS)
    } catch {
      // Clipboard access can be blocked by the browser; fail silently.
    }
  }

  const label = copied ? 'Link copied' : 'Copy page link'
  return (
    <button
      onClick={copyLink}
      aria-label={label}
      title={label}
      className="shrink-0 rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
    >
      {copied ? <Check className="h-[18px] w-[18px] text-blue-600" /> : <Copy className="h-[18px] w-[18px]" />}
    </button>
  )
}
