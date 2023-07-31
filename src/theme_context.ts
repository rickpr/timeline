import React from 'react'

import Projects from './project_data'

import AdalidaFace from 'images/adalida_face.jpg'

export const aboutTheme = {
  name: 'About Adalida',
  description: '',
  coverPhoto: AdalidaFace,
  heroPhoto: AdalidaFace,
  projectPage: '/adalida/about',
  roles: [],

  colors: {
    scrollBar: '#850021',
    background: '#000000'
  }
}

const ThemeContext = React.createContext({
  darkMode: false,
  setDarkMode: () => {},
  ...aboutTheme
})
export { Projects, ThemeContext }
