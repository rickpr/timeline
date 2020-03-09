import React from 'react'

const MobileHamburger = ({ collapsibleId }) =>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target={'#' + collapsibleId}
    aria-controls={collapsibleId}
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

export default MobileHamburger
