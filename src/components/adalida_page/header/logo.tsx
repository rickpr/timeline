import React, { type CSSProperties } from 'react'

const Logo = ({ style }: { style: CSSProperties }): JSX.Element => (
  /*
  <svg
    style={style}
    xmlns='http://www.w3.org/2000/svg'
    width='46'
    height='38'
    viewBox='0 0 46 38'
    fill='none'
  >
  <line x1='5.04597' y1='1.85156' x2='40.3274' y2='37.133' stroke='white' strokeLinecap='round' />
  <line x1='0.5' y1='-0.5' x2='50.3954' y2='-0.5' transform='matrix(-0.707107 0.707107 0.707107 0.707107 40.3262 1.85156)' stroke='white' strokeLinecap='round'/>
  <circle cx='22.9997' cy='5.24579' r='5.08954' fill='white'/>
  <circle cx='39.9645' cy='18.8161' r='5.08954' fill='white'/>
  <circle cx='6.03486' cy='18.8161' r='5.08954' fill='white'/>
  </svg>
  */
  <svg
  style={style}
  baseProfile='tiny'
  xmlns='http://www.w3.org/2000/svg'
  viewBox='10 10 240 230'
  >
  <g id='one'>
  <line fill='none' stroke='currentColor' strokeWidth='10' strokeLinecap='round' x1='25' y1='235' x2='235' y2='25'/>
  </g>
  <g id='two'>
  <line fill='none' stroke='currentColor' strokeWidth='10' strokeLinecap='round' x1='235' y1='235' x2='25' y2='25'/>
  </g>
  <g id='dots_two'>
  <circle fill='currentColor' cx='210' cy='130' r='30'/>
  <circle fill='currentColor' cx='130' cy='50' r='30'/>
  <circle fill='currentColor' cx='50' cy='130' r='30'/>
  </g>
  </svg>
)

export default Logo
