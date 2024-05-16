import React from 'react'

import ProjectThemes from 'project_themes'
import { ThemeContext } from 'theme_context'
import { Themes } from 'themes'
import Card from 'components/portfolio_page/card'
import darkModeStyle from 'dark_mode_style'

type ThemeName = keyof typeof ProjectThemes

interface PortfolioPageCardProps {
  darkMode: boolean
  theme: ThemeName
}

export const PortfolioPageCard = ({ darkMode, theme = 'AirbrushArtStudio' }: PortfolioPageCardProps): JSX.Element => {
  const { background, text: color } = darkModeStyle(darkMode)
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => {}, ...Themes.About }}>
      <div style={{ color, width: '500px', position: 'relative', background, padding: '10px' }}>
        <Card theme={ProjectThemes[theme]} />
      </div>
    </ThemeContext.Provider>
  )
}
