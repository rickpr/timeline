import React from 'react'
import '../sass/custom.scss'
import 'bootstrap/dist/js/bootstrap.js'
import 'aos/dist/aos.css'
import AOS from 'aos'

import Layout from '../components/layout'
import Timeline from '../components/timeline'
AOS.init({ easing: 'ease-out-back', duration: 1000 })

const IndexPage = () => <Layout><Timeline /></Layout>

export default IndexPage
