import React from 'react'

import CaseStudyThemes from 'case_study_themes'
import { AboutTheme, ThemeContext } from 'theme_context'
import Card from 'components/portfolio_page/card'
import useDarkModeStyle from 'hooks/use_dark_mode_style'

type ThemeName = keyof typeof CaseStudyThemes

interface PortfolioPageCardProps {
  darkMode: boolean
  theme: ThemeName
}

export const PortfolioPageCard = ({ darkMode, theme = 'AirbrushArtStudio' }: PortfolioPageCardProps): JSX.Element => {
  const { background, text: color } = useDarkModeStyle(darkMode)
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => {}, ...AboutTheme }}>
      <div style={{ color, width: '500px', position: 'relative', background, padding: '10px' }}>
        <Card theme={CaseStudyThemes[theme]} />
      </div>
    </ThemeContext.Provider>
  )
}
