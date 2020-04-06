import React from 'react'
const Centerline = ({ offsetToCenter, crossbar }) =>
  <div className={`col-sm-2`} data-aos="fade-up">
    <div className={crossbar && `centerline-crossbar ${offsetToCenter || 'offset-left'}`}></div>
    <div className="centerline-circle"></div>
    <div className="centerline-line"></div>
  </div>

export default Centerline
