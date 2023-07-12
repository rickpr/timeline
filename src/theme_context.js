import React from 'react'

import Projects from './project_data'

import AdalidaFace from 'images/adalida_face.jpg'

export const aboutTheme = {
  name: 'About Adalida',
  description: '',
  coverPhoto: AdalidaFace,
  heroPhotoPath: 'images/adalida_face.jpg',
  projectPage: '/adalida/about',
  roles: [],

  colors: {
    primary: '#850021',
    background: '#000000'
  }
}

const ThemeContext = React.createContext(aboutTheme)
export { Projects, ThemeContext }
