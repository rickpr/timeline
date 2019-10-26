import React from 'react'
const Centerline = ({ offsetToCenter }) =>
  <div className={`col-sm-1 ${offsetToCenter && 'offset-5'}`} data-aos="fade-up">
    <div className={`centerline-crossbar ${offsetToCenter || 'offset-left'}`}></div>
    <div className="centerline-circle"></div>
    <div className="centerline-line">
    </div>
  </div>

export default Centerline
