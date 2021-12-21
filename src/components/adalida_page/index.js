import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

import meowWolf from '../../images/meow_wolf.png'
import face from './face.png'

const AdalidaPage = () => {
  useEffect(() => {
    setTimeout(() => navigate('/adalida/apps/'), 5000)
  }, [])

  const phones = (
    <div className='phones'>
      <img src={meowWolf} alt='Meow Wolf Homepage' />
      <img src={face} alt='Face Recognition' />
      <img src={face} alt='Face Recognition' />
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
