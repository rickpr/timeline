import React from 'react';
import { faGithub, faLinkedinIn, faHackerrank } from '@fortawesome/free-brands-svg-icons'
import Icon from './icon';

const Footer = () =>
  <footer>
    <nav className="navbar-custom">
      <div className="row footer-nav">
        <div className="col-sm-4 col-12">
          Adalida Baca<br />
          <Icon href="https://github.com/adalidabaca" icon={faGithub} />
          <Icon href="https://linkedin.com/in/adalidabaca" icon={faLinkedinIn} />
          <Icon href="https://www.hackerrank.com/profile/adalida_baca" icon={faHackerrank} />
        </div>
        <div className="col-sm-4 col-12">
          <br />
          <span className="footer-icon">&hearts;</span>
        </div>
        <div className="col-sm-4 col-12">
          Ricardo Piro-Rael<br />
          <Icon href="https://github.com/rickpr" icon={faGithub} />
          <Icon href="https://linkedin.com/in/rickpr" icon={faLinkedinIn} />
          <Icon href="https://www.hackerrank.com/profile/fdisk87" icon={faHackerrank} />
        </div>
      </div>
    </nav>
  </footer>;

export default Footer
