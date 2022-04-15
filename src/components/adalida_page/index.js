import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import SplashPage from './splash_page'

import 'sass/adalida_page/index.scss'

const AdalidaPage = () => {
  useEffect(() => {
    setTimeout(() => navigate('/adalida/apps/'), 5000)
  }, [])

  return <SplashPage />
}

export default AdalidaPage
