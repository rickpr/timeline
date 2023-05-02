import React from 'react'

import App from './app'

import 'sass/adalida_page/index.scss'

const AdalidaPage = () => {
  return (
    <div className='apps-page'>
      <div className='app-covers'>
        <App title='GainTain' />
        <App title='ZarasCleaning' />
        <App title='Zeno' />
        <App title='HBOMax' />
        <App title='Logi' />
        <App title='Cyph' />
      </div>
    </div>
  )
}

export default AdalidaPage
