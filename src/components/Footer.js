import React from 'react';
import '../style/Footer.css';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="footer">
      <div id='carat'>
        <a href='#main' title="Return to top">
          <p><FaAngleUp /></p>
        </a>
      </div>
      <div id='footer-inner'>
        <a href='https://github.com/krmasterson'>
          <p title="Email Logo"><FaGithubSquare id='footer-logo' /></p>
        </a>
        <a href='mailto:kylemasterson25@gmail.com'>
          <p title="Email Logo"><FaRegEnvelope id='footer-logo' /></p>
        </a>
        <a href='https://www.linkedin.com/in/kyle-masterson438/'>
          <p title="Email Logo"><FaLinkedin id='footer-logo' /></p>
        </a>
      </div>
      <div id='caption'>
        <p>Built with <FaReact />. Powered by <FaCoffee />.</p>
      </div>
    </div>
    )
}

export default Footer;
