import React from 'react'

import type { Project } from 'project_data'
import { ThemeContext } from 'theme_context'

import Header from './header'

interface Props {
  children: React.ReactNode
  project: Project
  darkMode: boolean
  toggleDarkMode: () => void
}

const Layout = (
  { children, project, darkMode, toggleDarkMode }: Props
): JSX.Element => {
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...project }}>
      <Header />
      {children}
    </ThemeContext.Provider>
  )
}

export default Layout
