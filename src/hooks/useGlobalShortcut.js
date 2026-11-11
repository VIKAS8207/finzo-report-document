import { useEffect } from 'react'

/**
 * Runs `onTrigger` when Ctrl/Cmd + `key` is pressed anywhere on the page.
 * @param {string} key  single character, e.g. 'k'
 * @param {() => void} onTrigger
 */
export default function useGlobalShortcut(key, onTrigger) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === key) {
        event.preventDefault()
        onTrigger()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [key, onTrigger])
}
