import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { makeMediaTag } from '../projects_page/media_with_text'

const SmallProject = ({ media }) => {
  const [showPopUp, setShowPopUp] = useState(false)
  const style = { height: '100%', width: '100%' }
  const popUp = (
    <div
      style={{
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center',
        position: 'fixed',
        width: '100%',
        height: '100%',
        background: '#000000CC',
        left: '0',
        top: '0',
        zIndex: 4
      }}
      role='tab'
      tabIndex={0}
      onClick={() => setShowPopUp(false)}
      onKeyDown={(event) => [' ', 'Enter', 'Escape'].includes(event.key) && setShowPopUp(false)}
    >
    <div style={{ height: '90vh', width: '90vw', display: 'flex', placeItems: 'center', placeContent: 'center' }}>
        <div style={{ position: 'relative', width: 'max-content', maxWidth: '100%', background: '#000000' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 5, background: '#000000' }}>
            <button
              style={{
                cursor: 'pointer',
                color: 'white',
                fontSize: '4vmin',
                background: '#000000',
                border: 0
              }}
            >
              &#x2715;
            </button>
          </div>
          {makeMediaTag({ media, style: { maxHeight: '90vh', maxWidth: '90vw', ...style } })}
        </div>
      </div>
    </div>
  )
  return (
    <>
      {showPopUp && popUp}
      <div
        style={{
          background: '#F5F5F5',
          cursor: 'pointer',
          display: 'flex',
          width: '325px',
          minHeight: '325px',
          borderRadius: '1vh',
          padding: '20px'
        }}
        role='tab'
        tabIndex={0}
        onKeyDown={(event) => [' ', 'Enter'].includes(event.key) && setShowPopUp(true)}
        onClick={() => setShowPopUp(true)}
      >
        {makeMediaTag({ media, style })}
      </div>
    </>
  )
}

SmallProject.propTypes = {
  media: PropTypes.string.isRequired
}

export default SmallProject
