import React from 'react'
import Clock from './clock'

const WorldClock = () => {
  const timeZones = [
    'America/Los_Angeles',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Africa/Cairo',
    'Australia/Sydney'
  ]
  const clocks = timeZones.map(timeZone => <Clock key={timeZone} timeZone={timeZone} />)
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(15em, 1fr))',
      width: '100%',
      justifyItems: 'center',
      alignContent: 'center',
      rowGap: '4em',
      background: 'rgba(0, 0, 0, 0.5)',
      margin: '1em',
      padding: '1em 0'
    }}>
      {clocks}
    </div>
  )
}

export default WorldClock
