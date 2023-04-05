import React from 'react'
export default function navbar() {

  return (
    <header>
      <div className="left-container">
        <img src="./src/images/Logo.svg" alt="santosh-gyawali-logo"/>
        <p>Santosh<span>.</span></p>
      </div>

        <div className="right-container">
            <section className="social">
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
            </section>
            <section className="color-mode">
                <i class="fa-solid fa-moon"></i>
                <ion-icon name="sunny-outline"></ion-icon>
            </section>
        </div>
    </header>
  )
}
