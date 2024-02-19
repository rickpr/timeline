import React from 'react'

import LayoutComponent from 'components/adalida_page/layout'
import { AllThemes } from './const'

type ThemeName = keyof typeof AllThemes

interface LayoutProps {
  darkMode: boolean
  isProfessionPage: boolean
  isHomePage: boolean
  theme: ThemeName
}

export const Layout = ({ darkMode, isProfessionPage, isHomePage, theme = 'About' }: LayoutProps): JSX.Element => (
  <LayoutComponent
    theme={AllThemes[theme]}
    darkMode={darkMode}
    toggleDarkMode={() => {}}
    isProfessionPage={isProfessionPage}
    setIsProfessionPage={isHomePage ? () => {} : undefined}
  >
    <div />
  </LayoutComponent>
)
