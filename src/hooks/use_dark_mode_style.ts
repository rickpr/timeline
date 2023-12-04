import type { CSSProperties } from 'react'

import type { Project } from '../project_data'

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

const useDarkModeStyle = (darkMode: boolean, project?: Project): Colors => {
  const styles = darkMode ? darkModeStyles : lightmodeStyles
  const projectBackground = darkMode ? project?.darkModeBackground : project?.lightModeBackground
  return {
    ...styles,
    background: projectBackground ?? styles.background
  }
}

export default useDarkModeStyle
