import React from 'react'

const Button = ({ direction = 'right', onClick }: { direction: 'left' | 'right', onClick: () => void }): JSX.Element =>
  <button className='glass services-navigation-button' onClick={onClick}>
    <div style={{ transform: direction === 'left' ? 'rotate(180deg)' : undefined }}>
      <svg width='85%' height='85%' viewBox='-1 -1 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M0 0L4 0L6 3L4 6L0 6L2 3Z' stroke='white' strokeWidth='2' fill='white' strokeLinejoin='round' />
      </svg>
    </div>
  </button>

export default Button
