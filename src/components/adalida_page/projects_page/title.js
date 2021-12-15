import React, { useRef } from 'react'

// Image
import meowWolfHome from '../../../images/meow_wolf.png'
import downArrow from '../../../images/down_arrow.svg'

const Title = ({ text, image }) => {
  const downArrowScrollsTo = useRef()
  return (
    <div style={{
      display: 'grid',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      backgroundColor: '#000000',
      gridTemplateColumns: 'repeat(auto-fit, minmax(30em, 1fr))',
      minHeight: '100vh'
    }}>
      <div style={{ display: 'grid', justifyItems: 'center', gridTemplateColumns: '1fr', overflow: 'hidden' }}>
        <div className="meow-wolf" style={{
          marginBottom: '10%',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center'
        }}>
          <svg viewBox="0 0 35 16" style={{ fill: '#ff2079', width: '40%', margin: '2%' }}>
            <text x="0" y="15">Meow</text>
          </svg>
          <svg viewBox="0 0 35 16" style={{ fill: '#ff2079', width: '40%', margin: '2%' }}>
            <text x="0" y="15">Wolf</text>
          </svg>
        </div>
        <img
          src={downArrow}
          style={{ width: 'min(20%, calc(100vw - 175%))', cursor: 'pointer' }}
          alt="Down arrow"
          onClick={() => downArrowScrollsTo.current?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
      <div style={{ margin: 'auto 0' }}>
        <img src={meowWolfHome} alt="Meow Wolf Homepage" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  )
}

export default Title
