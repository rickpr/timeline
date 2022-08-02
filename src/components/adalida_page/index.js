import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import SplashPage from './splash_page'

import 'sass/adalida_page/index.scss'

const AdalidaPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => navigate('/adalida/apps'), 5000)
    return () => clearTimeout(timer)
  }, [])

  return <SplashPage />
}

export default AdalidaPage
