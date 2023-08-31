import React, { type CSSProperties } from 'react'

const Logo = ({ style }: { style: CSSProperties }): JSX.Element => (
  <svg
    style={style}
    baseProfile='tiny'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 240 240'
    strokeLinecap='round'
  >
    <g id='one'>
      <line fill='none' stroke='currentColor' strokeWidth='10' x1='25' y1='235' x2='235' y2='25'/>
    </g>
    <g id='two'>
      <line fill='none' stroke='currentColor' strokeWidth='10' x1='235' y1='235' x2='25' y2='25'/>
    </g>
    <g id='dots_two'>
      <circle fill='currentColor' cx='210' cy='130' r='30'/>
      <circle fill='currentColor' cx='130' cy='50' r='30'/>
      <circle fill='currentColor' cx='50' cy='130' r='30'/>
    </g>
  </svg>
)

export default Logo
