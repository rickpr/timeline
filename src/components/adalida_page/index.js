import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import Image from 'components/image'

import useViewportHeight from 'hooks/use_viewport_height'

import 'sass/adalida_page/index.scss'

const AdalidaPage = () => {
  useEffect(() => {
    setTimeout(() => navigate('/adalida/apps/'), 5000)
  }, [])

  const styles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    alignContent: 'space-around',
    height: `${useViewportHeight()}px`,
    padding: '10vh 0'
  }
  return (
    <div className='dark' style={styles}>
      <div style={{ textAlign: 'center', fontSize: '10vmin' }}>
        <span style={{ color: '#60F11C' }}>Hello</span>
        <span style={{ color: '#FFFFFF' }}>, I&apos;m</span>
        <span style={{ color: '#FF2079' }}> Adalida Baca</span>
      </div>
      <Image path='images/adalida_face.jpg' style={{ height: '30vmin' }} />
      <div style={{ color: 'white', fontSize: '5vmin' }}>&#47;&#47; UX Designer</div>
      <button style={{ backgroundColor: '#FF2079', color: 'white', borderRadius: '3px', border: 'none', fontSize: '3vmin' }}>
        Contact Adalida
      </button>
    </div>
  )
}

export default AdalidaPage
