import React from 'react'

const Crossbar = ({ green }) =>
  <div className='centerline-line'>
    <div className={`centerline-circle ${green && 'green'}`} />
  </div>

export default Crossbar
