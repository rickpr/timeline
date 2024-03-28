import { useEffect, useState } from 'react'

const useDarkMode = (): [boolean | null, () => void] => {
  // Use this hook only from *pages*, not from components.
  const [darkMode, setDarkMode] = useState<boolean | null>(() => {
    if (typeof window === 'undefined') return null
    return JSON.parse(localStorage.getItem('darkMode') ?? 'true')
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = (): void => {
    setDarkMode(oldDarkMode => {
      if (oldDarkMode === null) return null
      return !oldDarkMode
    })
  }
  return [darkMode, toggleDarkMode]
}

export default useDarkMode
