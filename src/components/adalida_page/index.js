import React from 'react'

import App from './app'
import Sidebar from './sidebar'

import 'sass/adalida_page/index.scss'

const AdalidaPage = () => {
  return (
    <div className='apps-page'>
      <Sidebar />
      <div className='app-covers'>
        <div className='apps-row'>
          <App title='GainTain' />
          <App title='ZarasCleaning' />
        </div>
        <div className='apps-row'>
          <App title='Zeno' />
          <App title='HBOMax' />
        </div>
      </div>
    </div>
  )
}

export default AdalidaPage
