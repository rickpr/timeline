import React from 'react'

import useDarkMode from 'hooks/use_dark_mode'
import type { Project } from 'project_data'
import { ThemeContext } from 'theme_context'

import Header from '../header'
import ScrollProgress from './scroll_progress'

const Layout = (
  { children, project }: { children: React.ReactNode, project: Project }
): JSX.Element => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...project }}>
      <Header sticky={<ScrollProgress />} />
      <div style={{ minHeight: '100px' }} />
      {children}
    </ThemeContext.Provider>
  )
}

export default Layout
