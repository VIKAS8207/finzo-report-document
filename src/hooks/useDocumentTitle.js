import { useEffect } from 'react'

/** Sets the browser tab title. */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
