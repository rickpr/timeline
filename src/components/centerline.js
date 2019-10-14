import React from 'react'
const Centerline = ({ offsetToCenter }) =>
  <div className={`col-sm-1 ${offsetToCenter && 'offset-5'}`}>
    <div
      className="bg-primary"
      style={{
        minHeight: '150px',
        borderWidth: '0 25px',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        //display: 'flex'
      }}
    >
      <div style={{ borderwidth: '1px', borderColor: '#000000', borderStyle: 'solid', borderRadius: '50%', bgColor: '#FFFFFF', minHeight: '20px', minWidth: '20px', position: 'relative' }}></div>
    </div>
  </div>

export default Centerline
