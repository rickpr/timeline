import { useEffect, useState } from 'react'

const useDarkMode = (): [boolean, () => void] => {
  // Use this hook only from *pages*, not from components.
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return typeof window !== 'undefined' && JSON.parse(localStorage.getItem('darkMode') ?? 'true')
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = (): void => { setDarkMode(oldDarkMode => !oldDarkMode) }
  return [darkMode, toggleDarkMode]
}

export default useDarkMode
