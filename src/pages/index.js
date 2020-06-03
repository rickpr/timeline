import React, { useEffect } from 'react'
import '../sass/custom.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'

import Layout from '../components/layout'
import Timeline from '../components/timeline'

const IndexPage = () => {
  useEffect(() => { AOS.init({ easing: 'ease-out-back', duration: 1000 }) }, [])
  return <Layout><Timeline /></Layout>
}

export default IndexPage
