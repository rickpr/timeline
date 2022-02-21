import React, { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../sass/custom.scss'

import Layout from '../components/layout'
import MemphisPattern from '../components/memphis_pattern'
import RemoteTimeline from '../components/timeline/remote_timeline'

const Us = () => {
  const layoutRef = useRef(null)
  useEffect(() => { AOS.init({ easing: 'ease-out-back', duration: 1000, offset: 600 }) }, [])
  return (
    <div ref={layoutRef}>
      <MemphisPattern containerRef={layoutRef} />
      <Layout>
        <RemoteTimeline timelineId='1' />
      </Layout>
    </div>
  )
}

export default Us
