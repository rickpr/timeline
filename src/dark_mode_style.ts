import type { CSSProperties } from 'react'

const darkBackgroundColor = '#090B0B'
const darkTextColor = '#3E4242'
const lightColor = '#F5F5F5'

interface Colors {
  background: CSSProperties['color'] & string
  text: CSSProperties['color']
}

const darkModeDefaultColors: Colors = {
  background: darkBackgroundColor,
  text: lightColor
}

const lightModeDefaultColors: Colors = {
  background: lightColor,
  text: darkTextColor
}

const darkModeStyle = (darkMode: boolean): Colors =>
  darkMode ? darkModeDefaultColors : lightModeDefaultColors

export default darkModeStyle
