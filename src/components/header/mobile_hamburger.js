import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

const MobileHamburger = ({ collapsibleId }) =>
  <button
    className='navbar-toggler'
    type='button'
    data-toggle='collapse'
    data-target={'#' + collapsibleId}
    aria-controls={collapsibleId}
    aria-expanded='false'
    aria-label='Toggle navigation'
  >
    <FontAwesomeIcon icon={faHamburger} />
  </button>

export default MobileHamburger
