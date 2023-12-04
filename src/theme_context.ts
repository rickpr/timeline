import React from 'react'

import Projects, { About } from './project_data'

const ThemeContext = React.createContext({
  darkMode: true,
  toggleDarkMode: (): void => { /* Do nothing */ },
  ...About
})
export { Projects, ThemeContext }
