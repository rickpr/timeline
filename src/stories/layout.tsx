import React from 'react'

import LayoutComponent from 'components/layout'
import { AllThemes } from './const'

type ThemeName = keyof typeof AllThemes

interface LayoutProps {
  darkMode: boolean
  isPortfolioPage: boolean
  isHomePage: boolean
  theme: ThemeName
}

export const Layout = ({ darkMode, isPortfolioPage, isHomePage, theme = 'About' }: LayoutProps): JSX.Element => (
  <LayoutComponent
    theme={AllThemes[theme]}
    darkMode={darkMode}
    toggleDarkMode={() => {}}
    isPortfolioPage={isPortfolioPage}
    setIsPortfolioPage={isHomePage ? () => {} : undefined}
  >
    <div />
  </LayoutComponent>
)
