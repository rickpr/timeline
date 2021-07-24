import React from 'react'

const Crossbar = ({connectTop, long}) =>
  <>
    <div className={`centerline-crossbar ${connectTop && `connect-top`}`}></div>
    <div className="centerline-circle"></div>
    <div className={`centerline-line ${long && `long`}`}></div>
  </>

export default Crossbar
