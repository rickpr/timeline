import React from 'react'
const Crossbar = ({isFirstRow, long}) =>
  <div className="col-sm-2" data-aos="fade-up">
    <div className={`centerline-crossbar ${!isFirstRow && `connect-top`}`}></div>
    <div className="centerline-circle"></div>
    <div className={`centerline-line ${long && `long`}`}></div>
  </div>

export default Crossbar
