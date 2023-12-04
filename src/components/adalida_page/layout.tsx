import React from 'react'

import type { Project } from 'project_data'
import { ThemeContext } from 'theme_context'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

import Background from './background'
import Header from './header'

interface Props {
  children: React.ReactNode
  project: Project
  darkMode: boolean
  toggleDarkMode: () => void
  isAboutPage?: boolean
  setIsAboutPage?: (updateAboutPage: boolean | ((isAboutPage: boolean) => boolean)) => void
}

const Layout = (
  { children, project, darkMode, toggleDarkMode, isAboutPage, setIsAboutPage }: Props
): JSX.Element => {
  const { background, text: color } = useDarkModeStyle(darkMode, project)
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, ...project }}>
      <Background background={background} />
      <div style={{ color, transition: 'all 0.5s ease-in-out' }}>
        <Header isAboutPage={isAboutPage} setIsAboutPage={setIsAboutPage} />
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
