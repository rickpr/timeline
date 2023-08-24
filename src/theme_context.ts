import React from 'react'

import Projects, { type Project } from './project_data'

import AdalidaFace from 'images/adalida_face.jpg'

export const AboutTheme: Project = {
  name: 'About Adalida',
  description: '',
  coverPhoto: AdalidaFace,
  heroPhoto: AdalidaFace,
  projectPage: '/adalida/about',
  roles: [],
  background: '#FE347E'
}

const ThemeContext = React.createContext({
  darkMode: true,
  toggleDarkMode: (): void => { /* Do nothing */ },
  ...AboutTheme
})
export { Projects, ThemeContext }
