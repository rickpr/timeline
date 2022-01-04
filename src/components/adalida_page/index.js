import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

import cyphPhone from 'images/cyph.png'
import meowWolf from 'images/meow_wolf.png'
import heliosPhone from 'images/helios.png'

const AdalidaPage = () => {
  useEffect(() => {
    setTimeout(() => navigate('/adalida/apps/'), 5000)
  }, [])

  const phones = (
    <div className='phones'>
      <img src={cyphPhone} alt='Cyph' />
      <img src={meowWolf} alt='Meow Wolf' />
      <img src={heliosPhone} alt='Helios' />
    </div>
  )

  return (
    <>
      <div className='dark spacer' />
      <div className='dark'>
        <div className='dark top-border' />
        <div className='dark spacer' />
        <div className='dark spacer' />
        <div className='dark spacer' />
        <div className='adalida-header'>
          <div className='huge primary'>
            ADALIDA
          </div>
          <div className='huge white'>
            BACA
          </div>
          <div className='dark spacer' />
          <div className='big white'>
            UX Designer
          </div>
        </div>
        {phones}
        <div className='dark spacer' />
        <div className='dark bottom-border' />
        <div className='dark right-border' />
      </div>
    </>
  )
}

export default AdalidaPage
