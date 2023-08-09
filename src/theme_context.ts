import React from 'react'

import Projects, { type Project } from './project_data'

import AdalidaFace from 'images/adalida_face.jpg'

export const aboutTheme: Project = {
  name: 'About Adalida',
  description: '',
  coverPhoto: AdalidaFace,
  heroPhoto: AdalidaFace,
  projectPage: '/adalida/about',
  roles: [],

  colors: {
    scrollBar: '#FE347E',
    background: '#000000'
  }
}

const ThemeContext = React.createContext({
  darkMode: false,
  setDarkMode: (_: boolean) => { /* Do nothing */ },
  ...aboutTheme
})
export { Projects, ThemeContext }
