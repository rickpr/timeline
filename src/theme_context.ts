import { createContext } from 'react'

import { Themes, type Theme } from './themes'

interface ThemeContextType extends Theme {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  toggleDarkMode: (): void => {},
  ...Themes.About
})
export { ThemeContext }
