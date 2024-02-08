import { darkColor, lightColor, type Colors, type Theme } from '../theme_context'

const darkModeDefaultColors: Colors = {
  background: darkColor,
  text: lightColor
}

const lightModeDefaultColors: Colors = {
  background: lightColor,
  text: darkColor
}

const useDarkModeStyle = (darkMode: boolean, theme?: Theme): Colors => {
  const defaultColors = darkMode ? darkModeDefaultColors : lightModeDefaultColors
  const themeColors = darkMode ? theme?.colors?.darkMode : theme?.colors?.lightMode
  return themeColors ?? defaultColors
}

export default useDarkModeStyle
