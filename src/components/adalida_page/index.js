import React from 'react'

import { ThemeContext, Themes } from 'theme_context'

import App from './app'

import 'sass/adalida_page/index.scss'

import AdalidaFace from 'images/adalida_face.jpg'

const AdalidaPage = () => {
  return (
    <ThemeContext.Provider value={Themes.GainTain}>
      <div className='apps-page'>
        <div style={{ padding: '20px 30px' }} className='apps-portrait'>
          <img alt="Adalida Portrait" src={AdalidaFace} style={{ width: '100%' }} />
          <h2>Adalida Baca</h2>
          <p>
            Hello, I&apos;m an enthusiastic Product Designer in the Bay Area.
            Welcome to my portfolio!
          </p>
        </div>
        <div className='app-covers'>
          <div className='apps-row'>
            <App title='GainTain' />
            <App title='ZarasCleaning' />
          </div>
          <div className='apps-row'>
            <App title='Zeno' />
            <div className='app-cover' />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default AdalidaPage
