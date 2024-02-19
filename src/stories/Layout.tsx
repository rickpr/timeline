import React from 'react'

import FacetThemes from 'facet_themes'
import CaseStudyThemes from 'case_study_themes'
import { AboutTheme } from 'theme_context'
import LayoutComponent from 'components/adalida_page/layout'

const themes = { ...FacetThemes, ...CaseStudyThemes, About: AboutTheme }
type ThemeName = keyof typeof themes

interface LayoutProps {
  darkMode: boolean
  isProfessionPage: boolean
  isHomePage: boolean
  theme: ThemeName
}

export const Layout = ({ darkMode, isProfessionPage, isHomePage, theme = 'About' }: LayoutProps): JSX.Element => (
  <LayoutComponent
    theme={themes[theme]}
    darkMode={darkMode}
    toggleDarkMode={() => {}}
    isProfessionPage={isProfessionPage}
    setIsProfessionPage={isHomePage ? () => {} : undefined}
  >
    <div />
  </LayoutComponent>
)
