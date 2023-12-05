import type { CSSProperties } from 'react'

import type { Theme } from '../theme_context'

interface Colors {
  background: CSSProperties['background']
  text: CSSProperties['color']
  button: CSSProperties['background']
}

const darkColor = '#121212'
const lightColor = '#F5F5F5'

const darkModeStyles: Colors = {
  background: darkColor,
  text: lightColor,
  button: '#303233'
}

const lightmodeStyles: Colors = {
  background: lightColor,
  text: darkColor,
  button: '#CFCDCC'
}

const useDarkModeStyle = (darkMode: boolean, theme?: Theme): Colors => {
  const styles = darkMode ? darkModeStyles : lightmodeStyles
  const themeBackground = darkMode ? theme?.darkModeBackground : theme?.lightModeBackground
  return {
    ...styles,
    background: themeBackground ?? styles.background
  }
}

export default useDarkModeStyle
