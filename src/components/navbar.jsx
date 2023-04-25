import React, { useState } from 'react'

export default function navbar() {

  return (
    <header>
      <div className="left-container">
        <img src="./src/images/Logo.svg" alt="santosh-gyawali-logo" />
      </div>

      <div className="right-container">
        <section className="social">
          <a href="https://twitter.com/isantoshgyawali" target='_blanck'>
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://github.com/isantoshgyawali" target='_blanck'>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/isantoshgyawali" target='_blanck'>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </section>


      </div>
    </header>
  )
}
