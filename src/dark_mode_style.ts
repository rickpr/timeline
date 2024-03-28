import { darkTextColor, lightTextColor, darkBackgroundColor, lightBackgroundColor, type Colors, type Theme } from 'theme_context'

const darkModeDefaultColors: Colors = {
  background: darkBackgroundColor,
  text: lightTextColor
}

const lightModeDefaultColors: Colors = {
  background: lightBackgroundColor,
  text: darkTextColor
}

const darkModeStyle = (darkMode: boolean, theme?: Theme): Colors => {
  const defaultColors = darkMode ? darkModeDefaultColors : lightModeDefaultColors
  const themeColors = darkMode ? theme?.colors?.darkMode : theme?.colors?.lightMode
  return themeColors ?? defaultColors
}

export default darkModeStyle
