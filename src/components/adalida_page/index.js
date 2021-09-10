import { Link, navigate } from 'gatsby'
import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';

import useAnimateOnScroll from '../../hooks/use_animate_on_scroll'

import Timeline from '../timeline/'
import TimelineDescription from '../timeline/timeline_description'

import meow_wolf_home from './meow_wolf_home.png'
import meow_wolf from './meow_wolf.png'
import face from './face.png'
import donor_page from './donor_page.png'

const AdalidaPage = () => {
  useEffect(() => {
    setTimeout(() => navigate('/adalida/apps/'), 5000)
  }, [])

  const phones =
    <div className="phones">
      <img src={meow_wolf} alt="Meow Wolf Homepage" key="meow_wolf" />
      <img src={face} alt="Face Recognition" key="face" />
      <img src={face} alt="Face Recognition" key="face2" />
    </div>

  return (
    <>
      <div className="dark spacer" />
      <div className="dark">
        <div className="dark top-border" />
        <div className="dark spacer" />
        <div className="dark spacer" />
        <div className="dark spacer" />
        <div className="adalida-header">
          <div className="huge primary">
            ADALIDA
          </div>
          <div className="huge white">
            BACA
          </div>
          <div className="dark spacer" />
          <div className="big white">
            UX Designer
          </div>
        </div>
        {phones}
        <div className="dark spacer" />
        <div className="dark bottom-border" />
        <div className="dark right-border" />
      </div>
    </>
  )
}


export default AdalidaPage
