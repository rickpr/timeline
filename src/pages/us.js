import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../sass/custom.scss'

import Layout from '../components/layout'
import MemphisPattern from '../components/memphis_pattern'
import RemoteTimeline from '../components/timeline/remote_timeline'

const Us = () => {
  useEffect(() => { AOS.init({ easing: 'ease-out-back', duration: 1000, offset: 600 }) }, [])
  return (
    <Layout>
      <MemphisPattern />
      <RemoteTimeline timelineId='1' />
    </Layout>
  )
}

export default Us
