import React, { useState } from 'react'
import ImgaeOne from '../images/Logo.svg';

export default function navbar() {

  return (
    <header>
      <div className="left-container">
        <img src={ImgaeOne} alt="santosh-gyawali-logo" />
      </div>

      <div className="right-container">
        <section className="social">
          <a href="https://twitter.com/isantoshgyawali" target='_blanck'>
            {/* <i className="fa-brands fa-twitter"></i> */}
            <p>Twitter</p>
          </a>
          <a href="https://github.com/isantoshgyawali" target='_blanck'>
            {/* <i className="fa-brands fa-github"></i> */}
            <p>Github</p>
          </a>
          <a href="https://linkedin.com/in/isantoshgyawali" target='_blanck'>
            {/* <i className="fa-brands fa-linkedin"></i> */}
            <p>LinkedIn</p>
          </a>
        </section>


      </div>
    </header>
  )
}
