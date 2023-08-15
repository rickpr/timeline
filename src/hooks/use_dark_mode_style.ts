import type { CSSProperties } from 'react'

interface Colors {
  background: CSSProperties['background']
  text: CSSProperties['color']
  button: CSSProperties['background']
}

const darkColor = '#212025'
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

const useDarkModeStyle = (darkMode: boolean): Colors => {
  return darkMode ? darkModeStyles : lightmodeStyles
}

export default useDarkModeStyle
