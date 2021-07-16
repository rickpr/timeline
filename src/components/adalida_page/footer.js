import { Link } from 'gatsby'
import React from 'react';

const Footer = () =>
  <footer>
    <nav className="navbar-custom">
      <div className="row footer-nav">
        <div className="col-sm-4 col-12">
          Social: <Link className="footer-icon" to="/us">Helios</Link>
        </div>
        <div className="col-sm-4 col-12">
          Email: <Link className="footer-icon" to="mailto:adalida.baca@gmail.com">adalida.baca@gmail.com</Link>
        </div>
        <div className="col-sm-4 col-12">
          Mobile: <Link className="footer-icon" to="tel:505-480-3550"> (505) 480-3550</Link>
        </div>
      </div>
    </nav>
  </footer>

export default Footer
