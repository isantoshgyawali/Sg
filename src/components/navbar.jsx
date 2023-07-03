import React, { useState, useEffect } from 'react'
import ImgaeOne from '../images/Logo.svg';

export default function Navbar() {

  return (
    <header>
      <div className="left-container">
        <img src={ImgaeOne} alt="santosh-gyawali-logo" />
      </div>

      <div className="right-container">
        <section className="social">
          <a href="https://twitter.com/isantoshgyawali" target='_blanck'>
            {/* <i className="fa-brands fa-twitter"></i> */}
            <p data-value="Twitter" className='social-txt'>Twitter</p>
          </a>
          <a href="https://github.com/isantoshgyawali" target='_blanck'>
            {/* <i className="fa-brands fa-github"></i> */}
            <p data-value="Github" className='social-txt'>Github</p>
          </a>
          <a href="https://linkedin.com/in/isantoshgyawali" target='_blanck'>
            {/* <i className="fa-brands fa-linkedin"></i> */}
            <p data-value="LinkedIn" className='social-txt'>LinkedIn</p>
          </a>
        </section>

      </div>
    </header>
  )
}


