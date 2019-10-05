import React from 'react'
import useFadeIn from '../hooks/use_fade_in'
import './main.css'

const TimelineItem = ({ time, imageUrl, imageAlt, description }) => {
  let domSelector = React.createRef()
  useFadeIn(domSelector)

  return (
    <li ref={domSelector}>
      <div>
        <div className="time">{ time }</div>
        <img src={{ imageUrl }} alt={{ imageAlt }} style={{ width: '150px', height: '125px' }} />
        { description }
      </div>
    </li>
  )
}

export default TimelineItem
