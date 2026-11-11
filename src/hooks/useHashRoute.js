import { useEffect, useState } from 'react'
import { findPage } from '../content'
import { readPageIdFromUrl } from '../lib/navigation'

/** Returns the documentation page that matches the current URL hash, and keeps it in sync. */
export default function useHashRoute() {
  const [pageId, setPageId] = useState(readPageIdFromUrl)

  useEffect(() => {
    const onHashChange = () => setPageId(readPageIdFromUrl())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return findPage(pageId)
}
