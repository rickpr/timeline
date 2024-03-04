import { darkColor, lightColor, darkGradientColor, lightGradientColor, type Colors, type Theme } from '../theme_context'

const darkModeDefaultColors: Colors = {
  background: darkGradientColor,
  text: lightColor
}

const lightModeDefaultColors: Colors = {
  background: lightGradientColor,
  text: darkColor
}

const useDarkModeStyle = (darkMode: boolean, theme?: Theme): Colors => {
  const defaultColors = darkMode ? darkModeDefaultColors : lightModeDefaultColors
  const themeColors = darkMode ? theme?.colors?.darkMode : theme?.colors?.lightMode
  return themeColors ?? defaultColors
}

export default useDarkModeStyle
