import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from 'theme_context'

const Desktop = ({ title, click, number }) => {
  const { name, primary, description } = useContext(ThemeContext)
  const active = name === title
  const animationDuration = 200
  const backgroundColor = active ? primary : '#CCCCCC88'
  const color = active ? primary : '#FFFFFF'

  const textStyle = {
    color,
    fontSize: active ? '5vh' : '3vh',
    pointerEvents: 'none',
    whiteSpace: 'nowrap'
  }

  const transitionStyle = {
    transitionProperty: 'all',
    transitionDuration: `${animationDuration}ms`,
    transitionTimingFunction: 'ease-in-out'
  }

  const navigationLink = () =>
    <div style={{ position: 'relative', height: '100%', ...transitionStyle }}>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          pointerEvents: 'visible',
          minWidth: '0.25vh',
          backgroundColor,
          ...transitionStyle
        }}
      />
    </div>

  return (
    <div
      onClick={click}
      style={{
        cursor: 'pointer',
        display: 'grid',
        alignItems: 'center',
        columnGap: '1vmin',
        minHeight: '1.5rem',
        gridTemplateColumns: '1vw 1fr',
        pointerEvents: 'none',
        ...transitionStyle
      }}
    >
      {navigationLink()}
      <div style={{ ...textStyle, ...transitionStyle }}>
        {number} {title}
        {active &&
         <div
           style={{
             ...transitionStyle,
             ...textStyle,
             fontSize: '2vh',
             whiteSpace: 'normal',
             color: '#FFFFFF'
           }}
         >
           {description}
         </div>
        }
      </div>
    </div>
  )
}

Desktop.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
}

export default Desktop
