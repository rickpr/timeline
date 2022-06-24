import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Clock = ({ timeZone }) => {
  const primary = '#000000'
  const stroke = '#FFFFFF'
  const gold = '#FFD700'
  const timeZoneFriendly = timeZone.split('/')[1].split('_').join(' ').toUpperCase()
  const getDate = () => {
    const dateString = new Date().toLocaleString('en-US', { timeZone })
    const [date, hour, minute, second, amOrPm] = dateString.split(/:|\s/)
    return { date, hour, minute, second, amOrPm }
  }
  const [now, setNow] = useState(getDate())

  const secondHandAngle = () => now.second * 6

  const minuteHandAngle = () => {
    const minuteAngle = now.minute * 6
    const secondAngle = now.second / 10
    return minuteAngle + secondAngle
  }

  const hourHandAngle = () => {
    const hourAngle = now.hour * 30
    const minuteAngle = now.minute / 10
    const secondAngle = now.second / 600
    return hourAngle + minuteAngle + secondAngle
  }

  useEffect(() => {
    const interval = setInterval(() => { setNow(getDate()) }, 1000)
    return () => clearInterval(interval)
  }, [])

  const clockNumber = number => {
    // X and Y translation for each clock number
    const hour = number % 12
    const offset = {
      0: [0, -1],
      1: [0.5, -Math.sqrt(3) / 2],
      2: [Math.sqrt(3) / 2, -0.5],
      3: [1, 0],
      4: [Math.sqrt(3) / 2, 0.5],
      5: [0.5, Math.sqrt(3) / 2],
      6: [0, 1],
      7: [-0.5, Math.sqrt(3) / 2],
      8: [-Math.sqrt(3) / 2, 0.5],
      9: [-1, 0],
      10: [-Math.sqrt(3) / 2, -0.5],
      11: [-0.5, -Math.sqrt(3) / 2]
    }[hour]
    const [offsetX, offsetY] = [offset[0] * 4, offset[1] * 4]
    const style = {
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      color: stroke,
      transform: `translate(-50%, -50%) translate(${offsetX}em, ${offsetY}em)`,
      textShadow: `0 0 2px ${gold}`
    }
    return <div key={number} style={style}>{number}</div>
  }

  const dropShadow = { filter: `drop-shadow(0.1em 0.1em 0.2em ${stroke})` }
  const border =
    <div style={{
      border: `0.3em solid ${primary}`,
      borderRadius: '50%',
      height: '100%',
      width: '100%',
      position: 'absolute',
      background: '#00000040',
      ...dropShadow
    }}/>
  const handStyles = {
    left: 0,
    bottom: '50%',
    right: 0,
    width: 0,
    margin: 'auto',
    position: 'absolute',
    transformOrigin: 'bottom',
    borderRadius: '10%'
  }
  const getTransform = rotation => `rotate(${rotation()}deg)`
  const secondHand = <div style={{ border: `0.1em solid ${stroke}`, height: '4em', transform: getTransform(secondHandAngle), ...handStyles }} />
  const minuteHand = <div style={{ border: `0.1em solid ${gold}`, height: '3em', transform: getTransform(minuteHandAngle), ...handStyles }} />
  const hourHand = <div style={{ border: '0.1em solid #FFFFFF', height: '2em', transform: getTransform(hourHandAngle), ...handStyles }} />
  const center = (
    <div style={{
      border: '0.3em solid #000000',
      transform: 'translate(0, 0.3em)',
      ...handStyles,
      borderRadius: '50%',
      ...dropShadow
    }}
    />
  )
  const cityPlaque = (
    <div style={{
      margin: 'auto',
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Montserrat',
      color: 'black',
      background: 'white'
    }}>
      {timeZoneFriendly}
    </div>
  )
  const amOrPm = (
    <div style={{
      position: 'absolute',
      margin: 'auto',
      left: 0,
      right: 0,
      top: '60%',
      textAlign: 'center',
      zIndex: -1,
      color: 'white'
    }}>
      {now.amOrPm}
    </div>
  )

  return (
    <div style={{ display: 'grid', rowGap: '1em', justifyContent: 'center' }}>
      <div style={{ height: '10em', width: '10em', position: 'relative' }}>
        {border} {secondHand} {minuteHand} {hourHand} {center} {amOrPm}
        {Array.from({ length: 12 }).map((number, index) => clockNumber(index + 1))}
      </div>
      {cityPlaque}
    </div>
  )
}

Clock.propTypes = { timeZone: PropTypes.string.isRequired }

export default Clock
