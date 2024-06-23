import type { CSSProperties } from 'react'

const darkTextColor = '#3E4242'
const lightTextColor = '#F5F5F5'
const darkBackgroundColor = '#090B0B'
const lightBackgroundColor = '#F5F5F5'

interface Colors {
  background: CSSProperties['color']
  text: CSSProperties['color']
}

const darkModeDefaultColors: Colors = {
  background: darkBackgroundColor,
  text: lightTextColor
}

const lightModeDefaultColors: Colors = {
  background: lightBackgroundColor,
  text: darkTextColor
}

const darkModeStyle = (darkMode: boolean): Colors =>
  darkMode ? darkModeDefaultColors : lightModeDefaultColors

export default darkModeStyle
